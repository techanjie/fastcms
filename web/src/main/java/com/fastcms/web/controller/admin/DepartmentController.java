/**
 * Copyright (c) 广州小橘灯信息科技有限公司 2016-2017, wjun_java@163.com.
 * <p>
 * Licensed under the GNU Lesser General Public License (LGPL) ,Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.gnu.org/licenses/lgpl-3.0.txt
 * http://www.xjd2020.com
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.fastcms.web.controller.admin;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.fastcms.common.auth.ActionTypes;
import com.fastcms.common.auth.Secured;
import com.fastcms.common.constants.FastcmsConstants;
import com.fastcms.common.model.RestResult;
import com.fastcms.common.model.RestResultUtils;
import com.fastcms.entity.Department;
import com.fastcms.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 部门管理
 * @author： wjun_java@163.com
 * @date： 2022/3/23
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@RestController
@RequestMapping(FastcmsConstants.ADMIN_MAPPING + "/department")
public class DepartmentController {

    @Autowired
    private IDepartmentService departmentService;

    /**
     * 部门列表
     * @return
     */
    @GetMapping("list")
    @Secured(name = "部门列表", resource = "department:list", action = ActionTypes.READ)
    public RestResult<List<IDepartmentService.DepartmentNode>> list() {
        return RestResultUtils.success(departmentService.getDepartmentList());
    }

    /**
     * 保存部门
     * @param department
     * @return
     */
    @PostMapping("save")
    @Secured(name = "部门保存", resource = "department:save", action = ActionTypes.WRITE)
    public RestResult<Boolean> save(@Validated Department department) {
        return RestResultUtils.success(departmentService.saveOrUpdate(department));
    }

    /**
     * 删除部门
     * @param deptId
     * @return
     */
    @PostMapping("delete/{deptId}")
    @Secured(name = "部门删除", resource = "department:delete", action = ActionTypes.WRITE)
    public RestResult<Object> delDepartment(@PathVariable("deptId") Long deptId) {
        List<Department> list = departmentService.list(Wrappers.<Department>lambdaQuery().eq(Department::getParentId, deptId));
        if(list != null && list.size()>0) {
            return RestResultUtils.failed("请先删除子部门");
        }
        return RestResultUtils.success(departmentService.removeById(deptId));
    }

}
