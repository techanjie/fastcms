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
package com.fastcms.cms.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fastcms.cms.entity.SinglePage;
import com.fastcms.cms.entity.SinglePageComment;
import com.fastcms.cms.service.ISinglePageCommentService;
import com.fastcms.cms.service.ISinglePageService;
import com.fastcms.common.constants.FastcmsConstants;
import com.fastcms.common.model.RestResultUtils;
import com.fastcms.core.permission.AdminMenu;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * @author： wjun_java@163.com
 * @date： 2021/5/17
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@Slf4j
@RestController
@RequestMapping(FastcmsConstants.ADMIN_MAPPING + "/page")
@AdminMenu(name = "页面", icon = "<i class=\"nav-icon fas fa-copy\"></i>", sort = 2)
public class PageController {

	@Autowired
	ISinglePageService singlePageService;

	@Autowired
	ISinglePageCommentService singlePageCommentService;

	@AdminMenu(name = "页面管理", sort = 1)
	@GetMapping("list")
	public String list(@RequestParam(name = "page", required = false, defaultValue = "1") Long page,
					   @RequestParam(name = "pageSize", required = false, defaultValue = "10") Long pageSize) {
		QueryWrapper<SinglePage> queryWrapper = new QueryWrapper();
//		model.addAttribute(PAGE_DATA_ATTR, singlePageService.pageSinglePage(new Page<>(page, pageSize), queryWrapper));
		return "admin/page/list";
	}

	@PostMapping("doSave")
	public Object doSave(@Validated SinglePage singlePage) {
		try {
			singlePageService.saveOrUpdate(singlePage);
			return RestResultUtils.success();
		} catch (Exception e) {
			return RestResultUtils.failed(e.getMessage());
		}
	}

	@PostMapping("comment/doSave")
	public Object doSaveComment(@Validated SinglePageComment singlePageComment) {
		singlePageCommentService.saveOrUpdate(singlePageComment);
		return RestResultUtils.success();
	}

	@PostMapping("comment/doDelete")
	public Object doDeleteComment(@RequestParam(name = "id") Long id) {
		singlePageCommentService.removeById(id);
		return RestResultUtils.success();
	}

}
