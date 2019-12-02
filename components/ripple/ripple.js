[].map.call(document.querySelectorAll('md-button, md-link, [anim="ripple"]'), el => {
  el.addEventListener("click", e => {
    if(el.hasAttribute("disabled")) return
    e = e.touches ? e.touches[0] : e;
    const r = el.getBoundingClientRect(),
      d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
    el.style.cssText = `--s: 0; --o: 1;`;
    el.offsetTop;
    el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX -
      r.left}; --y:${e.clientY - r.top};`;
  });
});