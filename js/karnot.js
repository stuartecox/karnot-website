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
      </div>\
      <div class="footer-col">\
        <h4>Resources</h4>\
        <a href="' + kLink('savings.html') + '">Savings Calculator</a>\
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
