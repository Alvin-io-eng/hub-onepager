/* shared.js — Innovation Hub */

// ── THEME ──
function getTheme() { return localStorage.getItem('hub-theme') || 'dark'; }
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('hub-theme', t);
  document.querySelectorAll('.theme-icon').forEach(el => el.textContent = t === 'dark' ? '☀️' : '🌙');
}
function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// Apply theme on load
setTheme(getTheme());

// ── ACTIVE NAV ──
document.querySelectorAll('.nav-item').forEach(item => {
  if (item.getAttribute('href') === window.location.pathname.split('/').pop()) {
    item.classList.add('active');
  }
});
