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

package com.fastcms.core.template;

import com.fastcms.core.utils.StaticUtils;
import org.springframework.stereotype.Service;

/**
 * Fastcms伪静态实现
 * @author： wjun_java@163.com
 * @date： 2021/9/30
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@Service
public class FakeStaticHtmlService implements FastcmsStaticHtmlService {

    @Override
    public boolean isEnable() {
        return StaticUtils.isEnableFakeStatic();
    }

    @Override
    public String getFileSuffix() {
        return StaticUtils.getFakeStaticSuffix();
    }

    @Override
    public int getOrder() {
        return LOWEST_PRECEDENCE;
    }

}
