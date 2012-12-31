/*!
* Fader.js 0.3.0
*
* Copyright 2012, Lukas Alexandre, Tait Brown
* Licensed under MIT
*/

var Fader = {
  supportsTransitions: (function() {
    var b = document.body || document.documentElement;
    var s = b.style;
    var p = 'transition';
    if(typeof s[p] == 'string') {return true; }

    // Tests for vendor specific prop
    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for(var i=0; i<v.length; i++) {
      if(typeof s[v[i] + p] == 'string') { return v[i]; }
    }
    return false;
  }()),
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
  fadeOutElement: function(elem, time) {
    Fader.fadeElement(elem, time, 100, 0);
  },
  fadeInElement: function(elem, time) {
    Fader.fadeElement(elem, time, 0, 100);
  },
  fadeWithId: function(id, time, ini, fin) {
    var target = document.getElementById(id);
    Fader.executeFade(target, time, ini, fin);
  },
  fadeWithClass: function(className, index, time, ini, fin) {
    var target = document.getElementsByClassName(className)[index];
    Fader.executeFade(target, time, ini, fin);
  },
  fadeElement: function(elem, time, ini, fin) {
    Fader.executeFade(elem, time, ini, fin);
  },
  executeFade: function(target, time, ini, fin) {
    if (Fader.supportsTransitions.length) {
      target.style.opacity = (ini === 100) ? 1 : 0;
      target.style[Fader.supportsTransitions+"Transition"] = "opacity " + time * 1000 + "ms linear";
      target.style.opacity = (fin === 100) ? 1 : 0;
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
