/*!
* Fader.js
*
* Copyright 2012, Lukas Alexandre
* Licensed under MIT
*/function fadeOutWithId(a,b){fadeWithId(a,b,100,0)}function fadeInWithId(a,b){fadeWithId(a,b,0,100)}function fadeOutWithClass(a,b,c){fadeWithClass(a,b,c,100,0)}function fadeInWithClass(a,b,c){fadeWithClass(a,b,c,0,100)}function fadeWithId(a,b,c,d){var e=document.getElementById(a);exec_fade(e,b,c,d)}function fadeWithClass(a,b,c,d,e){var f=document.getElementsByClassName(a)[b];executeFade(f,c,d,e)}function executeFade(a,b,c,d){var e=c,f;d>=c?f=2:f=-2;var g=b*1e3/50,h=setInterval(function(){(f>0&&e>=d||f<0&&e<=d)&&clearInterval(h),setAlpha(a,e),e+=f},g)}function setAlpha(a,b){a.style.filter="alpha(opacity="+b+")",a.style.opacity=b/100};