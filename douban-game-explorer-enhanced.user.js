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

    let showCreateGameAtBottom = false;

    $('div.aside').remove();
    $('div.article').css('width', '100%');

    $("div#content h1").css("display", "inline-block");

    $("div#content h1").text('发现感兴趣的游戏（增强版）');
    $( "<a>意见反馈</a>" ).insertAfter( "div#content h1" );
    $( "<a>使用指南</a>" ).insertAfter( "div#content h1" );
    $("div#content a").css("margin-right", "1em");


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
    let loadMore = [];
    $(window).scroll(function() {
      loadMore = $("div.game-pagination div a");
      if(loadMore && loadMore[0]) {
        loadMore[0].click();
      }

      if(loadMore && !loadMore[0] && !showCreateGameAtBottom) {
          let searchKeyword = $("div.searcher input[type='text']")[0].value;
          let thingName = '';
          if(searchKeyword) {
              thingName = "?thing_name=" + encodeURIComponent(searchKeyword);
          }

      $("div.game-list ul").append('<li style="text-align:center">没找到想要的游戏？ &gt; <a href="/game/create' + thingName + '" title="创建游戏条目" target="_blank">创建游戏条目</a></li>');
      showCreateGameAtBottom = true;

          //https://www.douban.com/game/create?thing_name=xasdljsakdj
      }
    });

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);

// Google Analytics
var script = document.createElement('script');
script.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-329713-14', 'auto'); ga('send', 'pageview');";
document.body.appendChild(script);

/* jshint ignore:end */
