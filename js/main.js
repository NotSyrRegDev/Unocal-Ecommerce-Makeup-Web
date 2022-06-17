/* HANDLING SIDEBAR TOGGLE */
const mobileBar= document.querySelector('.mobile--bar__div');
const mobileSidebar = document.querySelector('.sidebar--mobile__div');
const closeSidebar = document.querySelector('.closing--sidebar');

mobileBar.addEventListener('click' , showSidebar);
closeSidebar.addEventListener('click' , closeingSidebar);

function showSidebar() {
    mobileSidebar.classList.add('active');
}
function closeingSidebar() {
    mobileSidebar.classList.remove('active');
}
var url = window.location.pathname;

/* HANDLING FILTER SIDEBAR */
if (url.includes('shop.html')) {
  const BoxCheckItems = document.querySelectorAll('.box--checked__shopping');
  const checkedIcons = document.querySelectorAll('.checkedIcon');
  const selectArea = document.querySelector('.selection__div--filterd');
  const selectAreaCat = document.querySelector('.categories__filter--area');
  const selectAreaOptions = document.querySelector('.options--area__filter');
  const selectAreaColors = document.querySelector('.color--area__filter');
  const selectAreaStars = document.querySelector('.stars--area__filter');
  const boxColors = document.querySelectorAll('.box--color');
  const boxStarShopping = document.querySelectorAll('.star-list');
  let showOthers = document.querySelector('.show--otherfilter');
  let droppedOthers = document.querySelector('.dropped-filter-ul');
  showOthers.addEventListener('click' , () => {
   
    droppedOthers.classList.add('active');
  
    showOthers.addEventListener('dblclick' , () => {
      droppedOthers.classList.remove('active');
    })
  })
  
  
  for (let i = 0; i < BoxCheckItems.length; i++) {
      BoxCheckItems[i].addEventListener('click', function(e) {     
              let currentBox = e.target;
              let createdCheck = document.createElement('i');
              createdCheck.classList.add('fas');
              createdCheck.classList.add('fa-check');
              createdCheck.classList.add('checkIcon');       
              currentBox.appendChild(createdCheck);
              selectArea.classList.add('active');
              let breakEl = document.createElement('br');
             let newAddedItem = currentBox.nextElementSibling;
             
             let CopyAddedItem = newAddedItem.cloneNode(true);
             CopyAddedItem.classList.add('filter-list-a')
              
  
              if (currentBox.classList.contains('cat-list') ) {
                  
                 document.querySelector('.headlien--filter__cat').classList.add('active')
                 selectAreaCat.appendChild(CopyAddedItem);
                 selectAreaCat.appendChild(breakEl);
              }
              if (currentBox.classList.contains('opt-list') ) {
                  
                 document.querySelector('.headlien--filter__options').classList.add('active')
                 selectAreaOptions.appendChild(CopyAddedItem);
                 selectAreaOptions.appendChild(breakEl);
              }
              if (currentBox.classList.contains('star-list')) {
                alert("hi")
              }
              BoxCheckItems[i].addEventListener('click' , (e) => {
                  createdCheck.remove();
                  CopyAddedItem.remove();
                  breakEl.remove();
              });
              
              
          
         
  
      });
  
    }
    for (let i = 0; i < checkedIcons.length; i++) {
      if (checkedIcons) {
          
          checkedIcons[i].addEventListener('click' , function(e) {
              if (createdCheck.classList.contains('fa-check') ) {
                          createdCheck.remove();
              }
              })
      }
    }
  
    for (let i =0; i < boxColors.length; i++) {
      boxColors[i].addEventListener('click' , (e) => {
          let currentColorBox = e.target;
          
          selectArea.classList.add('active');
      let classExist = currentColorBox.className.substring(10 , 32);
      classExist = classExist.substring(24 , 7);
  
          document.querySelector('.headlien--filter__color').classList.add('active');
          if (currentColorBox.classList.contains(`color-${classExist}`)) {
            let wrappedDiv = document.createElement('div');
            wrappedDiv.classList.add('f-sv');
              let createdBoxColor = document.createElement('div');
              let createdCloseIcon = document.createElement('i');
             // <i class="far fa-times-circle"></i>
             createdCloseIcon.classList.add('far');
             createdCloseIcon.classList.add('fa-times-circle');
             createdCloseIcon.classList.add('closeing--color__icon');
              let breakEl = document.createElement('br');
              createdBoxColor.classList.add('box--color');
            
            
              createdBoxColor.classList.add(`color-${classExist}`);
              wrappedDiv.appendChild(createdBoxColor)
              wrappedDiv.appendChild(createdCloseIcon)
              selectAreaColors.appendChild(breakEl);
              selectAreaColors.appendChild(wrappedDiv);
              
              boxColors[i].addEventListener('click' , e => {
                wrappedDiv.remove();
                breakEl.remove();
  
              })
        
  
          createdCloseIcon.addEventListener('click' , (e) => {
            wrappedDiv.remove();
            breakEl.remove();
          })
             
  
          }
  
      })
    }
  
    for (let i =0; i <boxStarShopping.length; i++) {
      boxStarShopping[i].addEventListener('click' , (e) => {
         let starElm = e.target;
         selectArea.classList.add('active');
         document.querySelector('.headlien--filter__star').classList.add('active');
         
         if (starElm.classList.contains(`sh_star-${i +1}`)) {  
       
            starElm.classList.add('active');   
            let copyedStar = starElm.cloneNode();
            let limitStar = selectAreaStars.childNodes.length;
            if (starElm.classList.contains(`sh_star-1`) && limitStar < 8) {
              selectAreaStars.appendChild(copyedStar);
            }
  
            if (starElm.classList.contains(`sh_star-5`)) {
            for (let inde5 = 1; inde5 < 6; inde5++) {activateStar(inde5); }}
  
            if (starElm.classList.contains(`sh_star-4`)) {
            for (let inde5 = 1; inde5 < 5; inde5++) {activateStar(inde5); }}
  
            if (starElm.classList.contains(`sh_star-3`)) {
            for (let inde5 = 1; inde5 < 4; inde5++) {activateStar(inde5); }}
  
            if (starElm.classList.contains(`sh_star-2`)) {
            for (let inde5 = 1; inde5 < 3; inde5++) {activateStar(inde5); }}
            
            function activateStar(ind) {
              document.querySelector(`.sh_star-${ind}`).classList.add('active');
              let createdStar = document.createElement('i');
              createdStar.classList.add('fas')
              createdStar.classList.add('fa-star')
              createdStar.classList.add('shopping--star__single')
              createdStar.classList.add('active')
              if (limitStar < 8) {
                selectAreaStars.appendChild(createdStar);
              }
              createdStar.addEventListener('click' , (e) => {
                e.target.remove();
              })
  
            }
  
            
          
            boxStarShopping[i].addEventListener('dblclick' , (e) => {
              starElm.classList.remove('active');           
             })
         }      
      })
     
    }
  
  let formMinPrice = document.querySelector('.min-price__form');
  let submitMinPrice = document.querySelector('.submit-min__price');
    let minPriceField = document.querySelector('.min--price__filter');
    let MinPriceInput = document.querySelector('.input--min__price');
  formMinPrice.addEventListener('submit' , function(e) {
    e.preventDefault();
      document.querySelector('.headlien--filter__price').classList.add('active')
      selectArea.classList.add('active');
    
      let priceVal = MinPriceInput.value ;
      let convertedPriceVal  = parseInt(priceVal);
      if (typeof convertedPriceVal === 'number') {
          minPriceField.innerHTML = `Min Price: ${priceVal}`;
      } else {
          alert("Only Numbers Are Accepted")
         // location.reload();
      }
     
  
  });
  
  let formMaxPrice = document.querySelector('.max-price__form');
  let submitMaxPrice = document.querySelector('.submit-max__price');
    let maxPriceField = document.querySelector('.max--price__filter');
    let MaxPriceInput = document.querySelector('.input--max__price');
    formMaxPrice.addEventListener('submit' , function(e) {
      e.preventDefault();
      document.querySelector('.headlien--filter__price').classList.add('active')
      selectArea.classList.add('active');
     
      let priceVal = MaxPriceInput.value ;
      let convertedPriceVal  = parseInt(priceVal);
      if (typeof convertedPriceVal === 'number') {
          maxPriceField.innerHTML = `Max Price: ${priceVal}`;
      } else {
          alert("Only Numbers Are Accepted")
         // location.reload();
      }
     
  
  })
}


