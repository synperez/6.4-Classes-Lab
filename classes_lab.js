console.log('/////question 1//////')
class Person {
    constructor(first, last, middle){
        this.first = first;
        this.last = last;
        this.middle = middle
    }
fullName(){
    return this.first + " " + this.middle + " " + this.last 
}
}
let bobby = new Person('bobby', 'chips', 'digital')
let ghost = new Person('tony', 'starks', 'ghost')
console.log(bobby.first)
console.log(bobby.fullName())
console.log(ghost.fullName())
console.log('/////question 2/////////')

class Book {
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating
    }
    isGood(){
        if(this.rating > 7){
            return true;
        } else{
            return false;
        }
    }

}
let blink = new Book('blink', 'malcolm gladwell', '10')
let fiftyShades = new Book('fifty shades of gray', 'E.L James', '3')
console.log(fiftyShades.isGood())

console.log('//////////question 3///////////')
class Dog{
    constructor (name, breed, mood, hungry){
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry
    }
    playFetch(){
        this.hungry=true;
        this.mood ="playful"
        return 'ruff!'
    }
    feed(){
        if(this.hungry=true){
            this.hungry = false;
            return 'woof!'
        }else {
            return 'this dog doesnt look hungry'
        }
    }
    toString(){
        return this.name + " "+ this.breed + " "+ this.mood + " "+ this.hungry 
        
    }
}
let benji = new Dog('Benji', 'husky', 'tired', false)
console.log(benji)
console.log(benji.playFetch())
console.log(benji)
console.log(benji.feed())
console.log(benji)
console.log(benji.toString())
console.log("///////question 4/////////")
