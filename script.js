const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const letterBtn = document.querySelector('.btn-letters');
const noteBtn = document.querySelector('.btn-notes');
const fullScreenBtn = document.querySelector('.fullscreen');

// Функция для проигрывания нот
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

//Массив клавиш
const Keys = [
    {
        letter: 'D',
        code: 'KeyD',
        url: 'assets/audio/c.mp3',
        note: 'c'
    },
    {
        letter: 'F',
        code: 'KeyF',
        url: 'assets/audio/d.mp3',
        note: 'd'
    },
    {
        letter: 'G',
        code: 'KeyG',
        url: 'assets/audio/e.mp3',
        note: 'e'
    },
    {
        letter: 'H',
        code: 'KeyH',
        url: 'assets/audio/f.mp3',
        note: 'f'
    },
    {
        letter: 'J',
        code: 'KeyJ',
        url: 'assets/audio/g.mp3',
        note: 'g'
    },
    {
        letter: 'K',
        code: 'KeyK',
        url: 'assets/audio/a.mp3',
        note: 'a'
    },
    {
        letter: 'L',
        code: 'KeyL',
        url: 'assets/audio/b.mp3',
        note: 'b'
    },
    {
        letter: 'R',
        code: 'KeyR',
        url: 'assets/audio/c♯.mp3',
        note: 'c#'
    },
    {
        letter: 'T',
        code: 'KeyT',
        url: 'assets/audio/d♯.mp3',
        note: 'd#'
    },
    {
        letter: 'U',
        code: 'KeyU',
        url: 'assets/audio/f♯.mp3',
        note: 'f#'
    },
    {
        letter: 'I',
        code: 'KeyI',
        url: 'assets/audio/g♯.mp3',
        note: 'g#'
    },
    {
        letter: 'O',
        code: 'KeyO',
        url: 'assets/audio/a♯.mp3',
        note: 'a#'
    }

];

// КЛАВИАТУРА
// Проигрывание и изменение стиля клавиши с помощью клавиатуры
window.addEventListener('keydown', (event) => {
    for (let i = 0; i < Keys.length; i++) {
        if (event.code === Keys[i].code) {
            playAudio(Keys[i].url);
            for (let j = 0; j < pianoКeys.length; j++) {
                if (pianoКeys[j].dataset.letter === Keys[i].letter) {
                    pianoКeys[j].classList.add('active');
                }
            }
        }
    }
});
//Восстановление стиля клавиши при отжатии клавиатуры
window.addEventListener('keyup', (event) => {
    for (let i = 0; i < Keys.length; i++) {
        if (event.code === Keys[i].code) {
            for (let j = 0; j < pianoКeys.length; j++) {
                if (pianoКeys[j].dataset.letter === Keys[i].letter) {
                    pianoКeys[j].classList.remove('active');
                }
            }
        }
    }
});

// МЫШЬ
// Проигрывание и изменение стиля при нажатии на мышь
piano.addEventListener('mousedown', (event) => {
    for (let i = 0; i < Keys.length; i++) {
        if (event.target.dataset.letter === Keys[i].letter) {
            playAudio(Keys[i].url);
            event.target.classList.add('active');
        }
    }
});
//Изменение стиля клавиши при нахождении указателя мыши на элементе во время отпускания кнопки мыши
piano.addEventListener('mouseup', (event) => {
    for (let i = 0; i < Keys.length; i++) {
        if (event.target.dataset.letter === Keys[i].letter) {
            event.target.classList.remove('active');
        }
    }
});
// Изменение стиля клавишикогда указатель мыши выходит за пределы элемента
piano.addEventListener('mouseout', (event) => {
    for (let i = 0; i < Keys.length; i++) {
        if (event.target.dataset.letter === Keys[i].letter) {
            event.target.classList.remove('active');
        }
    }
});
// Проигрывание с зажатой левой кнопкой мыши
piano.addEventListener('mouseover', (event) => {
    if (event.which == 1) {
        for (let i = 0; i < Keys.length; i++) {
            if (event.target.dataset.letter === Keys[i].letter) {
                playAudio(Keys[i].url);
                event.target.classList.add('active');
            }
        }
    }
});

//Переключение кнопок Notes-Letters
letterBtn.addEventListener('click', (event) => {
    noteBtn.classList.remove('btn-active');
    event.target.classList.add('btn-active');
    for (let j = 0; j < pianoКeys.length; j++) {
        pianoКeys[j].classList.add('letter');
    }
}
);
noteBtn.addEventListener('click', (event) => {
    letterBtn.classList.remove('btn-active');
    event.target.classList.add('btn-active');
    for (let j = 0; j < pianoКeys.length; j++) {
        pianoКeys[j].classList.remove('letter');
    }
}
);

//Полноэкранный режим on
fullScreenBtn.addEventListener('click', () => {
    if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  }
}
);
//Полноэкранный режим off
fullScreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
    document.exitFullscreen();
  }
});
