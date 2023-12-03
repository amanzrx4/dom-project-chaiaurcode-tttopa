const buttons = document.querySelectorAll('.button');

buttons.forEach((b) => {
  b.addEventListener('click', () => {
    const color = b.id;
    document.body.style.backgroundColor = color;
  });
});