/* HANDILING CANTEGORY CHOOSING */
if (url.includes('categories.html')) {
  const mainCategoryDiv = document.querySelector('.main--category__div--selection');
  const categoriesTitles = document.querySelectorAll('.headline--main__categ');
  const catFieldArea = document.querySelector('.category__tit--selected');
  for (let d = 0; d < categoriesTitles.length; d++) {
   
    categoriesTitles[d].addEventListener('click' , e => {
      catFieldArea.textContent = e.target.innerHTML;
      mainCategoryDiv.classList.add('active');
     
    })
  }
  
/*  HANDLING POPUP*/
let showPopupCat = document.querySelectorAll('.show-popup__icon');
let mainPopupCategories = document.querySelector('.main__popup--div__categories');
let closeingPopup = document.querySelectorAll('.closing--popup');
 for (let y = 0; y < showPopupCat.length; y++) {
  showPopupCat[y].addEventListener('click' , () => {
    mainPopupCategories.classList.add('active')
   })
 }
 for (let t = 0; t < closeingPopup.length; t++) {
  closeingPopup[t].addEventListener('click' , () => {
    mainPopupCategories.classList.remove('active')
   })
 }


 /*  HANDLING CGANGIN IMAGE ON POPUP*/
 let mainImagePopup = document.querySelector('.img--porduct__gallery--popup');
 let restPopupImages = document.querySelectorAll('.single--gallery__small--popup');
 let copyiesImagePopup = mainImagePopup.cloneNode();
 for (let r = 0; r < restPopupImages.length; r++) {
   restPopupImages[r].addEventListener('click' , (e) => {

    mainImagePopup.src =  e.target.src;
 
   
   })
 }
}



