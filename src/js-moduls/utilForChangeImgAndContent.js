import {images, sectionsArr, divImgChair } from './initialData.js';
function changeImageAndRelativeContent(index) {//Функция при клике на точку или статью
    let currentObj = images[index];//ищет нужный обьект по индексу после нажатия
    sectionsArr[0].textContent = currentObj.city //Добавляем в секции текст , полученный из
    sectionsArr[1].textContent = currentObj.apartamentArea    // нужного обьекта
    sectionsArr[2].textContent = currentObj.repairTime    
    //добавляем в div картинки нужную ссылку и альтерн.текст
    divImgChair.style.backgroundImage = `url(${images[index].url})`;
    divImgChair.setAttribute('alt', `${images[index].alt}`);
    }

export {changeImageAndRelativeContent}





























// images.forEach((elem,index) => {
//     let createdDiv = document.createElement('div');//Новый div
//     createdDiv.classList.add('img-chair');//добавили div класс
//     console.log(elem.url)
//     createdDiv.style.backgroundImage = `url(${elem.url})`;//добавляем ссылку на картинку
//     divClassCamera.before(createdDiv);
//     // index !== 0 ? createdDiv.setAttribute('hidden') : createdDiv.setAttribute('visible')
//     createdDiv.dataset.number = `${index}`//присвоил номера
// })