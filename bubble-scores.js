var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 
34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 
46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble Solution: #" + i + " Score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

var highScore = printAndGetHighScore(scores);
console.log("");
console.log("Number of Bubble Tests: " + scores.length);
console.log("Highest Bubble Test Score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solution Numbers With The Highest Score: " + bestSolutions);

console.log("===============");

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, 
    .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, 
    .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

    function getMostCostEffectiveSolution(scores, costs, highScore) {
        var cost = 100;
        var index;
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore && costs[i] < cost) {
                cost = costs[i];
                index = i;
            }
        }
    return index;
    }

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective solution");

// var arrayTest = [];
// console.log(arrayTest.length);

// arrayTest[0] =true;
// arrayTest[5] =true;
// console.log(arrayTest.length);
// console.log(arrayTest);

// console.log("===============");
// var arrayTest = [1,2,3,4];
// var last = arrayTest.length - 1;
// var recent = arrayTest[last];

// console.log(recent,last);

