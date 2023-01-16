// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.


// const getFirstLink = () => {
//     return document.querySelector("a").innerText
// }
// console.log(getFirstLink())


// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.


// const getArr = (arr) => {
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]  
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll("a")))

// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// const getArr = (arr) => {
//     let newArr = []
//     for(i=0 ; i < arr.length; i ++){
//         newArr = [...newArr,arr[i].innerText]
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll(".nav__link__item")))


// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item
// const getArr = (arr) => {
//     let newArr = []
//     for(i=0 ; i < arr.length; i ++){
//         newArr = [...newArr,arr[i].innerText + "class"]
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll(".nav__link__item")))
// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// const getArr = (arr) => {
//     let newArr = []
//     for(i = 0; i < arr.length; i++){ 
//         newArr = [...newArr, arr[i].dataset.link]
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll(".nav__link")))
// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, 
// по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса.
//  И у этого же элемента должен быть класс с текстовым номером индекса.

// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
/* <a href="#" class="nav__link zero" data-link="0"> 0 zero</a> */
// let arr = 
// Array.from(arr).forEach((el) => {
//     console.dir(el.innerText = el.innerText + '0')
// })

// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// bottom-nav.forEach((element) => {  
// console.dir(element.remove(childElement))
// })  





// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// let box = document.querySelector('#append-div')
// let box2 = document.createElement("div")
// box.appendChild(box2)
// box2.id = 'just-text'
// let desc = document.createElement('p')
// box.appendChild(desc) 
// desc.innerText = "Hello"
// console.log(document.body)
