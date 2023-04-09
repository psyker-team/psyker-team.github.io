function isMobile() {
  var info = navigator.userAgent;
  //通过正则表达式的test方法判断是否包含“Mobile”字符串
  var isPhone = /mobile/i.test(info.toLocaleLowerCase());
  //如果包含“Mobile”（是手机设备）则返回true
  return isPhone;
}
let isRemove = false;
window.onload = function () {
  let isPhone = isMobile();
  if (isPhone) {
    let lists = document.querySelectorAll(".showPhone");
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = "block";
    }
    document.querySelector(".container-banner").style.marginTop = "0";
    document.querySelector(".showPc").style.display = "none";
  } else {
    if (!isRemove) {
      console.log(isRemove);
      let head = document.querySelector("head");
      head.removeChild(head.children[5]);
      head.removeChild(head.children[8]);
      isRemove = true;
    }
    document.body.style.zoom = "normal"; //避免zoom尺寸叠加
    let scale = document.body.clientWidth / 1920;
    document.body.style.zoom = scale;
  }
};
(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();
window.addEventListener("optimizedResize", function () {
  let isPhone = isMobile();
  if (!isRemove) {
    let head = document.querySelector("head");
    head.removeChild(head.children[4]);
    head.removeChild(head.children[12]);
    isRemove = true;
  }
  if (!isPhone) {
    document.body.style.zoom = "normal";
    let scale = document.body.clientWidth / 1920;
    document.body.style.zoom = scale;
  }
});
