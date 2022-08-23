// console.log('Hello world')

// Query Selector
// console.log( document.querySelector('.container') )

// Grab an element by its class name, save it to a variable
const container = document.querySelector('.container')
// Log the variable that holds that element
// console.log(container)


// Grab an element by its TAG name
const li = document.querySelector('li')
// console.log(li)


// Grab an element by its ID
const content = document.querySelector('#content')
// console.log(content)

// Query Selector All()
// Grab all the elements w the class of "product"
const products = document.querySelectorAll('.product')
// Logging a single element inside of the NodeList -- behaves like an array would when indexing
// console.log(products[3])

// Iterating over products
// for (const product of products) {
//     console.log(product.textContent)
// }


// Grab all the elements that are 'input' tags
const inputs = document.querySelectorAll('input')
// console.log(inputs)


const divs = document.querySelectorAll('div')
// console.log(divs)


const list = document.querySelectorAll('li')
// console.log(list)

list.forEach((i, index) => {
    // console.log(i)
    
    // innerHTML will show EVERYTHING inside of the tag, including any nested tags
    // console.log(i.innerHTML)

    // innerText && textContent do the SAME thing
    // Show ONLY the TEXT inside of each tag
    // console.log(i.innerText)
    // console.log(i.textContent)

    // Removing inside of a forEach
    // Not optimal way to do so, you can remove the parent when removing every element inside of a tag, or you can target the element you'd like to remove specifically
    // if(index === 1){
    //     i.remove()
    // }
})


// Remove() - 
const aside = document.querySelector('aside li')
// console.log(aside)
// aside.remove()



const group = document.querySelectorAll('.group')

//created li element 
const bagsProductLi = document.createElement("li");
bagsProductLi.textContent = "Bags"
bagsProductLi.setAttribute("class", "product")
bagsProductLi.textContent += " & Wallets"

//grabbed the parent element to our new li
const orderedList = document.querySelector("ol")

//after- places element after the element calling the method
//before - places element before the el calling the method 
//prepend - adds el as first child to parent el
//append - adds el as the last child to parent el 

// added the bags li to the bottom of our ol
// when we use append and prepend the element is added as a child
orderedList.append(bagsProductLi);

//when we use before and after the element is added as a sibling to the parent
// orderedList.before(bagsProductLi)

// create header
// child of div (.container)
// need to create h1 - child of header
// create nav el
// create nav - child of header 
// create the ul
// nav is parent to the ul
// create li as child of ul
// create a tag - child of li 
// create class (attribute)

const header = document.createElement("header");
// const divContainer = document.querySelector("div.container")
// container.prepend(header)

const headerH1 = document.createElement("h1");
header.append(headerH1)
headerH1.textContent = "DOM MANIPULATION"

const nav = document.createElement("nav")
// console.log(nav)
// header.append(nav)
headerH1.after(nav)

const ul = document.createElement("ul");
nav.append(ul)

// store our text values in an array
const navValues = ["Home", "About", "Contact", "Reviews"]

//since the li and a tags are fairly similar we can use a for loop for dynamic coding
for(let i = 0; i < 4; i++){
    const li = document.createElement("li")
   ul.append(li)
   const anchor = document.createElement("a")
   anchor.setAttribute("href", "#")

   li.append(anchor)

   //we can loop through our array to add the appropriate text
   anchor.textContent = navValues[i]
}

bagsProductLi.classList.add("group");
// bagsProductLi.classList.remove("group");

//toggle will add the class if the element does not have it or remove the tag if it already exists
// bagsProductLi.classList.toggle("group")



const h1 = document.querySelector('h1')
// console.log(h1)

const reviews = document.querySelector('#reviews')
// const reviews = document.getElementById('reviews')
// console.log(reviews)

// h1.textContent = "Manipulating the DOM"

// Updating the style of an element using JS
// Dot into the 'style' property
// h1.style.color = "cyan"

// Any properties that are multiple words must be camelCased in JS
// h1.style.backgroundColor = `black`


// Logging the style property
// console.log(h1.style)

// .addEventListener gets added to an element
// takes two arguments:
// - first argument is the event we're listening for
// - second argument is the callback function that will fire
// when the event is triggered

// h1.addEventListener("click", () => {
//     // console.log('I have been clicked')

//     if(h1.innerText === "DOM Manipulation"){
//         // textContent
//         h1.innerText = "Manipulating the DOM"

//         // color
//         h1.style.color = "purple"

//         // background color
//         h1.style.backgroundColor = "black"

//         //font family
//         h1.style.fontFamily = "Helvetica"

//     } else {
//         h1.innerText = "DOM Manipulation"
//         h1.style.color = "black"
//         h1.style.backgroundColor = "lightgrey"
//         h1.style.fontFamily = "Quicksand"
//     }


//     // color for reviews
//     reviews.style.color = "pink"

//     // document.body.style.backgroundColor = "green"
// })


// Defining a function to be the event handler

const myFunc = () => {
    h1.classList.toggle('newClass')
}
// Referencing the function (instead of an anonymous function)
// h1.addEventListener("click", myFunc)


// Same code as 204-208, written differently, using anonymous function
h1.addEventListener('click', () => {
    h1.classList.toggle('newClass')
})


// Event Object
const anchor = document.querySelector('a')
// console.log(anchor)

anchor.addEventListener('click', (e) => {
    // e.preventDefault() will stop any default behavior from happening
    e.preventDefault()
    console.log(e)
})


const form = document.querySelector('form')
// console.log(form)

form.addEventListener('click', (event) => {
    // Will log the event object
    console.log(event)

    // Will log the TARGET that we clicked on
    // console.log(event.target)

    if(event.target.tagName === 'INPUT'){
        console.log('you clicked on an input')
    } else if(event.target.tagName === "TEXTAREA"){
        console.log('you clicked on a textarea')
    }

    // if(event.target.placeholder === "name"){
    //     console.log('you clicked on the NAME input')
    // }
})


const lis = document.querySelectorAll('li')
// console.log(lis)

// Iterating over a NodeList and adding an event listener to each element
lis.forEach((list) => {
    list.addEventListener("click", (event) => {
        event.preventDefault()
        // console.log(event)
        // Using event.target to pull our innerText to use in console.log
        console.log(`You clicked on ${event.target.innerText}`)
    })
})