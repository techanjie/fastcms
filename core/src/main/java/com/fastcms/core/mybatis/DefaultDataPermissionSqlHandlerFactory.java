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

package com.fastcms.core.mybatis;

import com.fastcms.common.constants.FastcmsConstants;
import com.fastcms.core.auth.AuthUtils;
import com.fastcms.mybatis.DataPermissionSqlHandler;
import com.fastcms.mybatis.DataPermissionSqlHandlerFactory;
import com.fastcms.utils.ApplicationUtils;
import org.springframework.stereotype.Component;

/**
 * fastcms数据权限sql处理器默认工厂实现
 * @author： wjun_java@163.com
 * @date： 2022/7/31
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@Component
public class DefaultDataPermissionSqlHandlerFactory implements DataPermissionSqlHandlerFactory {

    @Override
    public DataPermissionSqlHandler getDataPermissionSqlHandler() {

        if (AuthUtils.getUserId() == null || FastcmsConstants.ADMIN_USER_ID == AuthUtils.getUserId()) {
            return ApplicationUtils.getBean(AllDataPermissionSqlHandler.class);
        }

        return ApplicationUtils.getBean(SelfDataPermissionSqlHandler.class);
    }

}
