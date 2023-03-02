import { Dog } from './Dog.js'
import dogs from './data.js'

const dog = new Dog(dogs[0]).getDogHtml()
let currentIndex = 0

document.getElementById('x-btn').addEventListener('click', function(){
        dogs[currentIndex].hasBeenSwiped = true
        document.getElementById('main').innerHTML += `<span class="nope"><img src="images/badge-nope.png"></span>`
        currentIndex++
        setTimeout(function(){
            new Dog(dogs[currentIndex]).getDogHtml()
            if (dogs[currentIndex] == undefined){
                document.getElementById('main').innerHTML = `<div class="done"><span>Come back for more later!</span></div>`
            }
        }, 2000) 
})

document.getElementById('like-btn').addEventListener('click', function(){
    dogs[currentIndex].hasBeenSwiped = true
    dogs[currentIndex].hasBeenLiked = true
    document.getElementById('main').innerHTML += `<span class="nope"><img src="images/badge-like.png"></span>`
    currentIndex++
    setTimeout(function(){
        new Dog(dogs[currentIndex]).getDogHtml()
        if (dogs[currentIndex] == undefined){
            document.getElementById('main').innerHTML = `<div class="done"><span>Come back for more later!</span></div>`
        }
    }, 2000)
})




