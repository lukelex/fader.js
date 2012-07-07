/*!
* Fader.js v0.1.2
*
* Copyright 2012, Lukas Alexandre
* Licensed under MIT
*/

var Fader = {
  fadeOutWithId: function(id, time) {
    Fader.fadeWithId(id, time, 100, 0);
  },
  fadeInWithId: function(id, time) {
    Fader.fadeWithId(id, time, 0, 100);
  },
  fadeOutWithClass: function(className, index, time) {
    Fader.fadeWithClass(className, index, time, 100, 0);
  },
  fadeInWithClass: function(className, index, time) {
    Fader.fadeWithClass(className, index, time, 0, 100);
  },
  fadeWithId: function(id, time, ini, fin) {
    var target = document.getElementById(id);
    Fader.executeFade(target, time, ini, fin);
  },
  fadeWithClass: function(className, index, time, ini, fin) {
    var target = document.getElementsByClassName(className)[index];
    Fader.executeFade(target, time, ini, fin);
  },
  executeFade: function(target, time, ini, fin) {
    var alpha = ini;
    var inc;
    if (fin >= ini) {
        inc = 2;
    } else {
        inc = -2;
    }
    var timer = (time * 1000) / 50;
    var i = setInterval(
      function() {
        if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
          clearInterval(i);
        }
        Fader.setAlpha(target, alpha);
        alpha += inc;
      }, timer
    );
  },
  setAlpha: function(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
  }
}