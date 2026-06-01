document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.embla').forEach(function(emblaNode) {
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const prevBtn = emblaNode.querySelector('.embla__prev');
    const nextBtn = emblaNode.querySelector('.embla__next');
    if (!viewportNode) return;
    const embla = EmblaCarousel(viewportNode);

    if (prevBtn) prevBtn.addEventListener('click', () => embla.scrollPrev());
    if (nextBtn) nextBtn.addEventListener('click', () => embla.scrollNext());
  });
});
