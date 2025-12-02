fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // initialize theme toggle after navbar is injected
    if (typeof initThemeToggle === 'function') setTimeout(initThemeToggle, 50);
  });

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

function small(str){
 
  if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
  else if(str=='nav4'){
        const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
    else if(str=='nav5'){
        const cont=document.getElementById('nav5');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
}

function normal(str){
   if (str=='coverimg'){
    const cont=document.getElementById('cont');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav4'){
        const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
      else if(str=='nav5'){
        const cont=document.getElementById('nav5');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
}

function expand(str){
  if (str=='coverimg'){
    const cont=document.getElementById('cont');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav4'){
    const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav5'){
    const cont=document.getElementById('nav5');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
}
}

/* Theme toggle initialization and persistence */
function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    // Add a short transition class to animate color changes
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 420);

    // Apply theme attribute and persist
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('site-theme', theme); } catch (e) {}

    // Update toggle icon and outline style
    if (icon) icon.textContent = theme === 'light' ? '☀️' : '🌙';
    if (toggle) {
      if (theme === 'light') {
        toggle.classList.remove('btn-outline-light');
        toggle.classList.add('btn-outline-dark');
      } else {
        toggle.classList.remove('btn-outline-dark');
        toggle.classList.add('btn-outline-light');
      }
    }

    // Swap navbar logo if possible, otherwise apply a fallback filter
    try {
      const logo = document.querySelector('.site-logo');
      const navEl = document.getElementById('nav');
      if (logo) {
        const darkSrc = logo.dataset.dark || logo.getAttribute('src');
        const lightSrc = logo.dataset.light || null;

        if (theme === 'light' && lightSrc) {
          // Try to preload the light src
          const imgTest = new Image();
          imgTest.onload = function() {
            logo.src = lightSrc;
            logo.classList.remove('logo-filter-light');
          };
          imgTest.onerror = function() {
            // light variant not found — keep dark logo but apply filter to improve contrast
            logo.src = darkSrc;
            logo.classList.add('logo-filter-light');
          };
          imgTest.src = lightSrc;
        } else {
          // dark theme — restore dark src and remove fallback filter
          if (darkSrc) logo.src = darkSrc;
          logo.classList.remove('logo-filter-light');
        }
      }
      // also toggle navbar-dark / navbar-light classes for contrast
      if (navEl) {
        if (theme === 'light') {
          navEl.classList.remove('navbar-dark');
          navEl.classList.add('navbar-light');
        } else {
          navEl.classList.remove('navbar-light');
          navEl.classList.add('navbar-dark');
        }
        // brand text color
        const brandText = navEl.querySelector('.navbar-brand .fw-bold');
        if (brandText) {
          brandText.classList.remove('text-light', 'text-dark');
          brandText.classList.add(theme === 'light' ? 'text-dark' : 'text-light');
        }
      }
    } catch (e) {
      // ignore errors related to logo swapping
    }
  }

  const saved = (function(){ try { return localStorage.getItem('site-theme'); } catch(e){ return null; }})();
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(saved || (prefersLight ? 'light' : 'dark'));

  if (toggle) {
    toggle.addEventListener('click', function(){
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }
}