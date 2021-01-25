import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs]);

document.addEventListener('DOMContentLoaded', () => {
  // вставляем svg в код

  let svg = document.querySelectorAll('.svg');
  svg.forEach(element => {
    let img = element;
    let imgClass = img.getAttribute('class');
    let imgURL = img.getAttribute('src');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', imgURL);
    xhr.responseType = 'document'; 
    xhr.onreadystatechange = function (data) {
      if(xhr.response){
        let svgi = xhr.response.querySelector('svg');
        if (typeof imgClass !== 'undefined') {
          svgi.setAttribute('class', imgClass);
        }
        img.replaceWith(svgi);
      }
    }
    xhr.send();
  })


  // активация слайдера
  var swiper = new Swiper('.indexSlider__container', {
    pagination: {
      el: '.indexSlider__pagination',
      clickable: true,
    },
    loop: true,
  });


  function initSlider() {
    let slider = document.getElementsByClassName("knifeSlider");

    for(let i = 0; i < slider.length; i++) {
  
      let el = slider[i];
      
      let swiper = el.getElementsByClassName("knifeSlider__container")[0];
      let nx = el.getElementsByClassName("knifeSlider__next")[0];
      let pr = el.getElementsByClassName("knifeSlider__prev")[0];
      let pg = el.getElementsByClassName("knifeSlider__pagination")[0];


      new Swiper(swiper, {
        slidesPerView: 4,
        spaceBetween: 30,
        // loop: true,
        navigation: {
          nextEl: nx,
          prevEl: pr
        },
        breakpoints: {
          // when window width is >= 320px
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          560: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          // when window width is >= 640px
          768: {
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
            pagination: {
              el: false,
              clickable: true,
            },
          }
        }
      });
    }
  }
  if(initSlider){
    initSlider()
  }

  function initSliderMini() {
    let slider = document.getElementsByClassName("knifeSliderMini");

    for(let i = 0; i < slider.length; i++) {
  
      let el = slider[i];
      
      let swiper = el.getElementsByClassName("knifeSlider__container")[0];
      let nx = el.getElementsByClassName("knifeSlider__next")[0];
      let pr = el.getElementsByClassName("knifeSlider__prev")[0];
      let pg = el.getElementsByClassName("knifeSlider__pagination")[0];


      new Swiper(swiper, {
        slidesPerView: 4,
        spaceBetween: 30,
        // loop: true,
        navigation: {
          nextEl: nx,
          prevEl: pr
        },
        breakpoints: {
          // when window width is >= 320px
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          560: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          // when window width is >= 640px
          768: {
            spaceBetween: 4,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          1350: {
            slidesPerView: 6,
            spaceBetween: 20,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
            pagination: {
              el: false,
              clickable: true,
            },
          }
        }
      });
    }
  }
  if(initSliderMini){
    initSliderMini()
  }

  function sliderShare() {
    let slider = document.getElementsByClassName("sharesSlider");

    for(let i = 0; i < slider.length; i++) {
  
      let el = slider[i];
      
      let swiper = el.getElementsByClassName("sharesSlider__container")[0];
      let nx = el.getElementsByClassName("sharesSlider__next")[0];
      let pr = el.getElementsByClassName("sharesSlider__prev")[0];
      let pg = el.getElementsByClassName("sharesSlider__pagination")[0];


      new Swiper(swiper, {
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          300: {
            slidesPerView: 1,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          560: {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          }
        }
      });
    }
  }
  if(sliderShare){
    sliderShare()
  }

  function sliderReviews() {
    let slider = document.getElementsByClassName("reviewsBlock__slider");

    for(let i = 0; i < slider.length; i++) {
  
      let el = slider[i];
      
      let swiper = el.getElementsByClassName("reviewsBlock__container")[0];
      let nx = el.getElementsByClassName("reviewsBlock__next")[0];
      let pr = el.getElementsByClassName("reviewsBlock__prev")[0];
      let pg = el.getElementsByClassName("reviewsBlock__pagination")[0];


      new Swiper(swiper, {
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          300: {
            slidesPerView: 1,
            pagination: {
              el: pg,
              clickable: true,
            },
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          }
        }
      });
    }
  }
  if(sliderReviews){
    sliderReviews()
  }

  var videoBlockThumbs = new Swiper('.videoBlock__thumbs', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true
  });
  var videoBlockTop = new Swiper('.videoBlock__top', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: videoBlockThumbs
    },
    breakpoints: {
      300: {
        pagination: {
          el: '.videoBlock__pagination',
          clickable: true,
        },
      },
      768: {
        pagination: {
          el: '.videoBlock__pagination',
          clickable: true,
        },
      },
      1370: {
        
      }
    }
  });


  function detailedSlider() {
    let detailedThumb = document.getElementsByClassName("detailedBlock__thumbsMain");

    

    for(let i = 0; i < detailedThumb.length; i++) {
  
      let el = detailedThumb[i];

      let detailedNext = el.getElementsByClassName("swiper-button-next")[0];
      let detailedPrev = el.getElementsByClassName("swiper-button-prev")[0];

      var detailedBlockThumbs = new Swiper('.detailedBlock__thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // loop: true,
        navigation: {
          nextEl: detailedNext,
          prevEl: detailedPrev,
        },
      });
      var detailedBlockTop = new Swiper('.detailedBlock__top', {
        spaceBetween: 40,
        // loop: true,
        thumbs: {
          swiper: detailedBlockThumbs
        }
      });
    }
  }
  if(detailedSlider){
    detailedSlider()
  }

  function tableSlider() {
    let slider = document.getElementsByClassName("comparison__tableSlider");

    for(let i = 0; i < slider.length; i++) {
  
      let el = slider[i];
      
      let swiper = el.getElementsByClassName("comparison__container")[0];
      let nx = el.getElementsByClassName("comparison__next")[0];
      let pr = el.getElementsByClassName("comparison__prev")[0];


      new Swiper(swiper, {
        breakpoints: {
          // when window width is >= 320px
          300: {
            slidesPerView: 1,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          },
          630: {
            slidesPerView: 2,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          },
          1050: {
            slidesPerView: 4,
            spaceBetween: 0,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 0,
            navigation: {
              nextEl: nx,
              prevEl: pr
            },
          }
        }
      });
    }
  }
  if(tableSlider){
    tableSlider()
  }


  
 


  // Кнопка поиска
  let searchButton = document.querySelector('.search__button_mob');

  searchButton.addEventListener('click', () => {
    let parent = searchButton.parentNode;
    let phone = document.querySelector('.header__phone')
    parent.classList.toggle('active')
    phone.classList.toggle('hide')
    console.log(parent)
  })

  // Реализация кнопки бургера
  let menuBtn = document.querySelector('.menuBtn');
  let catalogBtn = document.querySelector('.header__mobCatalogTitles')
  let deleteBtn = document.querySelector('.burgerPopup__delete');
  let deleteCatalogBtn = document.querySelectorAll('.catalogPopup__delete');


  // кнопки фильтра
  let filterBtn = document.querySelector('.catalogBlock__filterAdd');
  let deleteFilter = document.querySelectorAll('.catalogBlock__delete');

  // Открытие меню в личном кабинете
  let personalBtn = document.querySelector('.personalArea__name');


  function openMenu(menuSelector){
    let menu = document.querySelector(menuSelector);
    menu.classList.toggle('active');
  }

  menuBtn.addEventListener('click', () => {
    openMenu('.burgerPopup')
  })
  deleteBtn.addEventListener('click', () => {
    openMenu('.burgerPopup')
  })
  catalogBtn.addEventListener('click', () => {
    openMenu('.catalogPopup')
  })
  if(deleteCatalogBtn){
    deleteCatalogBtn.forEach(item => {
      item.addEventListener('click', () => {
        openMenu('.catalogPopup')
      })
    })
  }

  // проверяем, есть ли кнопка фильтра
  if(filterBtn){
    filterBtn.addEventListener('click', () => {
      openMenu('.catalogBlock__sitebar')
    })
    deleteFilter.forEach(item => {
      item.addEventListener('click', () => {
        openMenu('.catalogBlock__sitebar')
      })
    })
  }

  if(personalBtn){
    personalBtn.addEventListener('click', () => {
      openMenu('.personalArea__links')
    })
  }


  // Настройка табов, должны идти по порудяку блоки и таюы
  function tab(){
    let tabItem = document.querySelectorAll('.tabCatalog__tab');
    let tabContent = document.querySelectorAll('.tabCatalog__tabContent');
    tabItem.forEach((item, i) => {
      item.addEventListener('click', () => {
        tabItem.forEach((item1, x) => {
          item1.classList.remove('active')
          tabContent[x].classList.remove('active');
        })
        item.classList.toggle('active');
        tabContent[i].classList.toggle('active');
        initSlider();
      })
    })
  }
  tab()

  // кнопка читать далее
  function moreLink(){
    let more = document.querySelector('.aboutCompany__more');
    let hide = document.querySelector('.aboutCompany__textBlock_hide');

    if(more){
      more.addEventListener('click', () => {
        let textContent = more.textContent;
        hide.classList.toggle('active');
  
        if(textContent === 'Читать дальше'){
          more.textContent = 'Скрыть';
        } else {
          more.textContent = 'Читать дальше';
        }
      })
    }
  }

  moreLink()



  // активация fancybox
  jQuery('.fancybox').fancybox()


  //  настройка input range
  jQuery(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 32,
    max: 756,
    from: 32,
    to: 756,
  });





  // кнопки + и -
  function countBtn () {
    const countBtns = document.querySelectorAll('.inputCount__btn');

    if(countBtns){
      countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const direction = btn.getAttribute('data-direction');
          const input = btn.parentNode.querySelector('.inputCount__input');
          const currentValue = +input.value;
  
          let newValue = 0;
  
          if(direction === 'plus') {
            newValue = currentValue + 1;
          } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1: 0;
          }
  
          input.value = newValue;
  
        })
  
      })
    }
  }
  countBtn()


  // Открытие характеристики и описания
  function openDesc() {
    const tab = document.querySelectorAll('.detailedBlock__aboutTitle');
    const content = document.querySelectorAll('.detailedBlock__aboutContent');
    
    if(tab){
      tab.forEach((item, i) => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
          content[i].classList.toggle('active');
        })
      })
    }
    
  }
  openDesc()


  // настойка табов профиле в моб. версии

  function openDataMob( ) {
    let btns = document.querySelectorAll('.checkoutBlock__buttonMob');
    let tabs = document.querySelectorAll('.checkoutBlock__tabContent');
    let tabsArray = Array.prototype.slice.call( tabs)
    let topBtns = document.querySelectorAll('.checkoutBlock__tab');

    if(btns){
      btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          let direction = btn.getAttribute('data-direction');
  
          let tab = btn.parentNode.parentNode;
          let index = tabsArray.indexOf(tab);
          let nextTab = tab.nextElementSibling;
          let prevTab = tab.previousElementSibling;
  
          tabs.forEach(item => {
            item.classList.remove('active')
          })
          
          if(direction === 'next'){
            nextTab.classList.add('active')
  
            topBtns[index].querySelector('.checkoutBlock__tabCircle').classList.add('true')
            topBtns[index+1].querySelector('.checkoutBlock__tabCircle').classList.add('active')
          
          }  else if (direction === 'prev' && prevTab){
            prevTab.classList.add('active')
  
            topBtns[index].querySelector('.checkoutBlock__tabCircle').classList.remove('active')
            topBtns[index-1].querySelector('.checkoutBlock__tabCircle').classList.remove('true')
          } else if (direction === 'end'){
            nextTab.classList.add('active')
  
            document.querySelector('.checkoutBlock__tabs').style.display = 'none';
            document.querySelector('.checkoutBlock__infOrder').style.display = 'none';
            document.querySelector('.checkoutBlock__title').style.display = 'none';
          }
        })
      })
    }
  }
  openDataMob()


  // серый цвет у таблицы
  function greyTable () {
    let table = document.querySelectorAll('.detailedBlock__aboutList');
    if(table){
      table.forEach(list => {
        let tableItem = list.querySelectorAll('.detailedBlock__aboutItem');
        tableItem.forEach((item, index) => {
          if(index % 2 === 0) {
            item.classList.add('detailedBlock__aboutItem_grey')
          }
        })
      })
    }
  } 
  greyTable();


  // Контролировать размер таблицы в сравнении
  function heightTable(){
    let tableItem = document.querySelectorAll('.comparison__values');

    if(tableItem) {
      for (let i = 0; i < tableItem.length; i++) {
        const options = tableItem[i].querySelectorAll('.comparison__option');
  
        let maxHeight, height = 0;
  
        for (let x = 0; x < options.length; x++) {
          maxHeight = 0;
          height = 0;
  
          for (let y = 0; y < tableItem.length; y++) {
            let options2 = tableItem[y].querySelectorAll('.comparison__option');
  
            let option = options2[x];
  
            height = option.offsetHeight;
  
            if(maxHeight < height){
              maxHeight = height;
            }
          }
  
          for (let y = 0; y < tableItem.length; y++) {
            let options2 = tableItem[y].querySelectorAll('.comparison__option');
  
            let option = options2[x];
  
            option.style.height = `${maxHeight}px`;
          }
  
          
        }
      }
    }
  } 
  heightTable()

})

