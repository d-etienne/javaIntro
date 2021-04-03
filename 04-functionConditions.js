var color = "orange";

// prints result of function to the console
console.log(colorMood(color));

// prints a mood based on the input of the color
function colorMood(color) {
    // converts the color to lowercase in case someone gave a color in title case, uppercase, etc.
    color = color.toLowerCase();

    if (color == "blue"){
        return "peaceful";
    }

    else if (color == "red") {
        return "passionate"
    }

    else if (color == "yellow") {
        return "joyous"
    }

    else {
        return "unique"
    }
}
