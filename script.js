// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.


// const getFirstLink = () => {
//     return document.querySelector("a").innerText
// }
// console.log(getFirstLink())


// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.


// const getLinks = (arr) => {
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]  
//     }
//     return newArr
// }
// console.log(getLinks(document.querySelectorAll("a")))

// const getLinks = () => {
//     let arr =  document.querySelectorAll("a")
//     let newArr = []
//         for(let i = 0; i < arr.length; i++){
//             newArr = [...newArr,arr[i].innerText]
//         }
//         return newArr
    
// }
// console.log(getLinks())



// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// const getText = (arr) => {
//     let newArr = []
//     for(i=0 ; i < arr.length; i ++){
//         newArr = [...newArr,arr[i].innerText]
//     }
//     return newArr
// }
// console.log(getText(document.querySelectorAll(".nav__link__item")))

// const getText = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link__item"))
//      return arr.map((el) =>{
//         return el.innerText
//     })
    
   
// }
// console.log(getText())

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

// const getArr = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link__item"))
//     return arr.map((el) => {
//         return el.className
//     })
// }
// console.log(getArr())
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

// const getArr = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link "))
//     return arr.map((el) =>{
//         return el.dataset.link
//     })
// }
// console.log(getArr())
// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, 
// по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса.
//  И у этого же элемента должен быть класс с текстовым номером индекса.

// const getNumber = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let secondClass = el.className.split(" ")[1]
//         let text = el.innerText
//         if(secondClass === text){
//             return el
//         }else {
//             return el.innerText
//         }

//     })
// }
// console.log(getNumber())





// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
/* <a href="#" class="nav__link zero" data-link="0"> 0 zero</a> */
 
//  const getNumber = () => {
//         let arr = Array.from(document.querySelectorAll(".nav__link"))
//         return arr.map((el) => {
//             let str = el.className.split(" ")[1]
//             let text = el.innerText
//             let dataLink = el.dataset.link
//             if(str === text){
//                 el.innderText = dataLink + el.innerText
//                 return el
//             }else {
//                 el.innderText = dataLink + str
//                 return el
//             }
    
//         })
//     }
//     console.log(getNumber())

// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()
// let arr = document.querySelectorAll(".nav__link")
// arr.forEach((el) => {  
// let str = el.className.split(' ')[1]
// let text = el.innerText
// if(str !== text ){
//     el.remove()
// }
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

// const createElement = () => {
//     let appenDiv = document.querySelector("#append-div")
//     let newElement = document.createElement("div")
//     newElement.id = "#just-text"
//     newElement.innerText = "hello"
//     appenDiv.appendChild(newElement)
// return appenDiv
// }
// console.log(createElement())

// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div
//  у ul элемента должен быть айди #list 
//  Внутри ul элемента находится 10 тегов li 
//  с текстом от Child 1,...., Child 10

// const createElement = () => {
//     let appenDiv = document.querySelector("#append-div")
//     let newElement = document.createElement("ul")
//     newElement.id = "#list"
//     appenDiv.appendChild(newElement)
//     for (let i = 0 ; i <= 10 ; i ++){
//         let newList = document.createElement("li")
//         newElement.appendChild(newList)
//         newList.innerText = `Child ${i}`
//     }
//     return appenDiv
    

// }
// console.log(createElement())
