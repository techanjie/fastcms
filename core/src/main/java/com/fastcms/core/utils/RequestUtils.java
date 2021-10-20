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
package com.fastcms.core.utils;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @author： wjun_java@163.com
 * @date： 2021/6/1
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
public abstract class RequestUtils {

	public static boolean isAjaxRequest(HttpServletRequest request) {
		String header = request.getHeader("X-Requested-With");
		return "XMLHttpRequest".equalsIgnoreCase(header);
	}

	public static boolean isMultipartRequest(HttpServletRequest request) {
		String contentType = request.getContentType();
		return contentType != null && contentType.toLowerCase().indexOf("multipart") != -1;
	}

	/**
	 * 是否是手机浏览器
	 *
	 * @return
	 */
	public static boolean isMobileBrowser(HttpServletRequest request) {
		String ua = request.getHeader("User-Agent");
		if (StringUtils.isNotBlank(ua)) {
			ua = ua.toLowerCase();
			for (String mobileAgent : mobileAgents) {
				if (ua.indexOf(mobileAgent) > -1) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * 是否是微信浏览器
	 *
	 * @return
	 */
	public static boolean isWechatBrowser(HttpServletRequest request) {
		String ua = request.getHeader("User-Agent");
		return StringUtils.isNotBlank(ua) && ua.toLowerCase().indexOf("micromessenger") > -1;
	}


	/**
	 * 是否是PC版的微信浏览器
	 *
	 * @param request
	 * @return
	 */
	public static boolean isWechatPcBrowser(HttpServletRequest request) {
		String ua = request.getHeader("User-Agent");
		return StringUtils.isNotBlank(ua) && ua.toLowerCase().indexOf("windowswechat") > -1;
	}

	/**
	 * 是否是IE浏览器
	 *
	 * @return
	 */
	public static boolean isIEBrowser(HttpServletRequest request) {
		String ua = request.getHeader("User-Agent");
		if (StringUtils.isBlank(ua)) {
			return false;
		}

		ua = ua.toLowerCase();
		if (ua.indexOf("msie") > -1) {
			return true;
		}

		if (ua.indexOf("gecko") > -1 && ua.indexOf("rv:11") > -1) {
			return true;
		}

		return false;
	}

	public static String getIpAddress(HttpServletRequest request) {
		String ip = request.getHeader("X-requested-For");
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("X-Forwarded-For");
		}
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("HTTP_CLIENT_IP");
		}
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("HTTP_X_FORWARDED_FOR");
		}
		if (StringUtils.isBlank(ip) || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}

		if (ip != null && ip.contains(",")) {
			String[] ips = ip.split(",");
			for (int index = 0; index < ips.length; index++) {
				String strIp = ips[index];
				if (!("unknown".equalsIgnoreCase(strIp))) {
					ip = strIp;
					break;
				}
			}
		}

		return ip;
	}

	public static String getUserAgent(HttpServletRequest request) {
		return request.getHeader("User-Agent");
	}

	public static String getReferer(HttpServletRequest request) {
		return request.getHeader("Referer");
	}

	public static String getBaseUrl(HttpServletRequest request) {
		int port = request.getServerPort();
		StringBuilder defaultDomain = new StringBuilder(request.getScheme());
		defaultDomain.append("://")
				.append(request.getServerName())
				.append(port == 80 ? "" : ":" + port)
				.append(request.getContextPath());
		return defaultDomain.toString();
	}

	public static HttpServletRequest getRequest() {
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		return attr.getRequest();
	}

	static String[] mobileAgents = {"iphone", "android", "phone", "mobile", "wap", "netfront", "java", "opera mobi",
			"opera mini", "ucweb", "windows ce", "symbian", "series", "webos", "sony", "blackberry", "dopod", "nokia",
			"samsung", "palmsource", "xda", "pieplus", "meizu", "midp", "cldc", "motorola", "foma", "docomo",
			"up.browser", "up.link", "blazer", "helio", "hosin", "huawei", "novarra", "coolpad", "webos", "techfaith",
			"palmsource", "alcatel", "amoi", "ktouch", "nexian", "ericsson", "philips", "sagem", "wellcom", "bunjalloo",
			"maui", "smartphone", "iemobile", "spice", "bird", "zte-", "longcos", "pantech", "gionee", "portalmmm",
			"jig browser", "hiptop", "benq", "haier", "^lct", "320x320", "240x320", "176x220", "w3c ", "acs-", "alav",
			"alca", "amoi", "audi", "avan", "benq", "bird", "blac", "blaz", "brew", "cell", "cldc", "cmd-", "dang",
			"doco", "eric", "hipt", "inno", "ipaq", "java", "jigs", "kddi", "keji", "leno", "lg-c", "lg-d", "lg-g",
			"lge-", "maui", "maxo", "midp", "mits", "mmef", "mobi", "mot-", "moto", "mwbp", "nec-", "newt", "noki",
			"oper", "palm", "pana", "pant", "phil", "play", "port", "prox", "qwap", "sage", "sams", "sany", "sch-",
			"sec-", "send", "seri", "sgh-", "shar", "sie-", "siem", "smal", "smar", "sony", "sph-", "symb", "t-mo",
			"teli", "tim-", "tsm-", "upg1", "upsi", "vk-v", "voda", "wap-", "wapa", "wapi", "wapp", "wapr", "webc",
			"winw", "winw", "xda", "xda-", "googlebot-mobile"};

}
