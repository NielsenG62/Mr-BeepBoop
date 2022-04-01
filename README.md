# _Mr. BeepBoop's Neighborhood_

#### By _**Gabe Nielsen**_

#### _A counting machine with a twist_

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _JavaScript_
- _jQuery_

## Description

_This website has a single input field. when a user enters a number, Mr. BeepBoop will begin counting. Starting from 0, he will count up to your number, with a few exceptions. When he encounters a 3, he will say "Won't you be my neighbor?", with a 2 he will "Boop!", and with a 1 he will "Beep!"_

## Setup/Installation Requirements

- _Clone this repository_
- _Navigate to the top level of this directory_
- _Open index.html in your browser of choice_

## Link to project on GitHub Pages

https://nielseng62.github.io/programming-language-suggestor/

## Known Bugs

- _When the button has class of "flash", it is slightly smaller_
- _If the button is clicked multiple times, the setTimeout won't clear, resulting in the function running and printing simultaneously_

## License

Copyright (c) _2022_ _Gabe Nielsen_

## Specs:

```javascript

Describe: makeArray()

Test: "it should return an array of numbers from 0 to the inputted number"
Code: makeArray(5);
Expected Output: [0, 1, 2, 3, 4, 5,]


Describe: beepBoopNeighbor()

Test: "it should turn a 1 into 'Beep!'"
Code: beepBoopNeighbor(5);
Expected Output: [0, 'Beep!', 2, 3, 4, 5,]

Test: "it should turn a 2 into 'Boop!'"
Code: beepBoopNeighbor(5);
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5,]

Test: "it should turn a 3 into 'Won't you be my neighbor?'"
Code: beepBoopNeighbor(5);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5,]

Test: "it should turn any number with 1 into 'Beep!'"
Code: beepBoopNeighbor(10);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep']

Test: "it should prioritize numbers with 3, then 2, then 1."
Code: beepBoopNeighbor(15);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep', 'Beep']
```
