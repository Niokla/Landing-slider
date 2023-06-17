import {images, leftArrow, rightArrow, articleArr, imgArr} from './initialData.js';
import {changeBrightnessDotsAndArtikles, clickedIndex} from './utilForChangeBrigtness.js';
import {changeImageAndRelativeContent} from './utilForChangeImgAndContent.js';

function initSlider() {
    if (!images || !images.length) return;
    articleArr[0].style.color = '#E3B873';
    imgArr[0].src = './icon/brightPoint.svg';
    
    let CURRENT_INDEX = 0; //Переменная для реакции на изменение индекса при нажатии стрелок
    let checkerChanging = clickedIndex//Переменная для слежения за изменением clickedIndex
   
    function changeImageByArrowClick(index) {
        changeImageAndRelativeContent(index);
        changeBrightnessDotsAndArtikles(index);
    };
    function checkIndexChanging() {//Функция следит за мутацией clickedIndex при нажатии 
        if(checkerChanging!==clickedIndex){//точек и ссылок и сравнивающая приходящие значения с теми которые до этого были присвоены в checkerChanging
            CURRENT_INDEX = clickedIndex
            checkerChanging = clickedIndex
        } 
    }
    leftArrow.addEventListener('click', (evt)=>{
        evt.preventDefault()
        checkIndexChanging() 
        if(CURRENT_INDEX === 0) {    
            CURRENT_INDEX = images.length - 1;
        }else{
            CURRENT_INDEX --
        }
        changeImageByArrowClick(CURRENT_INDEX);
    })
    rightArrow.addEventListener('click', (evt)=>{
        evt.preventDefault()
        checkIndexChanging()
        if(CURRENT_INDEX === images.length - 1) {
            CURRENT_INDEX = 0;
        }else{
            CURRENT_INDEX ++
        }
        changeImageByArrowClick(CURRENT_INDEX );
    })
}

export {initSlider}
