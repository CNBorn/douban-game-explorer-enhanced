// ==UserScript==
// @name         Douban Game Explorer Enhanced
// @namespace    http://cnborn.net/
// @version      0.1
// @description  More genres & platforms to choose from & mobile friendly
// @author       CNBorn
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://websanova.com/lib/url-tld.2.1.0.min.js
// @match        https://www.douban.com/game/explore*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
    /* jshint esnext: false */
    /* jshint esversion: 6 */

    // Your code here...
    $('div.aside').remove();
    $('div.article').css('width', '100%');

    // Atari 2600 = 40
    // Browser = 140
    // Windows Phone = 124
    // PC88 = 109
    // Vic 20 = 30
    // Commodore 64 = 14
    // Game Gear = 5
    // MSX = 15
    // PC-ENGINE = 159
    // Atari 7800 = 70
    // Atari 5200 = 67
    // Sega Master System = 8
    // TurboGrafx-16 = 55
    // TurboGrafx-CD = 53
    // Sega CD = 29

    // 双摇杆射击 = 31
    // 大型多人在线 = 16
    // 文字冒险 = 36
    // 动作冒险 = 43

    var genres = url('?').genres;
    if (genres === undefined || genres === null || genres === '') {
        window.location = '/game/explore?genres=' + '31,16,36,43' + '&platforms=40,140,124,109,30,14,8,55,53,29,159,15,5';
    }
    // Unselect those new genres
    $('form.filters fieldset:first div.filter-options label.is-active a').each((idx, unselect) => unselect.click());

    // Unselect those new platforms
    $('form.filters fieldset:eq(1) div.filter-options label.is-active a').each((idx, unselect) => unselect.click());

    // Automatically Click for More
    $(window).scroll(function() {
      $("div.game-pagination div a")[0].click();
    });

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
