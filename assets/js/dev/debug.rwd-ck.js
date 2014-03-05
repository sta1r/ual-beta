// Gridset Overlay JS
gs={init:function(){window.location.href.match("gridset=show")&&gs.show(),gs.bind(document,"keydown",function(e){if(!e)var e=window.event;if(e.metaKey||e.ctrlKey)switch(e.which||e.keyCode){case 71:var t=document.getElementById("gridsetoverlaywrap");t?gs.remove(t):gs.show(),gs.prevent(e)}})},remove:function(e){document.body.removeChild(e),window.detachEvent?window.detachEvent("onresize",gs.width):window.removeEventListener("resize",gs.width,!1)},width:function(){var e=document.getElementById("gridscreenwidthval");e&&(e.innerHTML=window.innerWidth+"px")},show:function(){var e=["d","t","m"],t=[16,8,4],n=[960,600,320],r=document.getElementsByTagName("body")[0],i='<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="content-wrapper">',s=0,o="",u='<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:599px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap [class*=m2],#gridsetoverlaywrap [class*=m3],#gridsetoverlaywrap [class*=m4],#gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:22.02041184971098%;margin-left:0%;}#gridsetoverlaywrap [class*=m2]{width:22.191112716763005%;margin-left:25.770411849711%;}#gridsetoverlaywrap [class*=m3]{width:22.191112716763005%;margin-left:51.711524566474%;}#gridsetoverlaywrap [class*=m4]{width:22.191112716763005%;margin-left:77.652637283237%;}#gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:600px) and (max-width:959px) {#gridsetoverlaywrap [class*=t1],#gridsetoverlaywrap [class*=t2],#gridsetoverlaywrap [class*=t3],#gridsetoverlaywrap [class*=t4],#gridsetoverlaywrap [class*=t5],#gridsetoverlaywrap [class*=t6],#gridsetoverlaywrap [class*=t7],#gridsetoverlaywrap [class*=t8],#gridsetoverlaywrap .t-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=t1]{width:9.39731821738436%;margin-left:0%;}#gridsetoverlaywrap [class*=t2]{width:8.931335492754616%;margin-left:13.397318217384%;}#gridsetoverlaywrap [class*=t3]{width:8.931335492754616%;margin-left:26.328653710139%;}#gridsetoverlaywrap [class*=t4]{width:8.931335492754616%;margin-left:39.259989202894%;}#gridsetoverlaywrap [class*=t5]{width:8.931335492754616%;margin-left:52.191324695648%;}#gridsetoverlaywrap [class*=t6]{width:8.931335492754616%;margin-left:65.122660188403%;}#gridsetoverlaywrap [class*=t7]{width:8.931335492754616%;margin-left:78.053995681157%;}#gridsetoverlaywrap [class*=t8]{width:8.931335492754616%;margin-left:90.985331173912%;}#gridsetoverlaywrap .t-hide{display:none !important;}}@media only screen and (min-width:960px) {#gridsetoverlaywrap [class*=d1],#gridsetoverlaywrap [class*=d2],#gridsetoverlaywrap [class*=d3],#gridsetoverlaywrap [class*=d4],#gridsetoverlaywrap [class*=d5],#gridsetoverlaywrap [class*=d6],#gridsetoverlaywrap [class*=d7],#gridsetoverlaywrap [class*=d8],#gridsetoverlaywrap [class*=d9],#gridsetoverlaywrap [class*=d10],#gridsetoverlaywrap [class*=d11],#gridsetoverlaywrap [class*=d12],#gridsetoverlaywrap [class*=d13],#gridsetoverlaywrap [class*=d14],#gridsetoverlaywrap [class*=d15],#gridsetoverlaywrap [class*=d16],#gridsetoverlaywrap .d-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=d1]{width:4.258475401666784%;margin-left:0%;}#gridsetoverlaywrap [class*=d2]{width:3.8792960843333257%;margin-left:6.7584754016668%;}#gridsetoverlaywrap [class*=d3]{width:3.8792960843333257%;margin-left:13.137771486%;}#gridsetoverlaywrap [class*=d4]{width:3.8792960843333257%;margin-left:19.517067570333%;}#gridsetoverlaywrap [class*=d5]{width:3.8792960843333257%;margin-left:25.896363654667%;}#gridsetoverlaywrap [class*=d6]{width:3.8792960843333257%;margin-left:32.275659739%;}#gridsetoverlaywrap [class*=d7]{width:3.8792960843333257%;margin-left:38.654955823333%;}#gridsetoverlaywrap [class*=d8]{width:3.8792960843333257%;margin-left:45.034251907667%;}#gridsetoverlaywrap [class*=d9]{width:3.8792960843333257%;margin-left:51.413547992%;}#gridsetoverlaywrap [class*=d10]{width:3.8792960843333257%;margin-left:57.792844076333%;}#gridsetoverlaywrap [class*=d11]{width:3.8792960843333257%;margin-left:64.172140160667%;}#gridsetoverlaywrap [class*=d12]{width:3.8792960843333257%;margin-left:70.551436245%;}#gridsetoverlaywrap [class*=d13]{width:3.8792960843333257%;margin-left:76.930732329333%;}#gridsetoverlaywrap [class*=d14]{width:3.8792960843333257%;margin-left:83.310028413667%;}#gridsetoverlaywrap [class*=d15]{width:3.8792960843333257%;margin-left:89.689324498%;}#gridsetoverlaywrap [class*=d16]{width:3.8792960843333257%;margin-left:96.068620582333%;}#gridsetoverlaywrap .d-hide{display:none !important;}}</style>';while(e[s]){var a="",f=0;n[s]!=o&&s==0?i+="<div>":n[s]!=o&&(i+="</div><div>");while(e[f])f!=s&&n[f]!=n[s]&&(a+=e[f]+"-hide "),f++;i+='<div class="gridset '+a+'"><div class="'+e[s]+'1"><small>'+e[s]+"1</small></div>";var l=1;while(l++<t[s])i+='<div class="'+e[s]+l+'"><small>'+e[s]+l+"</small></div>";i+="</div>",s==n.length-1&&(i+="</div>"),o=n[s],s++}i+="</div></div>";var c=document.createElement("div");c.id="gridsetoverlaywrap",c.innerHTML=i+u,r.appendChild(c),gs.width(),gs.bind(window,"resize",gs.width)},bind:function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)},prevent:function(e){e.preventDefault?e.preventDefault():event.returnValue=!1}},gs.init(),typeof jQuery=="undefined";var hashgrid=function(e){function x(e){if(t.modifierKey==null)return!0;var n=!0;switch(t.modifierKey){case"ctrl":n=e.ctrlKey?e.ctrlKey:!1;break;case"alt":n=e.altKey?e.altKey:!1;break;case"shift":n=e.shiftKey?e.shiftKey:!1}return n}function T(e){var t=!1,n=e.keyCode?e.keyCode:e.which;return n==13?t="enter":t=String.fromCharCode(n).toLowerCase(),t}function N(){A(t.cookiePrefix+t.id,(E?"1":"0")+"-"+v+"-"+r,1)}function C(){l.show(),d.css({width:l.width()}),d.children(".vert").each(function(){var e=$(this);e.css("display","inline-block"),e.offset().top>e.parent().offset().top&&e.hide()})}function k(e){var i,s,o=e.target.tagName.toLowerCase();if(o=="input"||o=="textarea"||o=="select")return!0;s=x(e);if(!s)return!0;i=T(e);if(!i)return!0;if(n[i])return!0;n[i]=!0;switch(i){case t.showGridKey:p?E&&(l.hide(),p=!1,E=!1,N()):(C(),p=!0);break;case t.holdGridKey:p&&!E&&(E=!0,N());break;case t.foregroundKey:p&&(l.css("z-index")==g?(l.css("z-index",m),v="B"):(l.css("z-index",g),v="F"),N());break;case t.jumpGridsKey:p&&t.numberOfGrids>1&&(l.removeClass(t.classPrefix+r),r++,r>t.numberOfGrids&&(r=1),l.addClass(t.classPrefix+r),C(),/webkit/.test(navigator.userAgent.toLowerCase())&&_(),N())}return!0}function L(e){var r,i=x(e);return i?(r=T(e),n[r]=!1,r&&r==t.showGridKey&&!E&&(l.hide(),p=!1),!0):!0}function A(e,t,n){var r,i="";n&&(r=new Date,r.setTime(r.getTime()+n*24*60*60*1e3),i="; expires="+r.toGMTString()),document.cookie=e+"="+t+i+"; path=/"}function O(e){var t,n=document.cookie.split(";"),r=0,i=n.length,s=e+"=";for(;r<i;r++){t=n[r];while(t.charAt(0)==" ")t=t.substring(1,t.length);if(t.indexOf(s)==0)return t.substring(s.length,t.length)}return null}function M(e){A(e,"",-1)}function _(){var e=document.styleSheets[0];try{e.addRule(".xxxxxx","position: relative"),e.removeRule(e.rules.length-1)}catch(t){}}var t={id:"grid",modifierKey:null,showGridKey:"h",holdGridKey:"h",foregroundKey:"f",jumpGridsKey:"j",numberOfGrids:1,classPrefix:"grid-",cookiePrefix:"hashgrid"},n,r=1,i,s,o,u,a,f,l,c,h,p=!1,d,v="B",m=-1,g=9999,y,b,w,E=!1,S;if(typeof e=="object")for(b in e)t[b]=e[b];else typeof e=="string"&&(t.id=e);$("#"+t.id).length>0&&$("#"+t.id).remove(),h=$("<div></div>"),h.attr("id",t.id).css({display:"none",pointerEvents:"none"}),$("body").prepend(h),l=$("#"+t.id),l.css("z-index")=="auto"&&l.css("z-index",m),y=parseFloat($(document).height()),l.height(y),l.append('<div id="'+t.id+'-horiz" class="horiz first-line">'),S=l.css("top"),l.css({top:"-999px",display:"block"}),u=$("#"+t.id+"-horiz"),a=u.outerHeight(),l.css({display:"none",top:S});if(a<=0)return!1;f=Math.floor(y/a),i="";for(o=f-1;o>=1;o--)i+='<div class="horiz"></div>';l.append(i),l.append($('<div class="vert-container"></div>')),d=l.children(".vert-container"),s=l.width(),d.css({width:s,position:"absolute",top:0}),d.append('<div class="vert first-line">&nbsp;</div>'),i="";for(o=0;o<30;o++)i+='<div class="vert">&nbsp;</div>';return d.append(i),d.children().height(y).css({display:"inline-block"}),c=O(t.cookiePrefix+t.id),typeof c=="string"?(w=c.split("-"),w[2]=Number(w[2]),typeof w[2]=="number"&&!isNaN(w[2])&&(r=w[2].toFixed(0),l.addClass(t.classPrefix+r)),w[1]=="F"&&(v="F",l.css("z-index",g)),w[0]=="1"&&(p=!0,E=!0,C())):l.addClass(t.classPrefix+r),$(document).bind("keydown",k),$(document).bind("keyup",L),n={},{}};$(document).ready(function(){var e=new hashgrid({numberOfGrids:2})});var sb=function(){"use strict";function e(e){var t=this,n=e.split(".");for(var r=0,i=n.length;r<i;r++)typeof t[n[r]]=="undefined"&&(t[n[r]]={}),t=t[n[r]];return t}return{namespace:e}}();(function(e,t){"use strict";e.detectBoxSizing=function(){Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(document.documentMode===undefined||document.documentMode>7)})},e.detectNthChild=function(){Modernizr.addTest("nthchild",function(){function e(e){var t=document.createElement("div"),n;return t.setAttribute("id","nthchild"),t.innerHTML="<style>"+e+"{}</style>",document.body.appendChild(t),n=document.styleSheets[0].cssRules!==undefined&&!!t.lastChild.sheet.cssRules[0],document.body.removeChild(t),n}return e(":nth-child(2n)")})},e.fixBoxSizing=function(){Modernizr.boxsizing||(t(".region").wrapInner('<div class="region-wrap"></div>'),t(".blocks > li").wrapInner('<div class="blocks-wrap"></div>'))},e.fixIE7Grid=function(){var e=t("html");e.hasClass("ie7")&&e.find(".region:last-child").not(".region-centered").addClass("region-last")},e.fixiOSOrientation=function(){var e=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(e)&&e.indexOf("AppleWebKit")>-1))return;if(!document.querySelector)return;var t=document.querySelector("meta[name=viewport]"),n=t&&t.getAttribute("content"),r=n+",maximum-scale=1",i=n+",maximum-scale=10",s=!0,o,u,a,f;if(!t)return;var l=function(){t.setAttribute("content",i),s=!0},c=function(){t.setAttribute("content",r),s=!1},h=function(e){f=e.accelerationIncludingGravity,o=Math.abs(f.x),u=Math.abs(f.y),a=Math.abs(f.z),!window.orientation&&(o>7||(a>6&&u<8||a<8&&u>6)&&o>5)?s&&c():s||l()};window.addEventListener("orientationchange",l,!1),window.addEventListener("devicemotion",h,!1)},e.fixNthChild=function(){if(Modernizr.nthchild)return;var n="blocks-end",r="blocks-start",i=function(){var i=!1,s=!1;e.matchViewport("M")?(i=".blocks-two-up > li:nth-child(2n),.blocks-three-up > li:nth-child(3n),.blocks-four-up > li:nth-child(4n),.blocks-five-up > li:nth-child(5n),.blocks-six-up > li:nth-child(6n)",s=".blocks-two-up > li:nth-child(2n+1),.blocks-three-up > li:nth-child(3n+1),.blocks-four-up > li:nth-child(4n+1),.blocks-five-up > li:nth-child(5n+1),.blocks-six-up > li:nth-child(6n+1)"):e.matchViewport("S")?(i=".blocks-two-up > li:nth-child(2n),.blocks-three-up > li:nth-child(3n),.blocks-four-up > li:nth-child(2n),.blocks-five-up > li:nth-child(3n),.blocks-six-up > li:nth-child(3n)",s=".blocks-two-up > li:nth-child(2n+1),.blocks-three-up > li:nth-child(3n+1),.blocks-four-up > li:nth-child(2n+1),.blocks-five-up > li:nth-child(3n+1),.blocks-six-up > li:nth-child(3n+1)"):e.matchViewport("XS")&&(i=".blocks-four-up > li:nth-child(2n),.blocks-five-up > li:nth-child(2n),.blocks-six-up > li:nth-child(2n)",s=".blocks-four-up > li:nth-child(2n+1),.blocks-five-up > li:nth-child(2n+1),.blocks-six-up > li:nth-child(2n+1)"),t(".blocks > li").removeClass(r).removeClass(n),s&&t(s).addClass(r),i&&t("html").hasClass("ie7")&&t(i).addClass(n)};e.onDelayedResize(i,!0)},e.fontSize=parseInt(t("html").css("font-size").replace("px",""),10),e.matchViewport=function(t){return!t||!e.mediaQueries[t]?!1:(t=e.mediaQueries[t].query,window.matchMedia&&window.matchMedia("only all").matches?window.matchMedia(t).matches?!0:!1:t.indexOf("min-width")>0&&e.viewportWidth()/e.fontSize>=t.replace("(min-width:","").replace("em)","")||t.indexOf("min-height")>0&&e.viewportHeight()/e.fontSize>=t.replace("(min-height:","").replace("em)","")?!0:!1)},e.mediaQueries={XXS:{query:"(min-width:15em)"},XS:{query:"(min-width:20em)"},S:{query:"(min-width:30em)"},M:{query:"(min-width:37.5em)"},L:{query:"(min-width:48.0625em)"},XL:{query:"(min-width:62em)"},XXL:{query:"(min-width:64em)"},"High-DPI":{query:"(-moz-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)"},"Max-768":{query:"(max-device-width:768px)"}},e.onDelayedResize=function(e,n){if(typeof e!="function"||typeof n!="boolean")return;n&&e();var r=function(){var e=0;return function(t,n){clearTimeout(e),e=setTimeout(t,n||250)}}();t(window).resize(function(){r(e)})},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0},e.viewportWidth=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0},t(function(){e.detectBoxSizing(),e.detectNthChild(),e.fixBoxSizing(),e.fixIE7Grid(),e.fixiOSOrientation(),e.fixNthChild()})})(window.sb.rwd=window.sb.rwd||{},jQuery),function(e,t){var n=e.debugPanel={};n.init=function(){this.container=t("#debug_panel"),this.bindEvents()},n.bindEvents=function(){t(document.body).on("click","#logo",t.proxy(this.logoClick,this)),this.container.on("click","#debug_close",t.proxy(this.closeClick,this))},n.closeClick=function(e){e.preventDefault(),this.container.toggle()},n.logoClick=function(e){e.shiftKey&&(e.preventDefault(),this.container.toggle())},t(function(){e.debugPanel.init()})}(window.sb.debug=window.sb.debug||{},jQuery),function(e,t){e.config={baselineAdjust:0,gridColumns:16,lineHeight:function(){var e=t("body").css("line-height");return e.indexOf("px")>-1?e.replace("px",""):e*sb.rwd.fontSize}},e.buildPanel=function(){t('<div id="debug-panel"><button class="debug-view" data-close="&times;">&curren;</button><ul><li><button data-option="background">Background</button></li><li><button data-option="baseline">Baseline</button></li><li><button data-option="boxes">Boxes</button></li><li><button data-option="grid">Grid</button></li><li><button data-option="windowSize">Window Size</button></li></ul></div>').appendTo("body");var n=t("#debug-panel");e.buildButtons.options(n),e.buildButtons.view(n)},e.buildButtons={options:function(n){var r=n.find("[data-option]"),i=[];t.each(r,function(e,n){i.push(t(n).attr("data-option"))}),r.on("click",function(){var n=t(this),r=n.attr("data-option");n.hasClass("on")?(e[r].off(),n.removeClass("on"),Modernizr.localstorage&&localStorage.removeItem("debug-"+r)):(e[r].on(),n.addClass("on"),Modernizr.localstorage&&localStorage.setItem("debug-"+r,!0))}),Modernizr.localstorage&&t.each(i,function(e,t){localStorage.getItem("debug-"+t)==="true"&&r.filter('[data-option="'+t+'"]').trigger("click")})},view:function(e){var n=e.find("button.debug-view"),r=function(){e.removeClass("open"),n.html(n.attr("data-open")),t(document).off("click.debugPanel")},i=function(){e.addClass("open"),n.html(n.attr("data-close")),t(document).on("click.debugPanel",function(n){t(n.target).parents().filter(e).length!==1&&r()})};n.attr("data-open",n.html()),n.on("click",function(){return e.hasClass("open")?r():i(),!1})}},e.background={off:function(){t("html").removeClass("debug")},on:function(){t("html").addClass("debug")}},e.baseline={off:function(){t("#debug-baseline").remove()},on:function(){var n=e.config,r=.375,i=t(document).height()/6,s,o=[];console.log(t(document).height());for(s=0;s<=i;s++)o.push('<li style="height:'+r+'em"></li>');t("body").append('<ol id="debug-baseline" style="top:'+n.baselineAdjust+'px">'+o.join("")+"</ol>")}},e.boxes={off:function(){t(".debug-number").remove(),t.each(t(".debug-box"),function(e,n){var r=t(n);r.contents().appendTo(r.parent()),r.remove()})},on:function(){t.each(t(".block").not("#debug-grid .block, .block .block"),function(e,n){t(n).wrapInner('<div class="debug-box"></div>'),t(n).find(".debug-box").append('<div class="debug-number">'+(e+1)+"</div>")})}},e.grid={off:function(){var e=document.getElementById("gridsetoverlaywrap");gs.remove(e),console.log("hide")},on:function(){gs.show()}},e.windowSize={off:function(){t("#debug-size").remove()},on:function(){t("body").append('<div id="debug-size"></div>');var e=t("#debug-size"),n=[],r=sb.rwd,i=r.mediaQueries,s=function(){e.find("span").html(r.viewportWidth()+" &times; "+r.viewportHeight()),t.each(i,function(t,n){var i=r.matchViewport(t);e.find("."+t).removeClass(""+!i).addClass(""+i)})};n.push("<span>?</span>"),n.push("<table>"),window.matchMedia("only all").matches===!1&&n.push('<tr class="polyfill true"><td colspan="3">polyfilled</td></tr>'),n.push('<tr class="none true"><td colspan="3">no active media queries</td></tr>'),t.each(i,function(e,t){var r=t.query,i,s;if(r.indexOf("min-width")>0&&r.indexOf("em")>0){var o=r.replace("(min-width:","").replace("em)","");i=Math.round(r.replace("(min-width:","").replace("em)","")*sb.rwd.fontSize*1e5)/1e5}s='<tr class="'+e+'">'+"<th>"+e+"</th>"+"<td>"+r+"</td>"+"<td>"+(i?i+"px":"")+"</td>"+"</tr>",n.push(s)}),n.push("</table>"),n.push('<button class="close">&times;</button>'),e.html(n.join("")),e.find(".close").on("click",function(){t("#debug-panel").find('button[data-option="windowSize"]').trigger("click")}),s(),t(window).resize(function(){s()})}},t(e.buildPanel)}(window.sb.debug=window.sb.debug||{},jQuery);