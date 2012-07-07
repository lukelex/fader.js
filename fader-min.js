/*!
* Fader.js v0.1.2
*
* Copyright 2012, Lukas Alexandre
* Licensed under MIT
*/var Fader={fadeOutWithId:function(a,b){Fader.fadeWithId(a,b,100,0)},fadeInWithId:function(a,b){Fader.fadeWithId(a,b,0,100)},fadeOutWithClass:function(a,b,c){Fader.fadeWithClass(a,b,c,100,0)},fadeInWithClass:function(a,b,c){Fader.fadeWithClass(a,b,c,0,100)},fadeWithId:function(a,b,c,d){var e=document.getElementById(a);Fader.executeFade(e,b,c,d)},fadeWithClass:function(a,b,c,d,e){var f=document.getElementsByClassName(a)[b];Fader.executeFade(f,c,d,e)},executeFade:function(a,b,c,d){var e=c,f;d>=c?f=2:f=-2;var g=b*1e3/50,h=setInterval(function(){(f>0&&e>=d||f<0&&e<=d)&&clearInterval(h),Fader.setAlpha(a,e),e+=f},g)},setAlpha:function(a,b){a.style.filter="alpha(opacity="+b+")",a.style.opacity=b/100}};