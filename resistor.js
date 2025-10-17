var current = 0;
var value = 0;
const input = document.getElementById("answer");

function changeResistorColor() {
    var first;
    var second;
    var third;
    var fourth;
    if (value == parseAnswer() || current == 0) {
        bands = Math.floor(Math.random() * 2) + 4;
        console.log(`${bands}`);
        current = genResistor(bands);
        console.log(`${current}`);
        value = current[0];
        for (let i = 0; i < current[1]; i++) {
            value *= 10;
        }
        if (bands == 4) {
            if (current[0] >= 10) {
                first = parseInt(current[0].toString()[0]);
                second = parseInt(current[0].toString()[1]);
                third = current[1];
            }

            else {
                if (current[1] == 0) {
                    first = current[0];
                    second = 0;
                    third = 10;
                }
                else {    
                    first = current[0];
                    second = 0;
                    third = current[1] - 1;
                }
            }
            
            document.getElementById("resdiv").style.backgroundColor = "#e8caa2";
            
            document.getElementById("band4").style.backgroundColor = "transparent";
        }
        else {
            if (current[0] >= 100) {
                first = parseInt(current[0].toString()[0]);
                second = parseInt(current[0].toString()[1]);
                third = parseInt(current[0].toString()[2]);
                fourth = current[1];

            }

            else if (current[0] >= 10) {
                if (current[1] == 0) {
                    first = parseInt(current[0].toString()[0]);
                    second = parseInt(current[0].toString()[1]);
                    third = 0;
                    fourth = 10;
                }
                else {
                    first = parseInt(current[0].toString()[0]);
                    second = parseInt(current[0].toString()[1]);
                    third = 0;
                    fourth = current[1] - 1;
                }
            }

            else {
                if (current[1] == 0) {
                    first = parseInt(current[0].toString()[0]);
                    second = 0;
                    third = 0;
                    fourth = 11;
                }
                else if (current[1 == 1]) {
                    first = parseInt(current[0].toString()[0]);
                    second = 0;
                    third = 0;
                    fourth = 10;
                }
                else {
                    first = parseInt(current[0].toString()[0]);
                    second = 0;
                    third = 0;
                    fourth = current[0] - 2;
                }
            }

            document.getElementById("resdiv").style.backgroundColor = "#7cb9e0";
            document.getElementById("band4").style.backgroundColor = colourMatch(fourth);
        }
        document.getElementById("band1").style.backgroundColor = colourMatch(first);
        document.getElementById("band2").style.backgroundColor = colourMatch(second);
        document.getElementById("band3").style.backgroundColor = colourMatch(third);
        console.log(`${value}`);
        console.log(`first | ${first} | ${colourMatch(first)}`);
        console.log(`second | ${second} | ${colourMatch(second)}`);
        console.log(`third | ${third} | ${colourMatch(third)}`);
        console.log(`fourth | ${fourth} | ${colourMatch(fourth)}`);
        input.classList.add('right');
        setTimeout(() => {
        input.classList.remove('right');
        }, 750);
    }
    else {
        console.log("Wrong answer");
        console.log(`Correct answer is ${value}`);
        input.classList.add('wrong');
        setTimeout(() => {
        input.classList.remove('wrong');
        }, 1000);
    }
    input.value = "";
}

function genResistor(bands) {
    var value = Math.floor(Math.random() * 98) + 1;
    var multiplier = Math.floor(Math.random() * (10 - bands));
    if (bands == 5) {
        value = value * 10;
        if (Math.floor(Math.random() * 10) == 5) {
            value = value + Math.floor(Math.random() * 9);
        }
    }
    return [value, multiplier];
}

function colourMatch(colour) {
    const colours = ["black", "#875100", "red", "#ff8000", "yellow", "green", "blue", "purple", "grey", "white", "#d4af37", "#bcc6cc+"];
    if (colour < 0) {
        return "black";
    }

    else {
        return colours[parseInt(colour)];
    }
}

function parseAnswer() {
    var raw = String(input.value);
    var out = 0;

    if(raw[raw.length - 1] == "m" || raw[raw.length - 1] == "M") {
        out = parseInt(parseFloat(raw.slice(0, raw.length - 1)) * 1000000);
    } 
    
    else if (raw[raw.length - 1] == "k" || raw[raw.length - 1] == "K") {
        out = parseInt(parseFloat(raw.slice(0, raw.length - 1)) * 1000);
    } 
    
    else {
        out = parseInt(raw);
    }
    return(out);
}

changeResistorColor()

input.addEventListener('keypress', function(e) {
    if (e.key == "Enter") {
        changeResistorColor();
    }

});
