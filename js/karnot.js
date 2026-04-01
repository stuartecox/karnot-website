/* ============================================================
   KARNOT ENERGY SOLUTIONS — SHARED JS
   Nav, Footer, Scroll Reveal, Sticky Nav
   ============================================================ */

// --- BASE PATH (auto-detect for GitHub Pages vs custom domain) ---
var KARNOT_BASE = (function(){
  var p = location.pathname;
  // If served from /karnot-website/ subdirectory, include it
  if (p.indexOf('/karnot-website') === 0) return '/karnot-website/';
  return '/';
})();
function kLink(page){ return KARNOT_BASE + page; }

// --- INJECT NAV ---
(function(){
  var nav = document.getElementById('karnot-nav');
  if (!nav) return;
  var currentPage = nav.getAttribute('data-page') || '';
  function active(page){ return currentPage === page ? ' style="color:#F56600"' : ''; }

  nav.outerHTML = '\
  <nav class="site-nav" id="site-nav" aria-label="Main navigation">\
    <a href="' + kLink('') + '" class="nav-logo">\
      <span class="nav-logo-icon">K</span>\
      Karnot\
    </a>\
    <div class="nav-links">\
      <a href="' + kLink('products.html') + '"' + active('products') + ' class="nav-hide-tablet">Products</a>\
      <a href="' + kLink('iheat.html') + '"' + active('iheat') + ' class="nav-hide-tablet">iHEAT</a>\
      <a href="' + kLink('icool.html') + '"' + active('icool') + ' class="nav-hide-tablet">iCOOL</a>\
      <a href="' + kLink('ispa.html') + '"' + active('ispa') + ' class="nav-hide-tablet">iSPA</a>\
      <a href="' + kLink('icryo.html') + '"' + active('icryo') + ' class="nav-hide-tablet">iCRYO</a>\
      <a href="' + kLink('applications.html') + '"' + active('applications') + ' class="nav-hide-tablet">Applications</a>\
      <a href="' + kLink('engineering-hub/') + '"' + active('engineering') + ' class="nav-hide-tablet">Engineering Hub</a>\
      <a href="' + kLink('compliance.html') + '"' + active('compliance') + ' class="nav-hide-tablet">Compliance</a>\
      <a href="' + kLink('about.html') + '"' + active('about') + ' class="nav-hide-tablet">About</a>\
      <a href="' + kLink('contact.html') + '"' + active('contact') + '>Contact</a>\
      <a href="' + kLink('savings.html') + '" class="nav-cta">Calculate Savings</a>\
    </div>\
    <button class="nav-hamburger" aria-label="Open menu" onclick="document.getElementById(\'mobile-menu\').classList.add(\'open\')"><i class="fa-solid fa-bars"></i></button>\
  </nav>\
  <div class="mobile-menu" id="mobile-menu">\
    <button class="mobile-close" aria-label="Close menu" onclick="this.parentElement.classList.remove(\'open\')"><i class="fa-solid fa-xmark"></i></button>\
    <a href="' + kLink('') + '" onclick="this.parentElement.classList.remove(\'open\')">Home</a>\
    <a href="' + kLink('products.html') + '">Products</a>\
    <a href="' + kLink('iheat.html') + '">iHEAT</a>\
    <a href="' + kLink('icool.html') + '">iCOOL</a>\
    <a href="' + kLink('ispa.html') + '">iSPA Pools</a>\
    <a href="' + kLink('icryo.html') + '">iCRYO</a>\
    <a href="' + kLink('applications.html') + '">Applications</a>\
    <a href="' + kLink('engineering-hub/') + '">Engineering Hub</a>\
    <a href="' + kLink('compliance.html') + '">Compliance</a>\
    <a href="' + kLink('izone.html') + '">iZONE</a>\
    <a href="' + kLink('isave.html') + '">iSAVE</a>\
    <a href="' + kLink('imesh.html') + '">iMESH</a>\
    <a href="' + kLink('nearfarm.html') + '">NearFarm</a>\
    <a href="' + kLink('about.html') + '">About</a>\
    <a href="' + kLink('contact.html') + '">Contact</a>\
    <a href="' + kLink('savings.html') + '" class="btn-orange" style="margin-top:12px">Calculate Savings</a>\
  </div>';
})();

