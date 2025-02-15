let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const thumbnails = document.querySelectorAll('.thumbnails img');

function showSlide(i) {
    if (i >= totalSlides) index = 0;
    else if (i < 0) index = totalSlides - 1;
    else index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => showSlide(index + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 3000);
