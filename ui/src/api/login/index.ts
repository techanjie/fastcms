import request from '/@/utils/request';

/**
 * 用户登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signIn(params: string) {
	return request({
		url: '/admin/login',
		method: 'post',
		data: params,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	});
}

/**
 * 用户退出登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signOut(params: object) {
	return request({
		url: '/admin/signOut',
		method: 'post',
		data: params,
	});
}

/**
 * 获取验证码
 */
export function getCaptcha() {
	return request({
		url: '/admin/captcha',
		method: 'get'
	});
}
