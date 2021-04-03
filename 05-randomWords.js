var wordArray = ["cookies", "they", "we", "love", "like", "fries", "oranges", "eat/eats", "she", "he", "chips"];

var sentence = "";

// assigns 3 words to the sentence
for (var i = 0; i < 3; i++ ){
    // adds a random word to the sentence
    sentence += wordArray[Math.floor(Math.random() * (wordArray.length - 1))] + " ";
    
}

// prints sentence to the console
console.log(sentence);