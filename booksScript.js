var books = [
    {title: "To Mock A Killingbird", author: "Aloysious Milk", rating: 4.5},
    {title: "Thrilight", author:"Intense Loneliness", rating: 1.2},
    {title: "Hunger Games: Not So Hungry Any More", author: "Chef Louise", rating: 6.9},
    {title: "JavaScript and Me", author:"Antonia Parser", rating: 5.5},
    {title: "The Sherriff Shot Me", author:"Jacob Marley", rating: 4.2},
    {title: "Go the @$&k to sleep", author:"A. Genius", rating: 7.2},
    {title: "iOS 4 Lyfe, LOL", author:"Nate Birkholz", rating: 9.5}
]

var ratings = []
var titles = []
var sum = 0

for (var index = 0; index < books.length; index ++) {
	ratings[ratings.length] = books[index].rating
    titles[titles.length] = books[index].title
    sum += ratings[index]
}

ratings.sort()
var average = sum / ratings.length

var top = Math.max.apply(Math,ratings)
var bottom = Math.min.apply(Math,ratings)
var lowest = ratings[0]

console.log('The average rating is ',average)
console.log('The top rating is ', top)
console.log('The bottom rating is ', bottom)
console.log('The lowest rating is', lowest)

function searchForARating(valueKey, anArray){
    for (var i=0; i < anArray.length; i++) {
        if (anArray[i].rating === valueKey) {
            return anArray[i];
        }
    }
}

var lowestRatedBook = searchForARating(bottom, books);

console.log('The lowest rated book is', lowestRatedBook.title, 'and the author is', lowestRatedBook.author)

titles.sort()
console.log(titles)