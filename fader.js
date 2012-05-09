function fadeOutWithId(id, time) {
  fadeWithId(id, time, 100, 0);
}
function fadeInWithId(id, time) {
  fadeWithId(id, time, 0, 100);
}

function fadeOutWithClass(className, index, time) {
  fadeWithClass(className, index, time, 100, 0);
}
function fadeInWithClass(className, index, time) {
  fadeWithClass(className, index, time, 0, 100);
}

function fadeWithId(id, time, ini, fin) {
  var target = document.getElementById(id);
  exec_fade(target, time, ini, fin);
}
function fadeWithClass(className, index, time, ini, fin) {
  var target = document.getElementsByClassName(className)[index];
  executeFade(target, time, ini, fin);
}

function executeFade(target, time, ini, fin) {
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
      setAlpha(target, alpha);
      alpha += inc;
    }, timer
  );
}

function setAlpha(target, alpha) {
  target.style.filter = "alpha(opacity="+ alpha +")";
  target.style.opacity = alpha/100;
}
