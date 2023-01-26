const wrapper = document.getElementsByClassName('wrapper')[0]
const conteiner = document.createElement('div');
conteiner.id = "slider";  
wrapper.append(conteiner);
const btnPrev = document.createElement('input');
btnPrev.type = "button";
btnPrev.value = 'prev';
btnPrev.id = 'prev';
wrapper.append(btnPrev);

const btnNext = document.createElement('input');
btnNext.type = "button";
btnNext.value = 'next';
btnNext.id = 'next';
wrapper.append(btnNext);

const slides = ['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/4.jpg','imgs/5.jpg','imgs/6.jpg'];
let template_sliders =`<div class="slider-line">`;

for(let i = 0; i < slides.length; i++){
    if(i == 0){
        template_sliders+= `<img data-slide="${i}" src="${slides[i]}" alt="" data-first class="active_slide">`;
    } else if(i == slides.length-1){
        template_sliders+= `<img data-slide="${i}" src="${slides[i]}" alt="" data-last">`;
    } else {
        template_sliders+= `<img data-slide="${i}" src="${slides[i]}" alt="">`;
    }
}
template_sliders+=`</div>`;
conteiner.innerHTML = template_sliders;

btnNext.addEventListener('click', sliderNext);

function sliderNext(){
  document.getElementById('prev').removeAttribute('disabled')
  let slide = document.querySelector('.active_slide');
  slide.classList.remove('active_slide');
  slide.nextElementSibling.classList.add('active_slide');
  slide = document.querySelector('.active_slide');
  const dataSlide = slide.getAttribute('data-slide');
  sliderLine.style.right = dataSlide * 100 + '%';
  if(dataSlide == slides.length-1){
    document.querySelector('#next').disabled = true;
  } else {
    document.querySelector('#next').disabled = false;
  };
}

btnPrev.addEventListener('click', sliderPrev);

function sliderPrev(){
    document.getElementById('next').removeAttribute('disabled')
    let slide = document.querySelector('.active_slide');
    slide.classList.remove('active_slide');
    slide.previousElementSibling.classList.add('active_slide');
    slide = document.querySelector('.active_slide');
    const dataSlide = slide.getAttribute('data-slide');
    sliderLine.style.right = dataSlide * 100 + '%';
    if(dataSlide == 0){
        document.querySelector('#prev').disabled = true;
    }else {
        document.querySelector('#prev').disabled = false;
    };
}

const sliderWidth = document.querySelector('#slider').offsetWidth;
const sliderLine = document.querySelector('.slider-line');
sliderLine.style.width = sliderWidth * slides.length + `px`;
const slidesImg = document.querySelectorAll('[data-slide]');

for(let i = 0; i < slidesImg.length; i++ ){
    slidesImg[i].style.width = sliderWidth + `px`;
}


