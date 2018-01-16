<#if productList??>
<ul class="sc-goods-list clearfix size-2 card pic">
        <!-- 大图  -->
        
            <!-- 一大两小 -->
                    <!-- 大图 -->
<#list productList as item>
<#if item_index lt 1>
                    <li class="goods-card big-pic card">
                        <a href="${item.detailLink}" class="link js-goods clearfix">
                            <div class="photo-block">
                                <img class="goods-photo js-goods-lazy" src="${item.img}">
                            </div>
                            
                                <div class="info clearfix info-title info-price">
                                        <p class="goods-title">${item.name}/p>
                                        <p class="goods-price"><em>￥${item.price}</em></p>
                                        <p class="goods-price-taobao"></p>
                                </div>
                                <div class="goods-buy btn1 "></div>
                        </a>
                    </li>
</#if> 
<#if item_index gt 0>
<li class="goods-card small-pic card">
                        <a href="${item.detailLink}" class="link js-goods clearfix">
                            <div class="photo-block">
                                <img class="goods-photo js-goods-lazy" src="${item.img}">
                            </div>
                                <div class="info clearfix info-no-title">
                                        <p class="goods-title">${item.name}</p>
                                        <p class="goods-price"><em>￥${item.price}</em></p>
                                        <p class="goods-price-taobao"></p>
                                </div>
                                <div class="goods-buy btn1"></div>
                        </a>
                    </li>

</#if> 
  </#list> 
                <!-- 小图 -->
            
    </ul>
    </#if>