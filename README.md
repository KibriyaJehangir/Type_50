# Type50 – Typing Speed Test

#### Video Demo: (https://www.youtube.com/watch?v=jB71eWILRyw
---

#### Description

**Type50** is a browser-based typing speed test that measures how fast and accurately a user can type within a selected time limit. It is inspired by common typing practice apps but is built entirely from scratch using HTML, CSS, and JavaScript — without any external frameworks or libraries.

The user can select a duration (30, 60, or 120 seconds) from the top menu. Once selected, the application begins a countdown and displays a randomly shuffled list of simple English words. As the user types, each character is checked in real-time against the target text. Correct characters are displayed normally, while incorrect ones are shown in red. At the end of the countdown, the app shows the user’s words-per-minute (WPM) and typing accuracy.

---

## Features

- ⏱ Time limit selector (30s, 60s, 120s)
- 🧠 Real-time character checking and visual feedback
- 📊 Calculation of WPM and character-based accuracy
- 🔁 Restart feature to reset the test instantly
- 🎨 Simple, focused UI using Flexbox and a chocolate-dark theme
- 🧩 Custom word list built into JavaScript for randomization

---

## Folder Structure and Files

### `index.html`
This is the main HTML file of the app. It includes:
- A header with a logo and time buttons
- Countdown timer display
- A dynamic typing area (`text_area`) and target word area (`text_generating_area`)
- A restart button that reloads the challenge
- A link to the external CSS and JavaScript files

### `style/style.css`
This file contains all the visual styling:
- Layout is handled with Flexbox for vertical centering
- Colors: chocolate background with black/gray panels and white text
- Styles for word highlighting, the countdown display, and hover effects
- Monospaced font for consistent character width (important for typing apps)

### `js/script.js`
The core logic of the application is here:
- DOM references are created using `getElementById`
- A large word list is shuffled each time using `Math.random()`
- `main()` function initializes state, starts the timer, and enables typing
- `beforeinput` event is used instead of `input`, which works better with `contenteditable` divs
- Characters typed are compared to the target string, and each match/mismatch is rendered immediately with color
- Final results are shown using a formula for WPM:
WPM = (characters with spaces / 5)×(60 / seconds)
Accuracy = (correct characters / total typed characters) × 100%

- The caret is programmatically kept at the end using `document.createRange()` and `getSelection()`
- Restart button simply re-triggers the selected time option

---

## Design Decisions

- **`contenteditable` div instead of `<input>` or `<textarea>`**  
This allows full control over rendering each character (e.g. coloring individual letters), which is not possible with standard form inputs.

- **No external libraries**  
Everything is written in vanilla JavaScript to keep it lightweight and readable.

- **Single-page app structure**  
No need to reload the page or navigate — all logic is handled in one view.

---

## What I Learned

This project helped me strengthen my understanding of:
- DOM manipulation and event handling
- `contenteditable` quirks and caret positioning
- Dynamic styling with JavaScript
- Building complete frontend-only apps
- Debugging real-time input logic
- Structuring code into clear sections (HTML, CSS, JS)

---

## Challenges Faced

- **Caret jump issue**: Every time `innerHTML` was updated, the typing caret moved to the beginning. I solved this by manually resetting the selection and collapsing the caret at the end.
- **Handling `beforeinput` safely**: I needed fine control over what the user types, and this event gave more flexibility than `input`.
- **Character tracking**: It was tricky to handle spaces, deletions, and measuring both correct and incorrect input character-by-character in real-time.

---

## AI Tool Usage

I used ChatGPT to guide and debug specific parts of the JavaScript code — especially the caret positioning and WPM/accuracy calculation logic. However, I wrote all the code myself and fully understood and modified every part before submitting. This tool was used for learning and clarification purposes only.

---

## Future Improvements

If I had more time, I would:
- Add mobile responsiveness
- Store user results locally for progress tracking
- Allow pasting or uploading custom text samples
- Add visual countdown animations
- Build a backend to store and compare global scores

---

## License

This project was created by me, **Kibriya**, as part of the final project for Harvard University’s [CS50](https://cs50.harvard.edu/x) course. It is intended for learning purposes only.

---
