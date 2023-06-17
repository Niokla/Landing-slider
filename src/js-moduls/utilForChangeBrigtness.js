import {dotsSpan, articlesUnoderedList, imgArr, articleArr} from './initialData.js';
import {changeImageAndRelativeContent} from './utilForChangeImgAndContent.js'

let clickedIndex = 0;//Индекс меняется по нажатию на точку или на ссылку и идёт на импорт
function changeBrightnessDotsAndArtikles(index) {
    changeImageAndRelativeContent(index)
    for (let i = 0; i <= 2; i++) {// так как кружков - 3шт , то мы назначим
        i !== index //выбранному(нажатому) из 3х ссылку на белый - яркий цвет,
        ? imgArr[i].src = './icon/dimPoint.svg'// а на остальные два - серый(тусклый)
        : imgArr[i].src = './icon/brightPoint.svg'; 
        //так как ссылок - 3шт
        i !== index //выбранной(нажатой) из 3х #E3B873 цвет, а двум оставшимся
        ? articleArr[i].style.color = 'rgba(255, 255, 255, 0.3)'//цвет по умолчанию. 
        : articleArr[i].style.color = '#E3B873' // то есть серый
    }
}

dotsSpan.addEventListener('click', (evt)=>{
    clickedIndex = imgArr.indexOf(evt.target)//ищет индекс нажатого кружка
    changeBrightnessDotsAndArtikles(clickedIndex)
})
articlesUnoderedList.addEventListener('click', (evt)=>{
    evt.preventDefault();// не даём странице перезагружаться по нажатию на ссылку
    clickedIndex = articleArr.indexOf(evt.target)//ищет индекс нажатой ссылки
    changeBrightnessDotsAndArtikles(clickedIndex)
})

export {changeBrightnessDotsAndArtikles, clickedIndex}