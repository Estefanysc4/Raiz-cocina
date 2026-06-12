/* =============================================
   MENU — Lógica de tabs e inyección de cards
   ============================================= */

(function () {
  'use strict';

  const tabs  = document.querySelectorAll('.tab');
  const grid  = document.getElementById('menu-grid');

  function buildCard(plato) {
    const badgeHtml = plato.badge
      ? `<span class="plato-card-badge${plato.badge === 'Vegano' ? ' vegano' : ''}">${plato.badge}</span>`
      : '';

    return `
      <article class="plato-card">
        <div class="plato-card-img">
          <div class="plato-card-img-bg ${plato.bgClass}"></div>
          ${badgeHtml}
        </div>
        <div class="plato-card-body">
          <h3 class="plato-card-nombre">${plato.nombre}</h3>
          <p class="plato-card-desc">${plato.desc}</p>
          <div class="plato-card-footer">
            <span class="plato-card-precio">${plato.precio}</span>
            <span class="plato-card-origen">${plato.origen}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderCategory(cat) {
    const platos = menuData[cat];
    if (!platos) return;

    grid.innerHTML = platos.map(buildCard).join('');

    // Forzar reflow para que la animación se dispare
    grid.classList.remove('fade-in');
    void grid.offsetWidth;
    grid.classList.add('fade-in');
  }

  function setActiveTab(tab) {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;
      setActiveTab(tab);
      renderCategory(cat);
    });
  });

  // Soporte de teclado (flechas izq/der entre tabs)
  tabs.forEach((tab, i) => {
    tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = tabs[i + 1] || tabs[0];
      if (e.key === 'ArrowLeft')  next = tabs[i - 1] || tabs[tabs.length - 1];
      if (next) { next.focus(); next.click(); }
    });
  });

  // Render inicial
  renderCategory('entrantes');
})();
