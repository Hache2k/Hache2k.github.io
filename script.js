/* ============================================================
   OLIMPIADAS PERU — script.js
   ============================================================ */

/* ---- Tabs de filtro de resultados ---- */
function filterTab(el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

/* ---- Confirmación del formulario de inscripción ---- */
function handleSubmit() {
  alert('✅ Inscripción enviada correctamente.\nNos comunicaremos contigo en breve para confirmar el registro.');
}

/* ---- Confirmación del formulario de contacto ---- */
function handleContact() {
  alert('✅ Mensaje enviado.\nTe responderemos en menos de 24 horas.');
}

/* ---- Animación de entrada al hacer scroll ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.deporte-card, .encuentro-card, .form-box, .info-step').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});