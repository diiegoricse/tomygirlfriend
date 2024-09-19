
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Todavía recuerdo aquel vestido blanco que lucías y lo fascinante que fue verte en ello mientras te observaba con una calma y paz, algo que necesitarás en estos momentos mi vida. Así que, de todo corazón y con estas peonias que tanto te gustan, te deseo MUCHA SUERTE<3 en TODOS LOS PARCIALES y que el "vernos" como solemos hacerlo puede esperar las veces que sean necesarias para tener como novia a una perfecta médica. Te amo, mi niñita preciosa<3').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 60); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};