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
package com.fastcms.core.sms;

import com.fastcms.core.utils.PluginUtils;
import com.fastcms.utils.ApplicationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * @author： wjun_java@163.com
 * @date： 2022/3/20
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@Component
public class FastcmsSmsManager implements ApplicationListener<ApplicationStartedEvent> {

	List<FastcmsSmsSender> fastcmsSmsSenderList = Collections.synchronizedList(new ArrayList<>());

	@Autowired
	private AliyunSmsSender aliyunSmsSender;

	public FastcmsSmsSender getSmsSender() {
		List<FastcmsSmsSender> extensions = PluginUtils.getExtensions(FastcmsSmsSender.class);
		fastcmsSmsSenderList.addAll(extensions);



		return aliyunSmsSender;
	}

	@Override
	public void onApplicationEvent(ApplicationStartedEvent event) {
		Map<String, FastcmsSmsSender> fastcmsSmsSenderMap = ApplicationUtils.getApplicationContext().getBeansOfType(FastcmsSmsSender.class);
		fastcmsSmsSenderList.addAll(fastcmsSmsSenderMap.values());
	}

}
