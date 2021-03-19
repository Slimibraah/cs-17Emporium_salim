let modenuit = document.querySelector('#darkMode1');
let tier2 = document.querySelector('#darkMode2');

tier2.addEventListener('click', () => {
    let whiteMode = document.querySelectorAll('.bg-white');
    let textWhite = document.querySelectorAll('.text-dark');

    whiteMode.forEach(element => {
        element.classList.remove('bg-white');
        element.classList.add('bg-dark');
    });

    textWhite.forEach(element => {
        element.classList.remove('text-dark');
        element.classList.add('text-white');
    });
});

modenuit.addEventListener('click', () => {
    let darkMode = document.querySelectorAll('.bg-dark');
    let textDark = document.querySelectorAll('.text-white');
    darkMode.forEach(element => {
        element.classList.remove('bg-dark');
        element.classList.add('bg-white');
    });

    textDark.forEach(element => {
        element.classList.remove('text-white');
        element.classList.add('text-dark');
    });
});

export {modenuit, tier2};