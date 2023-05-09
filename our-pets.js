const petsData = [
    {
      "id": 0,
      "name": "Jennifer",
      "img": "img/jennifer.png",
      "imgLarge": "img/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 1,
      "name": "Sophia",
      "img": "img/sophia.png",
      "imgLarge": "img/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 2,
      "name": "Woody",
      "img": "img/woody.png",
      "imgLarge": "img/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": 3,
      "name": "Scarlett",
      "img": "./img/scarlett.png",
      "imgLarge": "img/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 4,
      "name": "Katrine",
      "img": "./img/katrine.png",
      "imgLarge": "img/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 5,
      "name": "Timmy",
      "img": "./img/timmy.png",
      "imgLarge": "img/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": 6,  
      "name": "Freddie",
      "img": "./img/freddie.png",
      "imgLarge": "img/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 7,
      "name": "Charly",
      "img": "./img/charly.png",
      "imgLarge": "img/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]
  
  function burgerHandler() {
  
    const header = document.querySelector('.header__background__container')
    const burgerIcon = document.querySelector('#burgerIcon');
    const navMenuWrapper = document.querySelector('#navMenuWrapper');
    const navMenu = document.querySelector('#navMenu');
    const body = document.querySelector('body');
    const headerOverlay = document.querySelector('.header__overlay')
  
    const handleBurgerIconClick = (e) => {
      if (e.target.closest('[data-burger="clickable"]') && !burgerIcon.classList.contains('header__burger__icon_active')) {
        openMenu()
      } else if (e.target.closest('[data-burger="clickable"]') 
              || e.target.closest('a.nav__link')
              || e.target.closest('.header__overlay_visible')){
        closeMenu()
      }
    }
  
    function openMenu() {
      const scrollBarWidth = window.innerWidth - document.body.offsetWidth + 'px';
  
      document.body.classList.add('scroll_blocked')
      document.body.style.paddingRight = scrollBarWidth;
      headerOverlay.classList.add('header__overlay_visible')
      burgerIcon.classList.add('header__burger__icon_active')
      navMenuWrapper.classList.add('nav__menu__wrapper_visible')
      navMenu.classList.add('nav__menu_visible')
    }
  
    function closeMenu() {
      body.classList.remove('scroll_blocked')
      body.style.paddingRight = 0;
      headerOverlay.classList.remove('header__overlay_visible')
      burgerIcon.classList.remove('header__burger__icon_active')
      navMenu.classList.remove('nav__menu_visible')
      navMenuWrapper.classList.remove('nav__menu__wrapper_visible')
    }
  
    header.addEventListener('click', handleBurgerIconClick)
  }
  burgerHandler()
  
  function paginationHandler() {
    const arrayOfCards = prepareArrayOfCards(petsData) 
    let numberOfCardsForSlider = checkWindowWidthForCardsNumber();
    let currentSlideNumber = 1;
    let maximumSlideNumber = calcMaxSlideNumber()
  
    const sliderNavContainer = document.querySelector('#sliderNavContainer');
    const sliderStart = document.querySelector('#sliderStart');
    const sliderLeft = document.querySelector('#sliderLeft');
    const sliderNumber = document.querySelector('#sliderNumber');
    const sliderRight = document.querySelector('#sliderRight');
    const sliderEnd = document.querySelector('#sliderEnd');
    const cardsContainer = document.querySelector('#cardsContainer');
  
    function prepareArrayOfCards(initArr) {
        let outputArr = [];
        
        for(let i = 0; i < 6; i++) {
            const fisrtPart = initArr.slice(0, 3).sort(() => {return 0.5 - Math.random()});
            const secondPart = initArr.slice(3, 6).sort(() => {return 0.5 - Math.random()});
            const thirdPart = initArr.slice(6).sort(() => {return 0.5 - Math.random()});
            const combined = [...fisrtPart, ...secondPart, ...thirdPart]
            outputArr = [...outputArr, combined.map(item => item['id'])]
            
        }
        return outputArr.flat()
    }
  
    function checkWindowWidthForCardsNumber() {
  
        if (window.innerWidth >= 1220) {
            return 8;
        } else if (window.innerWidth < 1220 && window.innerWidth >= 768) {
            return 6;
        } else {
            return 3;
        } 
    }
  
    function checkCardRerender() {
        const newCardsNumber = checkWindowWidthForCardsNumber();
        if (newCardsNumber !== numberOfCardsForSlider) {
            numberOfCardsForSlider = newCardsNumber;
            maximumSlideNumber = calcMaxSlideNumber()
            if (currentSlideNumber > maximumSlideNumber) {
              currentSlideNumber = 1;
              sliderNumber.textContent = currentSlideNumber;
            }
            checkButtonDisabling()
            renderCardsForSlider(numberOfCardsForSlider)
        }  
    }
  
    function prepareCardForRender(identifier) {
  
        const neededPetIndex = petsData.findIndex(pet => pet.id === identifier);
  
        if (neededPetIndex >= 0) {
          const card = document.createElement('div');
          card.classList.add('our__friends__card');
          card.setAttribute('identifier', petsData[neededPetIndex].id);
  
          const image = document.createElement('img');
          image.setAttribute('src', petsData[neededPetIndex].img);
          image.setAttribute('alt', petsData[neededPetIndex].description.slice(0, 30))
          image.classList.add("our__friends__card__img");
  
          const title = document.createElement('h5');
          title.classList.add("our__friends__card__title");
          title.textContent = petsData[neededPetIndex].name;
  
          const moreButton = document.createElement('a');
          moreButton.className = "btn btn_light our__friends__btn__more";
          moreButton.textContent = 'Learn more'
  
          card.append(image)
          card.append(title)
          card.append(moreButton)
  
          return card
        }
    }
  
    function renderCardsForSlider() {
  
      let cardsCollection =  document.querySelectorAll('.our__friends__card');
  
      if (cardsCollection.length > 0) {
        cardsCollection.forEach( card => card.classList.remove('our__friends__card_visible') )
      }
  
      setTimeout(() => {
        cardsContainer.innerHTML = '';
  
        const cardsEnd = numberOfCardsForSlider * currentSlideNumber;
        const cardsStart = cardsEnd - numberOfCardsForSlider;
  
        for (let i = cardsStart; i < cardsEnd; i++) {
            const card = prepareCardForRender(arrayOfCards[i])
            cardsContainer.append(card)
        setTimeout(() => {
          cardsCollection = document.querySelectorAll('.our__friends__card');
  
          if (cardsCollection.length > 0) {
            cardsCollection.forEach( card => card.classList.add('our__friends__card_visible'))
          }
        }, 100)
      }
      }, 500)
    }
  
    function calcMaxSlideNumber() {
      return arrayOfCards.length / numberOfCardsForSlider 
    }
  
    const handleNavContainerClick = (e) => {
      const element = e.target;
  
      switch(element) {
        case sliderStart:
          currentSlideNumber = 1;
          rerenderCards()
          break
        case sliderLeft:
          currentSlideNumber--;
          rerenderCards()
          break
        case sliderRight:
          currentSlideNumber++;
          rerenderCards()
          break
        case sliderEnd:
          currentSlideNumber = maximumSlideNumber;
          rerenderCards()
          break
        default:
          break
      }
  
      function rerenderCards() {
        sliderNumber.textContent = currentSlideNumber;
        checkButtonDisabling()
        renderCardsForSlider()
      }
    }
    function checkButtonDisabling() {
      if (currentSlideNumber === 1) {
        sliderStart.setAttribute('disabled', '')
        sliderLeft.setAttribute('disabled', '')
        sliderRight.removeAttribute('disabled')
        sliderEnd.removeAttribute('disabled')
      }
      if (currentSlideNumber > 1 && currentSlideNumber < maximumSlideNumber) {
        sliderStart.removeAttribute('disabled')
        sliderLeft.removeAttribute('disabled')
        sliderRight.removeAttribute('disabled')
        sliderEnd.removeAttribute('disabled')
      }
      if (currentSlideNumber === maximumSlideNumber) {
        sliderStart.removeAttribute('disabled')
        sliderLeft.removeAttribute('disabled')
        sliderRight.setAttribute('disabled', '')
        sliderEnd.setAttribute('disabled', '')
      }
    }
  
    sliderNavContainer.addEventListener('click', handleNavContainerClick)
    window.addEventListener("resize", checkCardRerender)
    renderCardsForSlider(numberOfCardsForSlider)
  }
  paginationHandler()
  
  function modalWindowHandler() {
    const modalWindow = document.querySelector('#modalWindow');
    const modalBodyTemplate = document.querySelector('#modalWindowTemplate');
    const slider = document.querySelector('#cardsContainer')
  
    slider.addEventListener('click', (e) => handleCarouselClick(e)) 
  
    function handleCarouselClick(e) {
      let target = e.target.closest('div.our__friends__card');
      
      if (target) {
  
          openModalWindow();
          const closeBtn = prepareModalLayoutAndReturnCloseBtn(target.getAttribute('identifier'))
          const modalWindowClick = (e) => {
            if (e.target === closeBtn || !e.target.closest('.modal__body')) {
              closeModalWindow()
              modalWindow.removeEventListener('click', modalWindowClick)
            }
          }
          modalWindow.addEventListener('click', modalWindowClick)
      }
    }
    function openModalWindow() {
      const scrollBarWidth = window.innerWidth - document.body.offsetWidth + 'px';
      modalWindow.classList.add('modal__window_visible');
      document.body.classList.add('scroll_blocked')
      document.body.style.paddingRight = scrollBarWidth;
    }
    function closeModalWindow() {
      modalWindow.classList.remove('modal__window_visible'); 
      document.body.classList.remove('scroll_blocked');
      document.body.style.paddingRight = 0
      modalWindow.innerHTML = '';
    }
    function prepareModalLayoutAndReturnCloseBtn(identifier) {
  
      const clone = modalBodyTemplate.content.cloneNode(true);
      const params = ["age","inoculations","diseases","parasites"]
  
      const body = clone.querySelector('.modal__body')
      const closeBtn = clone.querySelector('.modal__close_btn')
      const image = clone.querySelector('.modal__img')
      const title = clone.querySelector('.modal__title')
      const subtitle = clone.querySelector('.modal__subtitle')
      const paragraph = clone.querySelector('.modal__paragraph')
  
      image.setAttribute('src', petsData[identifier].imgLarge)
      title.textContent = petsData[identifier].name;
      subtitle.textContent = `${petsData[identifier].type} - ${petsData[identifier].breed}`;
      paragraph.textContent = petsData[identifier].description; 
  
      clone.querySelectorAll('.modal__list__item').forEach((item, i) => {
  
        const text = Array.isArray(petsData[identifier][params[i]]) ? 
          petsData[identifier][params[i]].join(', ') : petsData[identifier][params[i]]
  
        item.innerHTML += text 
      })
  
      modalWindow.append(clone)
  
      setTimeout(() =>{body.classList.add('modal__body_appeared')}, 100)
  
      return closeBtn
    }
  }
  modalWindowHandler()
  
  
  
  