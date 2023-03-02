import dogs from '/data.js'

export class Dog {
    constructor(data){
        Object.assign(this, data)
    }

getDogHtml(data) {
    const {name, avatar, age, bio } = this


document.getElementById('main').innerHTML = `<div>
                                <img id="dog-img" src="${avatar}">
                                 <section class="text">
                                     <span class="heading">${name}, ${age}</span>
                                     <span class="bio">${bio}</span>
                                 </section>
                             </div>`
    }
}

