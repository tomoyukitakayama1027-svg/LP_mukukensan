// 申し込みフォームのURL。決まったらここに入れると「オンライン面談に申し込む」ボタンの飛び先になる
var FORM_URL = '';

(function () {
  // スクロールでふわっと表示
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // 申し込みボタンの飛び先
  var apply = document.getElementById('apply-btn');
  if (apply && FORM_URL) {
    apply.href = FORM_URL;
    apply.target = '_blank';
    apply.rel = 'noopener';
  }

  // スマホ追従ボタン：ヒーローを過ぎたら表示、入会セクションが見えている間は隠す
  var floatCta = document.getElementById('float-cta');
  var hero = document.querySelector('.hero');
  var join = document.getElementById('join');
  if (floatCta && hero && join && 'IntersectionObserver' in window) {
    var heroVisible = true, joinVisible = false;
    var update = function () { floatCta.classList.toggle('show', !heroVisible && !joinVisible); };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(function (e) { joinVisible = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(join);
  }
})();
