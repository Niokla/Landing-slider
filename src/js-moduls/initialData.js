const images = [
    {
        url:'./images/chairs.png',
        alt:'Rostov-on-Don, Admiral',
        city: 'Rostov-on-Don LCD admiral',
        apartamentArea: '81 m2',
        repairTime: '3.5 months'
    },
    {
        url:'./images/2chairs-in-light-room.png',
        alt:'Sochi Thieves',
        city: 'Sochi Thieves',
        apartamentArea: '105 m2',
        repairTime: '4 months'
    },
    {
        url:'./images/big-tv-set.png',
        alt:'Rostov-on-Don Patriotic',
        city: 'Rostov-on-Don Patriotic',
        apartamentArea: '93 m2',
        repairTime: '3 months'
    }
];
// Найдём стрелки
const leftArrow = document.querySelector('img[alt="left-vector"]');
const rightArrow = document.querySelector('img[alt="right-vector"]');
//Найдём div , в котором будут менятся картинка
const divImgChair = document.querySelector('.img-chair');// div c url картинки
//Найдём span , в котором лежат кружки выбора
const dotsSpan = document.querySelector('.dots');//span с точками
//Найдём ul , в котором лежат ссылки выбора
const articlesUnoderedList = document.querySelector('.list');// ul с ссылками
const informBlocks = document.querySelector('.four-positions');// div с блоками инфо по фото
const sectionsArr = Array.from(informBlocks.querySelectorAll('section'));// массив section c инфо по фото
const imgArr = Array.from(dotsSpan.children);//массив с img в dotSpan
const articleArr = Array.from(articlesUnoderedList.querySelectorAll('a'));//получаем массив из обьекта
export {images, leftArrow, rightArrow, divImgChair, dotsSpan, articlesUnoderedList, informBlocks, sectionsArr, imgArr, articleArr}