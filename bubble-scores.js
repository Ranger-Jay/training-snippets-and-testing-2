var scores =
[60, 50, 60, 58, 54, 54, 
    58, 50, 52, 54, 48, 69, 
    34, 55, 51, 52, 44, 51, 
    69, 64, 66, 55, 52, 61, 
    46, 31, 57, 52, 44, 18, 
    41, 53, 55, 61, 51, 44];

    // var output;

    // THIS IS THE FOR VERSION.

    // for (var i = 0; i < scores.length; i++) {
    //     output = "For Loop: Bubble Solution #" + i +  " :Score: " + scores[i];
    //     console.log(output);
    // }

    var highscore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble Solution #" + i + " :High Score: " + scores[i];
        console.log(output);

        if (scores[i] > highscore) {
            highscore = scores[i];
            output = "Bubble Solution #" + i + " :New High Score: " + scores[i];
        }
    }

    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] === highscore) {
            bestSolutions.push(i);
        }
    }

    console.log("");
    console.log("Number of Bubble Tests: " + scores.length);
    console.log("Highest Bubble Test Score: " + highscore);
    console.log("Solutions With The Highest Scores: " + bestSolutions);





    // THIS IS THE WHILE VERSION.

    // var i = 0;
    // while (i < scores.length) {
    //     output = "While Loop: Bubble solution #" + i + " Score: " + scores[i];
    //     console.log(output);
    //     i = i + 1;
    // }



    // THIS IS THE DO-WHILE VERSION.

    // var i = 0;
    // do {
    //     output = "Do-While Loop: Bubble solution #" + i + " Score: " + scores[i];
    //     console.log(output);
    //     i = i + 1;
    // } while (i < scores.length);



    // NOT TO SELF:  ALL 3 VERSIONS OF THE LOOP WORK.


    // var testArray = [];
    // testArray [0] = "item1";
    // testArray [1] = "item2";
    // testArray [2] = "item3";
    // console.log("");  // just a console spacer
    // console.log("");
    // console.log(testArray); // expexted: 3, and a list of all the items in the array
    // console.log(testArray[1]); // expected: item2
    // console.log(testArray.length); //expected: 3

    // testArray.push("item4");
    // console.log(testArray); // expected: 4, and a list of all the items in the array with item4 added
    // console.log(testArray[3]);
    // console.log(testArray.length);