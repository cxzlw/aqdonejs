// ==UserScript==
// @name         安全教育平台专项作业一键完成脚本 by cxzlw
// @namespace    https://github.com/cxzlw
// @version      2.1
// @description  由创新者老王制作用于在点击问题回答提交时破解问题校验程序的小脚本
// @author       https://github.com/cxzlw
// @match        https://huodong.xueanquan.com/*/*.html*
// @icon         chrome://favicon/http://huodong.xueanquan.com/
// @grant        none
// ==/UserScript==
/*
本程序由创新者老王制作,发布于https://github.com/cxzlw/aqdonejs/
程序名:zhuanxiang.user.js
*/

(function() {
    'use strict';
    console.log("安全教育平台专项作业一键完成脚本 by cxzlw: 脚本已加载");
questionMust = function() {
    var qNum = 0;
    var aNum = 0;
    var tishiContent = "";
    $('.test_question dl').each(function () {
        if ($(this).is(":visible")) {
            if ($(this).find('[type="radio"]').length > 0 || $(this).find('[type="checkbox"]').length > 0) {
                qNum++;
            }
            //获取哪几道题未答
            var radioNum = $(this).find('[type="radio"]').length;
            var noAnswerNum = 0;
            $(this).find('[type="radio"]').each(function () {
                if ($(this).prop('checked') == false) {
                    noAnswerNum++;
                }
            });
            if (radioNum == noAnswerNum && radioNum > 0) {
                //tishiContent += qNum + "、";
                var id = $(this).attr("id").substring(1);
                var r = $(this).find('[type="radio"]');
                var nid = r.length-1;
                if (nid > 2){
                    nid = 2;
                }
                r[nid] . checked = true;
                choose(id,r[nid],0)
            }
        }
    });
    return true;
};
})();
