const redcard = document.querySelector(".main-cardVermelhoNotext");

redcard.addEventListener('mouseenter', () => {
    redcard.setAttribute('src', 'assets/main/CardVermelhoTexto.png')
});

redcard.addEventListener('mouseleave', () => {
    redcard.setAttribute('src', 'assets/main/CardVermelhoFundo.png')
});
