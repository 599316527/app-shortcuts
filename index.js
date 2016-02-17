window.addEventListener('load', function() {
    if (isInternalBrowser()) {
        showOpenInGeneralBrowserTip();
    }
});

function isInternalBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    return [
        'MicroMessenger', 'Weibo', 'momoWebView', 'qq'
    ].filter(function (pattern) {
        return ua.indexOf(pattern.toLowerCase()) >= 0;
    }).length;
}

function showOpenInGeneralBrowserTip() {
    var tip = document.createElement('DIV');
    tip.className = 'overlay-box';
    tip.innerHTML = '<div class="mui-panel">'
        + '<h3 class="mui--text-danger">请用浏览器打开</h3>'
        + '<p class="mui--text-accent-54 mui--text-caption">通常位于右上角下拉选项中</p>'
        + '</div>';

    mui.overlay('on', {
        'static': true
    }, tip);
}
