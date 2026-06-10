/* =============================================
   RECYCLE THE WORLD AI — Scripts
   ============================================= */

/**
 * Cria partículas animadas no fundo oceânico
 */
function initParticles() {
  const particles = document.getElementById('particles');
  if (!particles) return;

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay: ${Math.random() * 20}s;
      opacity: 0;
    `;
    particles.appendChild(p);
  }
}

/**
 * Seleciona um valor de doação nos botões de valor
 * @param {HTMLElement} btn - Botão clicado
 * @param {string} val - Valor a definir no input
 */
function setAmount(btn, val) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('donation-amount').value = val;
}

/**
 * Processa a doação (exibe alerta — integração com gateway pendente)
 */
function handleDonate() {
  const val = document.getElementById('donation-amount').value;
  alert(
    'Obrigado pela sua doação de ' + val + '! 🌊♻️\n\n' +
    'Você está ajudando a transformar o mundo.\n\n' +
    '(Integração com gateway de pagamento em breve)'
  );
}

/**
 * Configura smooth scroll para links âncora
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSmoothScroll();
});
