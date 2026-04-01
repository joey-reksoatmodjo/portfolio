// Client-side rendering for static site
(function () {
  function populateRocket() {
    const container = document.getElementById('rckt');
    if (!container) return;
    const assets = (window.siteData && window.siteData.rocket_assets) || [];
    assets.forEach(asset => {
      const wrapper = document.createElement('div');
      wrapper.className = 'fixed-rocket-stages';
      const img = document.createElement('img');
      img.src = asset.src;
      img.alt = asset.alt;
      img.id = asset.id;
      if (asset.classes) img.className = asset.classes;
      if (asset.style) img.setAttribute('style', asset.style);
      wrapper.appendChild(img);
      container.appendChild(wrapper);
    });
  }

  // Run immediately — GSAP scripts that follow need these elements in the DOM
  populateRocket();

  function createElement(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else el.setAttribute(k, v);
    });
    children.forEach(child => {
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else el.appendChild(child);
    });
    return el;
  }

  function createCard(card) {
    const header = createElement('div', { class: 'card-header' }, [
      createElement('h3', { class: 'card-title' }, [card.title])
    ]);

    const linksDiv = createElement('div', { class: 'card-links' });
    if (Array.isArray(card.links)) {
      card.links.forEach(l => {
        const a = createElement('a', { href: l.url, class: 'card-link', target: '_blank', rel: 'noopener' });
        const img = createElement('img', { src: l.icon, alt: 'link', class: 'card-icon' });
        a.appendChild(img);
        linksDiv.appendChild(a);
      });
    }
    header.appendChild(linksDiv);

    const cardEl = createElement('div', { class: 'card' });
    cardEl.appendChild(header);
    if (card.subtitle) cardEl.appendChild(createElement('h4', { class: 'card-subtitle' }, [card.subtitle]));
    cardEl.appendChild(createElement('p', { class: 'card-text' }, [card.body]));
    return cardEl;
  }

  function createCardVert(card) {
    const el = createElement('div', { class: 'card-mid' });
    if (card.title) el.appendChild(createElement('h3', { class: 'card-title txt-mid' }, [card.title]));
    if (card.icon) el.appendChild(createElement('img', { src: card.icon, alt: card.subtitle || 'icon', class: 'card-icon-lg' }));
    if (card.subtitle) el.appendChild(createElement('h4', { class: 'card-subtitle txt-mid' }, [card.subtitle]));
    if (card.body) el.appendChild(createElement('p', { class: 'card-text txt-mid' }, [card.body]));
    return el;
  }

  function populateProjects() {
    const container = document.querySelector('#projects .content');
    if (!container) return;
    const cards = (window.siteData && window.siteData.project_cards) || [];
    cards.forEach(c => container.appendChild(createCard(c)));
  }

  function populateExperience() {
    const insertPoint = document.getElementById('exp-cards-insert');
    if (!insertPoint) return;
    const cards = (window.siteData && window.siteData.experience_cards) || [];
    cards.forEach(c => insertPoint.insertAdjacentElement('afterend', createCard(c)));

    const achRoot = document.getElementById('achievements');
    const achievements = (window.siteData && window.siteData.achievement_cards) || [];
    achievements.forEach(a => achRoot.appendChild(createCardVert(a)));
  }

  function nameFromPath(path) {
    const name = path.split('/').pop().replace(/\.svg$/i, '');
    return decodeURIComponent(name);
  }

  function createTooltipSvg(srcPath) {
    const name = nameFromPath(srcPath);
    const holder = createElement('div', { class: 'tooltip' });
    const img = createElement('img', { src: srcPath, class: 'svg-med', alt: name });
    const span = createElement('span', { class: 'tooltiptext' }, [name]);
    holder.appendChild(img);
    holder.appendChild(span);
    return holder;
  }

  function populateSkills() {
    const codeRoot = document.getElementById('skills-code');
    const toolsRoot = document.getElementById('skills-tools');
    if (!codeRoot || !toolsRoot) return;
    const codeFiles = (window.siteData && window.siteData.svg_code_files) || [];
    const toolFiles = (window.siteData && window.siteData.svg_tool_files) || [];
    codeFiles.forEach(p => codeRoot.appendChild(createTooltipSvg(p)));
    toolFiles.forEach(p => toolsRoot.appendChild(createTooltipSvg(p)));
  }

  document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
    populateSkills();
  });
})();
