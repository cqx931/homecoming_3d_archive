console.log('Slideshow script loaded');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.embla').forEach(function(emblaNode) {
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const prevBtn = emblaNode.querySelector('.embla__prev');
    const nextBtn = emblaNode.querySelector('.embla__next');
    const embla = EmblaCarousel(viewportNode);

    prevBtn.addEventListener('click', embla.scrollPrev);
    nextBtn.addEventListener('click', embla.scrollNext);
  });
});