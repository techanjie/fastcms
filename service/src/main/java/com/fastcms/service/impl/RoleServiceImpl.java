package com.fastcms.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fastcms.cache.CacheConfig;
import com.fastcms.entity.Role;
import com.fastcms.mapper.RoleMapper;
import com.fastcms.service.IPermissionService;
import com.fastcms.service.IRoleService;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * 角色服务实现类
 * @author wjun_java@163.com
 * @since 2021-02-14
 */
@Service
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements IRoleService {

    @Override
    @Transactional
    @CacheEvict(value = {CacheConfig.ROLE_PERMISSION_CACHE_NAME, CacheConfig.USER_MENU_PERMISSION_CACHE_NAME}, key = "#roleId")
    public void saveRolePermission(Long roleId, List<Long> permissionIdList) {
        getBaseMapper().deleteByRoleId(roleId);
        getBaseMapper().saveRolePermission(roleId, permissionIdList);
    }

    @Override
    public List<IPermissionService.TreeNode> getRolePermission(Long roleId) {
        List<IPermissionService.RolePermission> permissionList = getBaseMapper().getRolePermission(roleId);

        List<IPermissionService.TreeNode> treeNodeList = new ArrayList<>();
        permissionList.forEach(item -> {
            IPermissionService.TreeNode treeNode = new IPermissionService.TreeNode(item.getId(), item.getParentId(), item.getTitle(), item.getIsHide());
            treeNode.setChecked(item.getRoleId() != null);
            treeNodeList.add(treeNode);
        });

        //递归组装children
        List<IPermissionService.TreeNode> parentNodeList = treeNodeList.stream().filter(item -> item.getParentId() == 0).collect(Collectors.toList());
        parentNodeList.forEach(item -> getChildren(item, treeNodeList));
        return parentNodeList;
    }

    void getChildren(IPermissionService.TreeNode treeNode, List<IPermissionService.TreeNode> treeNodeList) {
        List<IPermissionService.TreeNode> childrenNodeList = treeNodeList.stream().filter(item -> Objects.equals(item.getParentId(), treeNode.getId())).collect(Collectors.toList());
        if(childrenNodeList != null && !childrenNodeList.isEmpty()) {
            treeNode.setChildren(childrenNodeList);
            childrenNodeList.forEach(item -> getChildren(item, treeNodeList));
        }
    }

    @Override
    @Transactional
    public void saveUserRole(Long userId, List<Long> roleIds) {
        getBaseMapper().deleteRoleByUserId(userId);
        getBaseMapper().saveUserRole(userId, roleIds);
    }

    @Override
    public List<UserRole> getRoleListByUserId(Long userId) {
        return getBaseMapper().getRoleListByUserId(userId);
    }

    @Override
    public List<Role> getUserRoleList(Long userId) {
        return getBaseMapper().getUserRoleList(userId);
    }

}
