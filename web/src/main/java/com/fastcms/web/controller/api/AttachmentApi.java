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

package com.fastcms.web.controller.api;

import com.fastcms.common.constants.FastcmsConstants;
import com.fastcms.common.model.RestResultUtils;
import com.fastcms.core.auth.AuthUtils;
import com.fastcms.core.utils.AttachUtils;
import com.fastcms.entity.Attachment;
import com.fastcms.service.IAttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 附件
 * @author： wjun_java@163.com
 * @date： 2022/02/10
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@RestController
@RequestMapping(FastcmsConstants.API_MAPPING + "/attachment")
public class AttachmentApi {

	@Autowired
	private IAttachmentService attachmentService;

	/**
	 * 删除附件
	 * @param attachId    附件id
	 * @return
	 */
	@PostMapping("delete/{attachId}")
	public Object delete(@PathVariable(name = "attachId") Long attachId) {
		Attachment attachment = attachmentService.getById(attachId);
		if(attachment == null) return RestResultUtils.failed("文件不存在");

		if(attachment.getUserId() != AuthUtils.getUserId()) {
			return RestResultUtils.failed("只能删除自己的附件");
		}
		return AttachUtils.deleteAttachment(attachment, attachmentService);
	}

}