// --- INJECT FOOTER ---
(function(){
  var footer = document.getElementById('karnot-footer');
  if (!footer) return;

  footer.outerHTML = '\
  <footer class="site-footer">\
    <div class="footer-grid">\
      <div class="footer-brand">\
        <a href="' + kLink('') + '" class="nav-logo"><span class="nav-logo-icon">K</span> Karnot</a>\
        <p>Natural refrigerant heat pumps that cut commercial energy costs by up to 75%. Serving Philippines, UK, USA &amp; Canada.</p>\
        <div class="footer-social">\
          <a href="https://www.facebook.com/karnotenergy" aria-label="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>\
          <a href="https://www.linkedin.com/company/karnot-energy" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i></a>\
          <a href="https://www.instagram.com/karnotenergy" aria-label="Instagram" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>\
        </div>\
      </div>\
      <div class="footer-col">\
        <h4>Products</h4>\
        <a href="' + kLink('iheat.html') + '">iHEAT R290</a>\
        <a href="' + kLink('icool.html') + '">iCOOL CO\u2082</a>\
        <a href="' + kLink('ispa.html') + '">iSPA Pool</a>\
        <a href="' + kLink('icryo.html') + '">iCRYO Cryo</a>\
        <a href="' + kLink('izone.html') + '">iZONE VRF</a>\
        <a href="' + kLink('isave.html') + '">iSAVE</a>\
        <a href="' + kLink('imesh.html') + '">iMESH Retrofit</a>\
        <a href="' + kLink('nearfarm.html') + '">NearFarm Ag</a>\
        <a href="' + kLink('applications.html') + '">All Applications</a>\
      </div>\
      <div class="footer-col">\
        <h4>Resources</h4>\
        <a href="' + kLink('savings.html') + '">Savings Calculator</a>\
        <a href="' + kLink('engineering-hub/') + '">Engineering Hub</a>\
        <a href="' + kLink('faq.html') + '">FAQ</a>\
        <a href="' + kLink('about.html') + '">About Us</a>\
        <a href="' + kLink('contact.html') + '">Contact</a>\
      </div>\
      <div class="footer-col">\
        <h4>Regions</h4>\
        <a href="' + kLink('') + '">Philippines &amp; ASEAN</a>\
        <a href="' + kLink('uk.html') + '">United Kingdom</a>\
        <a href="' + kLink('usa-canada.html') + '">USA &amp; Canada</a>\
      </div>\
    </div>\
    <div class="footer-bottom">\
      <p>&copy; ' + new Date().getFullYear() + ' Karnot Energy Solutions Inc. All rights reserved.</p>\
      <div>\
        <a href="' + kLink('privacy.html') + '">Privacy Policy</a> &nbsp;|&nbsp; \
        <a href="' + kLink('terms.html') + '">Terms</a> &nbsp;|&nbsp; \
        <a href="mailto:info@karnot.com">info@karnot.com</a>\
      </div>\
    </div>\
  </footer>';
})();

// --- STICKY NAV ---
(function(){
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var scrolled = false;
  function check(){
    var s = window.scrollY > 60;
    if (s !== scrolled) {
      scrolled = s;
      nav.classList.toggle('scrolled', s);
    }
  }
  window.addEventListener('scroll', check, {passive:true});
  check();
})();

// --- SCROLL REVEAL ---
(function(){
  var els = document.querySelectorAll('.rv,.rl,.rr');
  if (!window.IntersectionObserver) {
    for (var i = 0; i < els.length; i++) els[i].classList.add('v');
    return;
  }
  var ob = new IntersectionObserver(function(en){
    en.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('v');
        ob.unobserve(e.target);
      }
    });
  }, {threshold: .08, rootMargin: '0px 0px -40px 0px'});
  els.forEach(function(el){ ob.observe(el); });
})();

