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
package com.fastcms.oauth2.userinfo;

import org.springframework.util.Assert;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * @author： wjun_java@163.com
 * @date： 2022/02/1
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@Deprecated
public final class OAuth2UserRequestEntityConverterManager {

    private static final Map<String, AbstractOAuth2UserRequestEntityConverter> userRequestEntityConverterMap = Collections.synchronizedMap(new HashMap<>());

    public static final void addUserRequestEntityConverter(String registrationId, AbstractOAuth2UserRequestEntityConverter oAuth2UserRequestEntityConverter) {
        Assert.state(!hasUserRequestEntityConverter(registrationId), () -> String.format("Duplicate key %s", registrationId));
        userRequestEntityConverterMap.put(registrationId, oAuth2UserRequestEntityConverter);
    }

    public static final void removeUserRequestEntityConverter(String registrationId) {
        userRequestEntityConverterMap.remove(registrationId);
    }

    public static final AbstractOAuth2UserRequestEntityConverter getUserRequestEntityConverter(String registrationId) {
        return userRequestEntityConverterMap.get(registrationId);
    }

    public static final Boolean hasUserRequestEntityConverter(String registrationId) {
        return userRequestEntityConverterMap.containsKey(registrationId);
    }

}
