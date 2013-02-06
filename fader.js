/*!
* Fader.js 0.3.2
*
* Copyright 2012, Lukas Alexandre, Tait Brown
* Licensed under MIT
*/

var Fader = {
  supportsTransitions: (function() {
    var b = document.body || document.documentElement;
    var v = ['transition', 'MozTransition', 'WebkitTransition', 'KhtmlTransition', 'OTransition', 'msTransition'];
    for(var i=0, l=v.length; i<l; i++) {
      if(typeof b.style[v[i]] == 'string') { return v[i]; }
    }
    return false;
  }()),
  fadeOutWithId: function(id, time, callback) {
    Fader.fadeWithId(id, time, 100, 0, callback);
  },
  fadeInWithId: function(id, time, callback) {
    Fader.fadeWithId(id, time, 0, 100, callback);
  },
  fadeOutWithClass: function(className, index, time, callback) {
    Fader.fadeWithClass(className, index, time, 100, 0, callback);
  },
  fadeInWithClass: function(className, index, time, callback) {
    Fader.fadeWithClass(className, index, time, 0, 100, callback);
  },
  fadeOutElement: function(elem, time, callback) {
    Fader.fadeElement(elem, time, 100, 0, callback);
  },
  fadeInElement: function(elem, time, callback) {
    Fader.fadeElement(elem, time, 0, 100, callback);
  },
  fadeWithId: function(id, time, ini, fin, callback) {
    var target = document.getElementById(id);
    Fader.executeFade(target, time, ini, fin, callback);
  },
  fadeWithClass: function(className, index, time, ini, fin, callback) {
    var target = document.getElementsByClassName(className)[index];
    Fader.executeFade(target, time, ini, fin, callback);
  },
  fadeElement: function(elem, time, ini, fin, callback) {
    Fader.executeFade(elem, time, ini, fin, callback);
  },
  executeFade: function(target, time, ini, fin, callback) {
    var callback = callback || function(){};
    if (Fader.supportsTransitions) {
      target.style.opacity = (ini === 100) ? 1 : 0;
      target.style[Fader.supportsTransitions] = "opacity " + time * 1000 + "ms linear";
      target.style.opacity = (fin === 100) ? 1 : 0;
      setTimeout(callback, time*1000);
      return;
    }
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
          setTimeout(callback, timer);
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
