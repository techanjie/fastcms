package com.fastcms.payment.platform;

import com.egzosn.pay.common.api.PayConfigStorage;
import com.egzosn.pay.common.api.PayService;
import com.egzosn.pay.common.bean.TransactionType;
import com.egzosn.pay.common.http.HttpConfigStorage;
import com.egzosn.pay.wx.v3.api.WxPayConfigStorage;
import com.egzosn.pay.wx.v3.api.WxPayService;
import com.egzosn.pay.wx.v3.bean.WxTransactionType;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Configuration;

/**
 * 微信V3分账平台
 *
 * @author egan
 * <pre>
 * email egan@egzosn.com
 * date  2021/10/7.
 * </pre>
 */
@Configuration(WxV3ProfitSharingPlatform.platformName)
@ConditionalOnMissingBean(WxV3ProfitSharingPlatform.class)
@ConditionalOnClass(name = {"com.egzosn.pay.wx.v3.api.WxPayConfigStorage"})
public class WxV3ProfitSharingPlatform extends WxPayConfigStorage implements PaymentPlatform {

    public static final String platformName = "wxV3ProfitSharing";

    /**
     * 获取商户平台
     *
     * @return 商户平台
     */
    @Override
    public String getPlatform() {
        return platformName;
    }

    /**
     * 获取支付平台对应的支付服务
     *
     * @param payConfigStorage 支付配置
     * @return 支付服务
     */
    @Override
    public PayService getPayService(PayConfigStorage payConfigStorage) {
        return getPayService(payConfigStorage, null);
    }

    /**
     * 获取支付平台对应的支付服务
     *
     * @param payConfigStorage  支付配置
     * @param httpConfigStorage 网络配置
     * @return 支付服务
     */
    @Override
    public PayService getPayService(PayConfigStorage payConfigStorage, HttpConfigStorage httpConfigStorage) {
        if (payConfigStorage instanceof WxPayConfigStorage) {
            WxPayService wxPayService = new WxPayService((WxPayConfigStorage) payConfigStorage);
            wxPayService.setRequestTemplateConfigStorage(httpConfigStorage);
            return wxPayService;
        }
        WxPayConfigStorage configStorage = new WxPayConfigStorage();
        configStorage.setInputCharset(payConfigStorage.getInputCharset());
        configStorage.setAppId(payConfigStorage.getAppId());
        configStorage.setMchId(payConfigStorage.getPid());
        configStorage.setAttach(payConfigStorage.getAttach());
        configStorage.setV3ApiKey(payConfigStorage.getKeyPrivate());
        configStorage.setKeyPublic(payConfigStorage.getKeyPublic());
        configStorage.setNotifyUrl(payConfigStorage.getNotifyUrl());
        configStorage.setReturnUrl(payConfigStorage.getReturnUrl());
        configStorage.setPayType(payConfigStorage.getPayType());
        configStorage.setTest(payConfigStorage.isTest());
        configStorage.setSignType(payConfigStorage.getSignType());

        WxPayService wxPayService = new WxPayService(configStorage);
        wxPayService.setRequestTemplateConfigStorage(httpConfigStorage);
        return wxPayService;
    }

    @Override
    public TransactionType getTransactionType(String name) {
        return WxTransactionType.valueOf(name);
    }


}
