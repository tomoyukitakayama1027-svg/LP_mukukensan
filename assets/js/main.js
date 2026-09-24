// 申し込みフォームのURL。決まったらここに入れると「オンライン面談に申し込む」ボタンの飛び先になる
var FORM_URL = 'https://resilient-bagel-c1a.notion.site/3202e3257cf480a8b157d3d3df55181b';

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

// 動画のサムネイルをクリックしたらYouTubeを読み込んで再生する
(function () {
  var btn = document.getElementById('yt-play');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.id + '?autoplay=1';
    f.title = '無垢研鑽 紹介動画';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allowFullscreen = true;
    var wrap = document.createElement('div');
    wrap.className = 'video-frame';
    wrap.appendChild(f);
    btn.replaceWith(wrap);
  });
})();

// 日本語の改行位置を文節単位にそろえる（BudouX / Apache-2.0）
// iPhoneのSafariなど word-break: auto-phrase 未対応のブラウザでも効く
(function () {
  var TARGET = [
    '.hero-kicker', '.hero-title', '.rb-main', '.sec-title', '.sec-lead',
    '.concept-catch', '.concept-body', '.values h4', '.values p',
    '.act h3', '.act p', '.act .meta dd', '.ti h4', '.ti p', '.reg-label',
    '.rep-bio p', '.works li', '.disclaimer', '.pod h4', '.pod p',
    '.numbers .lbl', '.legend .lg-l', '.b-head span', '.stat-card h4', '.chart-note',
    '.voice-card p', '.results li', '.iv-role', '.iv-qa dd',
    '.checks li', '.range', '.foryou-lead', '.recruit p', '.flow h4', '.flow p',
    '.apply .lead', '.faq summary', '.faq .a p', '.final .catch', '.final .lead',
    '.contact-box p', '.btn', '.cta-note', '.src'
  ].join(',');

  var s = document.createElement('script');
  s.src = 'assets/js/budoux-ja.min.js?v=202609242316';
  s.onload = function () {
    if (!window.customElements || !customElements.get('budoux-ja')) return;
    document.querySelectorAll(TARGET).forEach(function (el) {
      if (el.closest('budoux-ja')) return;
      var w = document.createElement('budoux-ja');
      while (el.firstChild) w.appendChild(el.firstChild);
      el.appendChild(w);
    });
  };
  document.head.appendChild(s);
})();
