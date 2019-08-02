<!-- 
	Хедер для главной 
-->


<!-- верхняя полоса -->
<header class="header">
    <a href="/" class="logo"></a>
    <div class="contacts">
        <a href="tel:88007075182" class="link-phone">8 800 707 51 82</a>
        <div class="socials">
            <a href="" style="background-image: url(/img/icons/i-fb.png);"></a>
            <a href="" style="background-image: url(/img/icons/i-vk.png);"></a>
            <a href="" style="background-image: url(/img/icons/i-yt.png);"></a>
            <a href="" style="background-image: url(/img/icons/i-ig.png);"></a>
            <a href="" style="background-image: url(/img/icons/i-ok.png);"></a>
        </div>
    </div>
</header>
<?$APPLICATION->IncludeComponent("bitrix:menu","menu",Array(
        "ROOT_MENU_TYPE" => "top", 
        "MAX_LEVEL" => "2", 
        "CHILD_MENU_TYPE" => "left", 
        "USE_EXT" => "Y",
        "DELAY" => "N",
        "ALLOW_MULTI_SELECT" => "Y",
        "MENU_CACHE_TYPE" => "N", 
        "MENU_CACHE_TIME" => "3600", 
        "MENU_CACHE_USE_GROUPS" => "Y", 
        "MENU_CACHE_GET_VARS" => "" 
    )
);?>

