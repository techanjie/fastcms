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

import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 支持在插件中动态注册OAuth2UserService
 * @author： wjun_java@163.com
 * @date： 2022/02/2
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
public final class OAuth2UserServiceManager {

    private static final Map<String, OAuth2UserService> userServicesMap = new ConcurrentHashMap<>();

    public static void addOAuth2UserService(String registrationId, OAuth2UserService oAuth2UserService) {
        userServicesMap.put(registrationId ,oAuth2UserService);
    }

    public static void removeOAuth2UserService(String registrationId) {
        userServicesMap.remove(registrationId);
    }

    public static Boolean hasOAuth2UserService(String registrationId) {
        return userServicesMap.containsKey(registrationId);
    }

    public static Map<String, OAuth2UserService> getUserServicesMap() {
        return userServicesMap;
    }

    public static OAuth2UserService getOAuth2UserService(String registrationId) {
        return userServicesMap.get(registrationId);
    }

}
