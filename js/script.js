// DOM references
let countdown = document.getElementById("countdown");
let result = document.getElementById("result");
let thirty_sec = document.getElementById("30_sec_id");
let sixty_sec = document.getElementById("60_sec_id");
let one_twenty_sec = document.getElementById("120_sec_id");
let box = document.getElementById("text_area");
let restart = document.getElementById("restart");
let text_generating_area = document.getElementById("text_generating_area");

// important functionality variables
let seconds = 0;
let countdown_time_selected;
let correct_characters;
let total_typed_characters_with_spaces;
let total_typed_characters_without_spaces;
console.log("Restart element:", document.getElementById("restart"));

// Initial instructions
result.innerHTML = `Welcome to Type50, test your typing speed!`;
restart.style.display="none";
box.innerHTML = `Click on any time limit to start the test...`;
box.contentEditable = false;

function main() {
    word_count = 0;
    correct_characters = 0;
    total_typed_characters_without_spaces = 0;
    total_typed_characters_with_spaces = 0;

    result.innerHTML = "";
    box.innerHTML = "";
    restart.style.display = "block";
    box.contentEditable = true;

    let typed = "";

    // Word list
    const words = [
        "beam", "jump", "moonlight", "rope", "whistle", "cobweb", "bean", "berry", "pepper", "twist",
        "breeze", "whisper", "cloud", "cobweb", "river", "fog", "knife", "mud", "thread", "breeze",
        "yarn", "root", "cloud", "snow", "field", "wool", "clay", "root", "glass", "corn",
        "twist", "cobweb", "garden", "yarn", "sand", "chalk", "whistle", "rainbow", "ink", "grit",
        "shell", "pencil", "string", "chalk", "orange", "pepper", "page", "shadow", "chair", "river",
        "pebble", "plate", "root", "seed", "moss", "bell", "button", "petal", "rope", "orange",
        "candle", "candle", "breeze", "dust", "seed", "string", "sand", "garden", "moonlight", "shadow",
        "rope", "window", "bottle", "net", "turnip", "spoon", "twist", "jug", "string", "sparkle",
        "drift", "orange", "rainbow", "ink", "grape", "chain", "rope", "rope", "daisy", "sand",
        "candle", "feather", "berry", "candle", "glass", "plate", "hill", "plate", "string", "garden",
        "jump", "rice", "twist", "clover", "plank", "candle", "yarn", "jump", "bowl", "wheat",
        "chair", "pea", "sparkle", "basket", "shell", "whistle", "fork", "fog", "river", "moonlight",
        "moonlight", "river", "drift", "page", "flame", "meadow", "marble", "breeze", "fern", "crystal",
        "rope", "crystal", "velvet", "pencil", "flame", "mirror", "seed", "whistle", "clover", "ink",
        "cup", "basket", "chain", "dust", "snow", "garden", "button", "velvet", "daisy", "pea",
        "barley", "turnip", "jump", "sand", "turnip", "breeze", "breeze", "clay", "turnip", "bottle",
        "nail", "dust", "breeze", "brick", "shell", "jug", "lantern", "clay", "plastic", "wood",
        "jug", "lemon", "moss", "fork", "crystal", "glass", "pebble", "window", "tunnel", "sparkle",
        "cobweb", "wood", "berry", "whistle", "petal", "twist", "window", "tunnel", "breeze", "candle",
        "lantern", "blanket", "bean", "plank", "crystal", "branch", "marble", "bean", "pepper", "moonlight"
    ];

    // Shuffle words
    words.sort(() => Math.random() - 0.5);
    let target = words.join(" ");
    text_generating_area.innerHTML = `${target}`;

    // Typing logic
    box.addEventListener("beforeinput", e => {
        e.preventDefault();

        if (e.inputType === "insertText") {
            typed += e.data;
        }

        if (e.inputType === "deleteContentBackward") {
            typed = typed.slice(0, -1);
        }

        let html = "";
        let correct = 0;
        let total = 0;
        let total_with_spaces = 0;

        for (let i = 0; i < typed.length; i++) {
            let currentChar = typed[i];
            let target_char = target[i];

            if (currentChar === " ") {
                html += "<span class='space'>&#8203;</span>";
                total_with_spaces++;
            } else if (currentChar === target[i]) {
                html += currentChar;
                correct++;
                total++;
                total_with_spaces++;
            } else {
                html += `<span style='color:red'>${target_char}</span>`;
                total++;
                total_with_spaces++;
            }
        }

        correct_characters = correct;
        total_typed_characters_without_spaces = total;
        total_typed_characters_with_spaces = total_with_spaces;

        box.innerHTML = html;

        // Move caret to end
        let range = document.createRange();
        let sel = window.getSelection();
        range.selectNodeContents(box);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    });
}

// Timer option selectors
function onclick_30sec() {
    seconds = 30;
    countdown_time_selected = 30;
    thirty_sec.style.color = "white";
    sixty_sec.style.color = "chocolate";
    one_twenty_sec.style.color = "chocolate";
    main();
}

function onclick_60sec() {
    seconds = 60;
    countdown_time_selected = 60;
    sixty_sec.style.color = "white";
    thirty_sec.style.color = "chocolate";
    one_twenty_sec.style.color = "chocolate";
    main();
}

function onclick_120sec() {
    seconds = 120;
    countdown_time_selected = 120;
    one_twenty_sec.style.color = "white";
    thirty_sec.style.color = "chocolate";
    sixty_sec.style.color = "chocolate";
    main();
}

// Countdown interval
setInterval(countdown_function, 1000);

function countdown_function() {
    if (seconds > -1) {
        countdown.innerHTML = `${seconds}`;
        seconds--;
        

        if (seconds === 0) {
            // Lock the input
            box.contentEditable = false;
            text_generating_area.innerHTML = "";
            box.innerHTML = ""; 
            // Calculate final stats
            let accuracy = (correct_characters / total_typed_characters_without_spaces) * 100;
            let wpm = Math.round((total_typed_characters_with_spaces / 5) * (60 / countdown_time_selected));

            result.innerHTML = `Your wpm is ${wpm} and character based accuracy is ${accuracy.toFixed(2)}%`;

            // Scroll to top
            window.scrollTo(0, 0);
            
        }
    }
}
function restarting_case(){
    if (countdown_time_selected == 30){
        thirty_sec.click();
    }
    else if (countdown_time_selected == 60){
        sixty_sec.click();
    }
    else{
        one_twenty_sec.click();
    }
}
