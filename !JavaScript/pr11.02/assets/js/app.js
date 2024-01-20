/*
Задание:
Проанализируйте код и выделите его основные части.
Создайте функцию init, которую следует вызвать в конце скрипта для инициализации работы всего кода.
Разделите код на логические блоки, чтобы каждая функция отвечала за определенное действие.
Удалите дублирующийся код. Если есть необходимость сохранить какой-то кусок кода в переменной, то сохраняйте его в переменной.
Замените все объявления переменных с использованием оператора var на наиболее подходящие операторы.
Исправленный код, должен работать без ошибок и выполнять заложенную в него первоначальную логику.
*/

function initCloseBtn(trigger, modal) {
  trigger.addEventListener('click', () => {
      modal.classList.remove('is-active');
              document.querySelector('html').classList.remove('is-clipped');
  });
}

function initCloseModal()  {
  const modalGallery = document.querySelector('.modal-gallery');
  const closeModalBtn = document.querySelector('.modal-gallery .modal-close');
  const closeModalBack = document.querySelector('.modal-gallery .modal-background');

  initCloseBtn(closeModalBtn, modalGallery);
  initCloseBtn(closeModalBack, modalGallery);
}

function initImagesClick(images) {
  // Добавляем обработчик события клика на каждое изображение
  for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function(event) {
  
          const image = event.target;
  
          let modal = document.querySelector('.modal-gallery');
          if(modal !== null) {
              modal.querySelector('img').src = image.src;
  
              modal.classList.add('is-active');
              document.querySelector('html').classList.add('is-clipped');
  
              
              if(image.getAttribute('alt')) {
                  const img2 = modal.querySelector('.image-subtitle'); 
                  const img3 = modal.querySelector('img');
                  img2.textContent = image.getAttribute('alt');
                  img3.setAttribute('alt', image.getAttribute('alt'));
                  img3.classList.remove('is-hidden');
              } else {
                  img2.classList.add('is-hidden');
                  img3.setAttribute('alt','');
              }
          }
  
      });
  }
}

function addNewBlocks(images) {
  // Проверяем, осталось ли до конца страницы менее 15%
  if ((document.documentElement.scrollTop + document.documentElement.clientHeight) / document.documentElement.scrollHeight * 100 > 85) {
      // Добавляем новые блоки в конец страницы
      for (let i = 0; i < 15; i++) {
          const columns = document.querySelector('.tile-content .columns');
          columns.append(document.querySelector('#tile-image').content.cloneNode(true));
  
          const addedBlock = columns.querySelector('div:last-child');
          const templateImage = images[Math.floor(Math.random()*images.length)];
          const image1 = addedBlock.querySelector('img');
          image1.src = templateImage.src;
          if(templateImage.getAttribute('alt')) 
          image1.setAttribute('alt', templateImage.getAttribute('alt'));
  
          addedBlock.setAttribute('class', images[Math.floor(Math.random()*images.length)].closest('div').getAttribute('class'));

          initImagesClick([image1]);
        
          console.log('Добавлено изображение');
      }
  }
}

function init() {
  // Получаем все изображения на странице
  const images = document.querySelectorAll('img');
  
  initCloseModal();
  initImagesClick(images); // Передаем амассив картинок....
  addNewBlocks(images);

  document.addEventListener('scroll', function () {
    addNewBlocks(images);
  });
}

init();