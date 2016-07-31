/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){a.fn.museMenu=function(){return this.each(function(){var b=a(this),c="absolute",d,e,f,g,i;b.css("position")=="fixed"&&(c="fixed",d=b.css("top"),e=b.css("left"),f=b.css("right"),g=b.css("bottom"),i=parseInt(b.css("margin-left")));var h=a(),j=!1,k=b.find(".MenuItemContainer"),l=b.find(".MenuItem");l.bind("mouseenter",function(){j=!0});l.bind("mouseleave",function(){j=!1;setTimeout(function(){j===!1&&(k.each(function(){a(this).data("hideSubmenu")()}),h=a())},300)});l.each(function(){var j=
a(this),k=j.siblings(".SubMenu"),l=j.closest(".MenuItemContainer"),n=l.parentsUntil(".MenuBar").filter(".MenuItemContainer").length===0,q;if(n&&k.length>0){var m=a("<div style='position:"+c+"' class='MenuBar popup_element'></div>").hide().appendTo("body");k.show();q=k.position().top;k.hide()}l.data("$parentMenuItemContainer",l.parent().closest(".MenuItemContainer")).data("showSubmenuOnly",function(){if(n&&k.length>0)if(c!="fixed"){var a=l.offset();m.appendTo("body").css({left:a.left,top:a.top}).append(k).show()}else{var a=
l.position(),h=0,j=0;f!="auto"&&(h=b.outerWidth()-a.left);g!="auto"&&(j=q);m.appendTo("body").css({left:e,top:d,right:f,bottom:g,marginLeft:i+a.left,marginRight:h,marginTop:a.top,marginBottom:j}).append(k).show()}k.show();k.find(".SubMenu").hide()}).data("hideSubmenu",function(){k.hide()}).data("isDescendentOf",function(a){for(var b=l.data("$parentMenuItemContainer");b.length>0;){if(a.index(b)>=0)return!0;b=b.data("$parentMenuItemContainer")}return!1});var o=function(){var b=h;b.length==0?l.data("showSubmenuOnly")():
l.data("$parentMenuItemContainer").index(b)>=0?l.data("showSubmenuOnly")():l.siblings().index(b)>=0?(b.data("hideSubmenu")(),l.data("showSubmenuOnly")()):b.data("isDescendentOf")(l)?l.data("showSubmenuOnly")():b.data("isDescendentOf")(l.siblings(".MenuItemContainer"))?(l.siblings(".MenuItemContainer").each(function(){a(this).data("hideSubmenu")()}),l.data("showSubmenuOnly")()):(b.get(0),l.get(0));h=l},u=null;j.bind("mouseenter",function(){u=setTimeout(function(){o()},200);j.one("mouseleave",function(){clearTimeout(u)})})})})}})(jQuery);
