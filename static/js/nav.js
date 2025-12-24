function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
window.onload = scrollToBottom;


// Use SmoothScroller 'scrollTo' to jump to the sections tagged by their respective IDs
document.querySelectorAll('.side-nav-link').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = btn.getAttribute('data-target');
    smoother.scrollTo(target, true, "center center");
  });
});

// Change the nav link to Active when it is seen on the viewport
document.querySelectorAll('.side-nav-link').forEach(element => {
  const trigger = element.getAttribute('data-target');
  ScrollTrigger.create({
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      toggleClass: {
          targets: element, // Selector for the target element(s)
          className: "side-nav-link-active"     // Class to toggle on the target element(s)
      },
      // markers: true
  });
});


// Create standard animations for expanding/collapsing content
document.querySelectorAll('.collapsible-container').forEach(container => {
  const expandBtn = container.querySelector('.collapsible-expand-btn');
  const collapseBtn = container.querySelector('.collapsible-collapse-btn');
  const content = container.querySelector('.collapsible-content');

  expandBtn.addEventListener('click', () => {
    expandBtn.style.display = 'none';
    content.style.display = 'flex';
    // gsap.fromTo(content, {height: 0, opacity: 0}, {height: content.scrollHeight, opacity: 1, duration: 0.5, onComplete: () => {
    gsap.fromTo(content, {height: 0, opacity: 0}, {height: 'auto', opacity: 1, duration: 0.5, onComplete: () => {
      content.style.height = 'auto';
    }});
  });

  collapseBtn.addEventListener('click', () => {
    expandBtn.style.display = 'block';
    gsap.to(content, {height: 0, opacity: 0, duration: 0.5, onComplete: () => {
      content.style.display = 'none';
      content.style.height = '';
    }});
  });
});