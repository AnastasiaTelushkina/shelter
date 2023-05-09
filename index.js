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

function carouselSliderHandler() {
  let activePetsCardsData = [];
  let petsCardsLeftToRender = [];
  let NumberOfCardsForSlider = checkWindowWidth();

  const carousel = document.querySelector('#cardsWrapper');
  const carouselLeftArrow= document.querySelector('#carouselLeftArrow');
  const leftCarouselItem = document.querySelector('#leftCarouselItem');
  const activeCarouselItem = document.querySelector('#activeCarouselItem');
  const rightCarouselItem = document.querySelector('#rightCarouselItem');
  const carouselRightArrow= document.querySelector('#carouselRightArrow');

  function checkWindowWidth() {

      if (window.innerWidth >= 1220) {
          return 3;
      } else if (window.innerWidth < 1220 && window.innerWidth >= 768) {
          return 2;
      } else {
          return 1;
      } 
  }

  function checkCardRerender() {
      const newCardsNumber = checkWindowWidth();
      if (newCardsNumber !== NumberOfCardsForSlider) {
          NumberOfCardsForSlider = newCardsNumber;
          activeCarouselItem.innerHTML = '';
          leftCarouselItem.innerHTML = '';
          rightCarouselItem.innerHTML = '';
          renderCardsForSlider(NumberOfCardsForSlider, petsData, leftCarouselItem)
          renderCardsForSlider(NumberOfCardsForSlider, petsData, rightCarouselItem)
          renderCardsForSlider(NumberOfCardsForSlider, petsData, activeCarouselItem)
      }  
  }

  function prepareCardForRender(index, arrayOfPets) {

      const card = document.createElement('div');
      card.classList.add('our__friends__card');
      card.setAttribute('identifier', arrayOfPets[index].id);

      const image = document.createElement('img');
      image.setAttribute('src', arrayOfPets[index].img);
      image.setAttribute('alt', arrayOfPets[index].description.slice(0, 30))
      image.classList.add("our__friends__card__img");

      const title = document.createElement('h5');
      title.classList.add("our__friends__card__title");
      title.textContent = arrayOfPets[index].name;

      const moreButton = document.createElement('a');
      moreButton.className = "btn btn_light our__friends__btn__more";
      moreButton.textContent = 'Learn more'

      card.append(image)
      card.append(title)
      card.append(moreButton)

      return card
  }

  function renderCardsForSlider(numberOfNeededCards, arrayOfCards, elementToAppendCards) {
      activePetsCardsData = [];
      petsCardsLeftToRender = [];

      const randomized = [...arrayOfCards].sort( () => 0.5 - Math.random())

      for (let i = 0; i < numberOfNeededCards; i++) {

          const card = prepareCardForRender(i, randomized)
          activePetsCardsData.push(randomized[i])

          elementToAppendCards.append(card)
      }
      petsCardsLeftToRender = petsData.filter( pet => 
      activePetsCardsData.every( (element) =>  pet.id !== element.id))

  }
  function handleLeftArrowClick() {
    leftCarouselItem.innerHTML = ''
    renderCardsForSlider(NumberOfCardsForSlider, petsCardsLeftToRender, leftCarouselItem)
    carouselLeftArrow.removeEventListener('click', handleLeftArrowClick)
    carouselRightArrow.removeEventListener('click', handleRightArrowClick)
    setTimeout(()=>{carousel.classList.add("transition-left")}, 100);
  }
  function handleRightArrowClick() {
    rightCarouselItem.innerHTML = ''
    renderCardsForSlider(NumberOfCardsForSlider, petsCardsLeftToRender, rightCarouselItem)
    carouselLeftArrow.removeEventListener('click', handleLeftArrowClick)
    carouselRightArrow.removeEventListener('click', handleRightArrowClick)
    setTimeout(()=>{carousel.classList.add("transition-right")}, 100);
  }

  
  window.addEventListener("resize", checkCardRerender)
  carouselLeftArrow.addEventListener('click', handleLeftArrowClick)
  carouselRightArrow.addEventListener('click', handleRightArrowClick)
  carousel.addEventListener("animationend", (animationEvent) => {

      if (animationEvent.animationName === "move-left") {
        carousel.classList.remove("transition-left");
        activeCarouselItem.innerHTML = leftCarouselItem.innerHTML;
      } else {
        carousel.classList.remove("transition-right");
        activeCarouselItem.innerHTML = rightCarouselItem.innerHTML;
      }
      carouselLeftArrow.addEventListener('click', handleLeftArrowClick)
      carouselRightArrow.addEventListener('click', handleRightArrowClick)
  })

 
  renderCardsForSlider(NumberOfCardsForSlider, petsData, leftCarouselItem)
  renderCardsForSlider(NumberOfCardsForSlider, petsData, rightCarouselItem)
  renderCardsForSlider(NumberOfCardsForSlider, petsData, activeCarouselItem)
}
carouselSliderHandler()

function modalWindowHandler() {
  const modalWindow = document.querySelector('#modalWindow');
  const modalBodyTemplate = document.querySelector('#modalWindowTemplate');
  const carousel = document.querySelector('#cardsWrapper');

  carousel.addEventListener('click', (e) => handleCarouselClick(e)) 

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

function burgerHandler() {

  const header = document.querySelector('.header__container')
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

  header.addEventListener('click', handleBurgerIconClick)

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
}
burgerHandler()
 