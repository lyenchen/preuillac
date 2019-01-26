var ThreeDCarousel = function (el, classname) {
  var element = document.getElementById(el);
  var items = element.getElementsByClassName(classname);
  var classNames = ['one', 'two', 'three', 'four'];
  if (items.length !== 4) {
    alert('ThreeDCarousel only supports 4 items.');
    return false;
  } else {
    for (var i = 0; i < 4; i++) {
      items[i].className += " " + classNames[i];
    }
  }

  var obj = {
    element: element,
    items: items,
    prev: function () {
      var l = this.element.getElementsByClassName('one')[0];
      var c = this.element.getElementsByClassName('two')[0];
      var r = this.element.getElementsByClassName('three')[0];
      var q = this.element.getElementsByClassName('four')[0];
      l.classList.remove('one');
      l.classList.add('two');
      c.classList.remove('two');
      c.classList.add('three');
      r.classList.remove('three');
      r.classList.add('one');
      q.classList.remove('one');
      q.classList.add('four');
    },
    next: function () {
      var l = this.element.getElementsByClassName('one')[0];
      var c = this.element.getElementsByClassName('two')[0];
      var r = this.element.getElementsByClassName('three')[0];
      var q = this.element.getElementsByClassName('four')[0];
      l.classList.remove('one');
      l.classList.add('three');
      c.classList.remove('two');
      c.classList.add('one');
      r.classList.remove('three');
      r.classList.add('two');
    }};

  return obj;
};

var carousel = new ThreeDCarousel('carousel', 'item');

var auto = setInterval(function () {carousel.next();}, 2000);

var next = document.getElementById('next');
next.onclick = carousel.next.bind(carousel);

var prev = document.getElementById('prev');
prev.onclick = carousel.prev.bind(carousel);

//# sourceURL=pen.js