function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
function showTab(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  event.currentTarget.classList.add('active');
}
function toggleFaq(el) {
  el.classList.toggle('open');
  const ans = el.nextElementSibling;
  ans.classList.toggle('show');
}
// Particles
window.addEventListener('load', () => {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `position:absolute;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;background:rgba(124,58,237,${Math.random()*0.4+0.1});border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;animation:float ${Math.random()*10+10}s linear infinite;animation-delay:-${Math.random()*10}s`;
    container.appendChild(p);
  }
  const style = document.createElement('style');
  style.textContent = '@keyframes float{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(-100vh) rotate(360deg)}}';
  document.head.appendChild(style);
});
