// Client-side rendering for static site
(function () {
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
    const container = document.querySelector('#experience .content');
    if (!container) return;
    const cards = (window.siteData && window.siteData.experience_cards) || [];
    cards.forEach(c => container.insertBefore(createCard(c), container.querySelector('h1 + h1')));

    // achievements
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

  function setupCollapsible() {
    document.querySelectorAll('.collapsible-expand-btn').forEach(btn => {
      const wrapper = btn.closest('.collapsible-container');
      const content = wrapper && wrapper.querySelector('.collapsible-content');
      if (!content) return;
      btn.addEventListener('click', () => {
        content.style.display = '';
        btn.style.display = 'none';
      });
    });
    document.querySelectorAll('.collapsible-collapse-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cont = btn.closest('.collapsible-content');
        if (!cont) return;
        cont.style.display = 'none';
        const expandBtn = cont.parentElement.querySelector('.collapsible-expand-btn');
        if (expandBtn) expandBtn.style.display = '';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
    populateSkills();
    setupCollapsible();
  });
})();
