document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('.rolling-text');
  
    elements.forEach(element => {
      let innerText = element.innerText;
      element.innerHTML = '';
  
      let maxLetters = 10; // Définir le nombre maximal de lettres dans chaque bloc
  
      let textContainer1 = document.createElement('div');
      textContainer1.classList.add('block');
  
      let textContainer2 = document.createElement('div');
      textContainer2.classList.add('block', 'hidden');
  
      for (let i = 0; i < innerText.length; i++) {
        let letter = innerText[i];
        if (letter.trim() !== '') {
          let span1 = document.createElement('span');
          span1.innerText = letter;
          span1.classList.add('letter');
          textContainer1.appendChild(span1);
  
          if (i < innerText.length - 1 && i % maxLetters === maxLetters - 1) {
            // Crée un nouveau conteneur caché après chaque maxLetters lettres
            let span2 = document.createElement('span');
            span2.innerText = letter;
            span2.classList.add('letter');
            textContainer2.appendChild(span2);
          }
        }
      }
  
      element.appendChild(textContainer1);
      element.appendChild(textContainer2);
    });
  
    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.classList.add('hover');
      });
  
      element.addEventListener('mouseout', () => {
        element.classList.remove('hover');
      });
    });
  });
  