```javascript

Describe: makeArray()

Test: "it should return an array of numbers from 0 to the inputted number"
Code: makeArray(5);
Expected Output: [0, 1, 2, 3, 4, 5,]


Describe: beepBoopNeighbor()

Test: "it should turn a 1 into 'Beep!'"
Code: beep(5);
Expected Output: [0, 'Beep!', 2, 3, 4, 5,]

Test: "it should turn a 2 into 'Boop!'"
Code: beep(5);
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5,]

Test: "it should turn a 3 into 'Won't you be my neighbor?'"
Code: beep(5);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5,]

Test: "it should turn any number with 1 into 'Beep!'"
Code: beep(10);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep']

Test: "it should prioritize numbers with 3, then 2, then 1."
Code: beep(15);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep', 'Beep']
```
