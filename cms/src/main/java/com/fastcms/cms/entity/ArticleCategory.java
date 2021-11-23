package com.fastcms.cms.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 *  文章分类
 * @author wjun_java@163.com
 * @since 2021-05-23
 */
public class ArticleCategory implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final String CATEGORY_TYPE = "category";
    public static final String TAG_TYPE = "tag";

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 创建人
     */
    @TableField(fill = FieldFill.INSERT)
    private Long userId;

    /**
     * 上级分类
     */
    private Long parentId;

    /**
     * 分类标题
     */
    private String title;

    /**
     * 类型 可选值 category | tag
     */
    private String type = CATEGORY_TYPE;

    /**
     * 排序
     */
    private Integer sortNum;

    /**
     * 访问标识
     */
    private String suffix;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime created;

    /**
     * 修改时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updated;

    /**
     * 是否选中
     */
    @TableField(exist = false)
    private Boolean isCheck;

    /**
     * 分类访问地址
     */
    @TableField(exist = false)
    private String url;

    /**
     * 子集分类
     */
    @TableField(exist = false)
    List<ArticleCategory> children;

    public String getUrl() {
        return "/a/c/" + getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSortNum() {
        return sortNum;
    }

    public void setSortNum(Integer sortNum) {
        this.sortNum = sortNum;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public LocalDateTime getUpdated() {
        return updated;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }

    public Boolean getCheck() {
        return isCheck;
    }

    public void setCheck(Boolean check) {
        isCheck = check;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<ArticleCategory> getChildren() {
        return children;
    }

    public void setChildren(List<ArticleCategory> children) {
        this.children = children;
    }
}
