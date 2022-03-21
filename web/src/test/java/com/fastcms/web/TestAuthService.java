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
package com.fastcms.web;

import com.fastcms.common.http.HttpRestResult;
import com.fastcms.common.utils.HttpUtils;
import com.fastcms.web.security.AuthConfigs;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @author： wjun_java@163.com
 * @date： 2021/2/28
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@SpringBootTest
public class TestAuthService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthConfigs authConfigs;

    @Test
    public void testJwtSecurity() {
        Claims claims = Jwts.parserBuilder().setSigningKey(authConfigs.getSecretKeyBytes()).build()
                .parseClaimsJws("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYzNTQwMDI5OH0.0N_liADYX5nkLuC8JRoGPwudREw9gq0lr_YaoG_7fQM").getBody();
        System.out.println(claims.getSubject());
        String auths = (String) claims.get("auth");
        System.out.println(auths);
    }

    @Test
    public void testPasswordEncode() {
        System.out.println(passwordEncoder.encode("1"));
    }

    @Test
    public void testHttp() throws Exception {
        HttpRestResult<String> objectHttpRestResult = HttpUtils.get("https://www.xjd2020.com");
        System.out.println(objectHttpRestResult.getData());
    }

}
