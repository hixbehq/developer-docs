const replaceMintlify = () => {
  const el = document.querySelector('a[href*="mintlify"]');
  if (el) {
    el.href = "https://hixbe.com";
    el.innerHTML = `Copyright <strong>Hixbe</strong>`;
  }
};

replaceMintlify();

// If Mintlify re-hydrates, run again
new MutationObserver(replaceMintlify).observe(document.body, {
  childList: true,
  subtree: true
});
