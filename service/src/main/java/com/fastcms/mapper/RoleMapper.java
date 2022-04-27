package com.fastcms.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fastcms.entity.Role;
import com.fastcms.service.IRoleService;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author wjun_java@163.com
 * @since 2021-02-14
 */
public interface RoleMapper extends BaseMapper<Role> {

    void saveRolePermission(@Param("roleId") Long roleId, @Param("permissionIdList") List<Long> permissionIdList);

    List<IRoleService.RolePermission> getRolePermission(Long roleId);

    void deleteByRoleId(Long roleId);

    void saveUserRole(@Param("userId") Long userId, @Param("roleIds") List<Long> roleIds);

    void deleteRoleByUserId(@Param("userId") Long userId);

    List<IRoleService.UserRole> getRoleListByUserId(Long userId);

    List<Role> getUserRoleList(Long userId);

}
