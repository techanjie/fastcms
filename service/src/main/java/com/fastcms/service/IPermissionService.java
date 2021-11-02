package com.fastcms.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fastcms.entity.Permission;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 *  权限服务类
 * </p>
 *
 * @author wjun_java@163.com
 * @since 2021-02-14
 */
public interface IPermissionService extends IService<Permission> {

    /**
     * 获取系统权限列表
     * @return
     */
    List<PermissionNode> getPermissions();

    /**
     * 获取角色对应的权限
     * @param roleId
     * @return
     */
    List<PermissionNode> getPermissionByRoleId(Long roleId);

    /**
     * 获取用户已授权权限
     * @param userId
     * @return
     */
    List<Permission> getPermissionByUserId(Long userId);

    /**
     * 获取用户菜单权限
     * @param userId
     * @return
     */
    List<PermissionNode> getUserMenuPermission(Long userId);

    /**
     * 删除掉权限
     * @param permissionList
     */
    void deleteRolePermissionByPermission(List<Permission> permissionList);


    @Data
    class PermissionNode implements Serializable {
        private Long id;
        private Long parentId;
        private String name;
        private String path;
        private String component;
        private Boolean isLink;
        private Integer menuSort;
        private Meta meta;
        private List<PermissionNode> children;

        public PermissionNode(Long id, Long parentId, String name, String path, String component, Boolean isLink, Integer menuSort,
                        String title, String icon, Boolean isHide, Boolean isKeepAlive, Boolean isAffix, Boolean isIframe, List<String> auth, List<PermissionNode> children) {
            this.id = id;
            this.parentId = parentId;
            this.name = name;
            this.path = path;
            this.component = component;
            this.isLink = isLink;
            this.menuSort = menuSort;
            Meta meta = new Meta(title, icon, isHide, isKeepAlive, isAffix, isIframe, auth);
            this.meta = meta;
            this.children = children;
        }

        @Data
        @AllArgsConstructor
        public static class Meta implements Serializable {
            private String title;
            private String icon;
            private Boolean isHide;
            private Boolean isKeepAlive;
            private Boolean isAffix;
            private Boolean isIframe;
            private List<String> auth;
        }
    }

}
