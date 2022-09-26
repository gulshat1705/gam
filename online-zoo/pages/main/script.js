const scrollbar = document.querySelector('.testimonials__scrollbar');
const scrollbarBtn = document.getElementsByClassName('testimonials__scrollbar__buttons');

for (let i = 0; i < scrollbarBtn.length; i++) {
    scrollbarBtn[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active-scroll');

        if(current.length > 0) {
            current[0].className = current[0].className.replace('active-scroll', '');
        }

        this.className += ' active-scroll';
    });
}