// --- ENGINEERING TRIAGE BOT (Floating Widget) ---
(function(){
  // Don't show on contact, engineering-hub, or savings pages (they already have CTAs)
  var path = location.pathname.toLowerCase();
  if (path.indexOf('contact') > -1 || path.indexOf('engineering-hub') > -1 || path.indexOf('savings') > -1) return;

  // Determine page context for triage prompt
  var triageConfig = null;
  if (path.indexOf('uk') > -1) {
    triageConfig = {
      icon: 'fa-solid fa-certificate',
      prompt: 'Are you an MCS Installer looking to claim the £7,500 BUS grant?',
      btnYes: { text: 'Yes, I\'m an Installer', action: 'mcs' },
      btnNo: { text: 'No, I\'m a Business Owner', action: 'commercial' }
    };
  } else if (path.indexOf('iheat') > -1 || path.indexOf('products') > -1) {
    triageConfig = {
      icon: 'fa-solid fa-temperature-three-quarters',
      prompt: 'What is your target hot water volume per day?',
      type: 'slider',
      unit: 'litres/day',
      min: 500, max: 50000, step: 500, defaultVal: 5000
    };
  } else if (path.indexOf('ispa') > -1) {
    triageConfig = {
      icon: 'fa-solid fa-water',
      prompt: 'What is your pool volume?',
      type: 'slider',
      unit: 'm³',
      min: 10, max: 200, step: 5, defaultVal: 50,
      resultTemplate: 'Based on {val}m³, an iSPA system could maintain your pool at the perfect temperature year-round.',
      ctaLink: 'contact.html?intent=ispa_sizing&volume={val}'
    };
  } else if (path.indexOf('icool') > -1) {
    triageConfig = {
      icon: 'fa-solid fa-snowflake',
      prompt: 'What cooling capacity do you need?',
      type: 'slider',
      unit: 'kW',
      min: 10, max: 500, step: 10, defaultVal: 100,
      resultTemplate: 'For {val}kW cooling, our CO₂ iCOOL systems deliver best-in-class efficiency.',
      ctaLink: 'contact.html?intent=icool_quote&required_kw={val}'
    };
  } else if (path === '/' || path.indexOf('index') > -1 || path === '' || path === KARNOT_BASE) {
    triageConfig = {
      icon: 'fa-solid fa-bolt',
      prompt: 'How much could you save with a heat pump?',
      btnYes: { text: 'Calculate My Savings', action: 'savings' },
      btnNo: { text: 'Talk to an Engineer', action: 'contact' }
    };
  }

  if (!triageConfig) return;

  // Inject CSS
  var style = document.createElement('style');
  style.textContent = '\
    .triage-fab{position:fixed;bottom:24px;right:24px;z-index:900;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#F56600,#e05a00);color:#fff;border:none;cursor:pointer;font-size:24px;box-shadow:0 4px 20px rgba(245,102,0,.4);transition:all .3s ease;display:flex;align-items:center;justify-content:center}\
    .triage-fab:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(245,102,0,.55)}\
    .triage-fab.active{border-radius:16px;width:auto;height:auto;padding:0;background:none;box-shadow:none;pointer-events:none}\
    .triage-panel{position:fixed;bottom:24px;right:24px;z-index:901;width:360px;max-width:calc(100vw - 32px);background:#fff;border-radius:20px;box-shadow:0 12px 48px rgba(0,0,0,.18);overflow:hidden;transform:translateY(20px) scale(.95);opacity:0;pointer-events:none;transition:all .35s cubic-bezier(.22,1,.36,1)}\
    .triage-panel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:auto}\
    .triage-header{background:linear-gradient(135deg,#0d1b3e,#1a2d5a);padding:20px;display:flex;align-items:center;gap:12px;color:#fff}\
    .triage-header i{font-size:24px;color:#F56600}\
    .triage-header span{font-size:15px;font-weight:600;line-height:1.4;flex:1}\
    .triage-close{background:none;border:none;color:rgba(255,255,255,.6);font-size:20px;cursor:pointer;padding:4px;transition:color .2s}\
    .triage-close:hover{color:#fff}\
    .triage-body{padding:20px}\
    .triage-btns{display:flex;flex-direction:column;gap:10px}\
    .triage-btn{padding:14px 20px;border-radius:12px;border:2px solid #e8e8ed;background:#fff;color:#1d1d1f;font-size:15px;font-weight:600;cursor:pointer;transition:all .25s ease;text-align:left;display:flex;align-items:center;gap:10px;text-decoration:none}\
    .triage-btn:hover{border-color:#F56600;background:rgba(245,102,0,.04);opacity:1}\
    .triage-btn i{color:#F56600;font-size:16px}\
    .triage-btn-primary{background:#F56600;color:#fff;border-color:#F56600}\
    .triage-btn-primary:hover{background:#e05a00;border-color:#e05a00;opacity:1}\
    .triage-slider-wrap{margin:16px 0}\
    .triage-slider{width:100%;-webkit-appearance:none;height:6px;border-radius:3px;background:#e8e8ed;outline:none}\
    .triage-slider::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:#F56600;cursor:pointer;box-shadow:0 2px 8px rgba(245,102,0,.3)}\
    .triage-val{font-size:28px;font-weight:800;color:#1d1d1f;text-align:center;margin:12px 0 4px}\
    .triage-unit{font-size:13px;color:#6e6e73;text-align:center}\
    .triage-result{background:#f0faf0;border-radius:12px;padding:16px;margin:16px 0 0;font-size:14px;line-height:1.6;color:#1d1d1f}\
    .triage-result strong{color:#F56600}\
    .triage-email{display:flex;gap:8px;margin-top:12px}\
    .triage-email input{flex:1;padding:12px 16px;border:2px solid #e8e8ed;border-radius:10px;font-size:14px;outline:none;transition:border .2s}\
    .triage-email input:focus{border-color:#F56600}\
    .triage-email button{padding:12px 20px;background:#F56600;color:#fff;border:none;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px;white-space:nowrap;transition:background .2s}\
    .triage-email button:hover{background:#e05a00}\
    .triage-pulse{animation:triagePulse 2s ease-in-out infinite}\
    @keyframes triagePulse{0%,100%{box-shadow:0 4px 20px rgba(245,102,0,.4)}50%{box-shadow:0 4px 28px rgba(245,102,0,.65)}}\
    @media(max-width:480px){.triage-panel{bottom:0;right:0;left:0;width:100%;max-width:100%;border-radius:20px 20px 0 0}.triage-fab{bottom:16px;right:16px}}\
  ';
  document.head.appendChild(style);

  // Create FAB button
  var fab = document.createElement('button');
  fab.className = 'triage-fab triage-pulse';
  fab.setAttribute('aria-label', 'Open engineering assistant');
  fab.innerHTML = '<i class="fa-solid fa-wrench"></i>';
  document.body.appendChild(fab);

  // Create panel
  var panel = document.createElement('div');
  panel.className = 'triage-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Engineering assistant');

  var headerHTML = '<div class="triage-header"><i class="' + triageConfig.icon + '"></i><span>' + triageConfig.prompt + '</span><button class="triage-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div>';
  var bodyHTML = '<div class="triage-body">';

  if (triageConfig.type === 'slider') {
    var def = triageConfig.defaultVal;
    bodyHTML += '<div class="triage-slider-wrap"><div class="triage-val" id="triage-display">' + def.toLocaleString() + '</div><div class="triage-unit">' + triageConfig.unit + '</div><input type="range" class="triage-slider" id="triage-range" min="' + triageConfig.min + '" max="' + triageConfig.max + '" step="' + triageConfig.step + '" value="' + def + '"></div>';
    bodyHTML += '<div id="triage-result" style="display:none"></div>';
    bodyHTML += '<div style="margin-top:12px"><button class="triage-btn triage-btn-primary" id="triage-go" style="width:100%;justify-content:center"><i class="fa-solid fa-calculator"></i> Show My Results</button></div>';
  } else {
    bodyHTML += '<div class="triage-btns">';
    bodyHTML += '<button class="triage-btn" data-action="' + triageConfig.btnYes.action + '"><i class="fa-solid fa-check"></i> ' + triageConfig.btnYes.text + '</button>';
    bodyHTML += '<button class="triage-btn" data-action="' + triageConfig.btnNo.action + '"><i class="fa-solid fa-arrow-right"></i> ' + triageConfig.btnNo.text + '</button>';
    bodyHTML += '</div>';
  }
  bodyHTML += '</div>';

  panel.innerHTML = headerHTML + bodyHTML;
  document.body.appendChild(panel);

  var isOpen = false;
  fab.addEventListener('click', function(){
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    fab.style.display = isOpen ? 'none' : 'flex';
  });

  panel.querySelector('.triage-close').addEventListener('click', function(){
    isOpen = false;
    panel.classList.remove('open');
    fab.style.display = 'flex';
  });

  // Slider logic
  if (triageConfig.type === 'slider') {
    var slider = document.getElementById('triage-range');
    var display = document.getElementById('triage-display');
    var resultDiv = document.getElementById('triage-result');
    var goBtn = document.getElementById('triage-go');

    slider.addEventListener('input', function(){
      display.textContent = parseInt(this.value).toLocaleString();
    });

    goBtn.addEventListener('click', function(){
      var val = parseInt(slider.value);
      var tmpl = triageConfig.resultTemplate || 'Based on ' + val.toLocaleString() + ' ' + triageConfig.unit + ', you could save up to <strong>75%</strong> on energy costs with a Karnot system.';
      var resultText = tmpl.replace(/\{val\}/g, val.toLocaleString());
      var ctaHref = (triageConfig.ctaLink || 'contact.html?intent=general_quote&volume={val}').replace(/\{val\}/g, val);

      resultDiv.innerHTML = '<div class="triage-result">' + resultText + '</div>' +
        '<div style="margin-top:12px"><a href="' + kLink(ctaHref) + '" class="triage-btn triage-btn-primary" style="justify-content:center;text-decoration:none"><i class="fa-solid fa-paper-plane"></i> Get My Engineering Spec</a></div>' +
        '<div class="triage-email" style="margin-top:8px"><input type="email" placeholder="Your email" id="triage-email-input"><button id="triage-email-send">Send Spec</button></div>';
      resultDiv.style.display = 'block';
      goBtn.style.display = 'none';

      // Email capture
      document.getElementById('triage-email-send').addEventListener('click', function(){
        var email = document.getElementById('triage-email-input').value;
        if (email && email.indexOf('@') > -1) {
          resultDiv.innerHTML = '<div class="triage-result"><i class="fa-solid fa-circle-check" style="color:#34c759;margin-right:8px"></i>Thanks! We\'ll send your engineering spec to <strong>' + email + '</strong> shortly.</div>';
        }
      });
    });
  }

  // Button routing (UK pathway + homepage)
  var btns = panel.querySelectorAll('[data-action]');
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var action = this.getAttribute('data-action');
      if (action === 'mcs') {
        // MCS installer — show email capture for compliance pack
        var body = panel.querySelector('.triage-body');
        body.innerHTML = '<div style="text-align:center;margin-bottom:16px"><i class="fa-solid fa-file-pdf" style="font-size:40px;color:#F56600"></i></div>' +
          '<p style="font-size:15px;font-weight:600;text-align:center;margin-bottom:4px">Download Free MCS R290 Compliance Pack</p>' +
          '<p style="font-size:13px;color:#6e6e73;text-align:center;margin-bottom:16px">Covers BUS grant eligibility, R290 certification requirements, and installer margin guide.</p>' +
          '<div class="triage-email"><input type="email" placeholder="Your business email" id="triage-mcs-email"><button id="triage-mcs-send">Download</button></div>';
        document.getElementById('triage-mcs-send').addEventListener('click', function(){
          var email = document.getElementById('triage-mcs-email').value;
          if (email && email.indexOf('@') > -1) {
            body.innerHTML = '<div class="triage-result" style="text-align:center"><i class="fa-solid fa-circle-check" style="color:#34c759;font-size:32px;display:block;margin-bottom:12px"></i><strong>Compliance Pack on its way!</strong><br>Check your inbox at ' + email + '</div>';
          }
        });
      } else if (action === 'commercial') {
        location.href = kLink('savings.html');
      } else if (action === 'savings') {
        location.href = kLink('savings.html');
      } else if (action === 'contact') {
        location.href = kLink('contact.html?intent=general_quote');
      }
    });
  });

  // Auto-open after 8 seconds on first visit (session only)
  if (!sessionStorage.getItem('triage_shown')) {
    setTimeout(function(){
      if (!isOpen) {
        fab.click();
        sessionStorage.setItem('triage_shown', '1');
      }
    }, 8000);
  }
})();
