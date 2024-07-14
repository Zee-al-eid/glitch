const hiddenElements = document.querySelectorAll('.rtl');
const ltranima = document.querySelectorAll('.ltr')
const pop = document.querySelectorAll('.pop')
const ttb = document.querySelectorAll('.ttb')
const push = document.querySelectorAll('.push')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showanima');
        } else {
            entry.target.classList.remove('showanima');
        }
    });
});
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ltranima');
        } else {
            entry.target.classList.remove('ltranima');
        }
    });
});
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('popanima');
        } else {
            entry.target.classList.remove('popanima');
        }
    });
});
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ttbanima');
        } else {
            entry.target.classList.remove('ttbanima');
        }
    });
});
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('pushanima');
        } else {
            entry.target.classList.remove('pushanima');
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element)
});

ltranima.forEach((el) => {
    observer2.observe(el)
});

pop.forEach((el) => {
    observer3.observe(el)
});
ttb.forEach((el) => {
    observer4.observe(el)
});
push.forEach((el) => {
    observer5.observe(el)
});