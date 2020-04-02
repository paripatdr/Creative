    let currentIndex = 0 //start Index

    //Image slide Left,Right
    function slideImage(imageElem){
      imageElem.scrollIntoView({behavior: 'smooth'})
    }
    // DisplayImage 
    function displayImage(imageElems, newIndex){
      const lastIndex = imageElems.length - 1
      if(newIndex < 0){
        currentIndex = lastIndex
      }else if (newIndex > lastIndex){
        currentIndex = 0
      }else{
        currentIndex = newIndex
      }
      slideImage(imageElems[currentIndex])
    }

    //OnScroll Up Down
    function onScroll() {
      const sectionElems = Array.from(document.querySelectorAll('section'));
      sectionElems.forEach(sectionElem => {
        const imgElem = sectionElem.querySelector('img');
        const textElem = sectionElem.querySelector('.text');
        const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;
        const scrollPosition = window.pageYOffset;
        if (scrollPosition >= revealPosition) {
          textElem.classList.add('reveal');
        }
      });
    }

   //*-----------------------"Main------------------------------------*/
    function run() {
      const imageElems = document.querySelectorAll('.carousel img')
      const previousBtnElem = document.querySelector('.previous')
      const nextBtnElem = document.querySelector('.next')

      previousBtnElem.addEventListener('click', () => displayImage(imageElems, currentIndex - 1 ))
      nextBtnElem.addEventListener('click', () => displayImage(imageElems, currentIndex + 1))
      document.addEventListener('scroll', onScroll)
    }
    run()


