// javascript

document.querySelector('.btn__dropdown')
        .addEventListener('click', () => {
            document.querySelector('.drop-content')
                    .classList.toggle('open');
        });