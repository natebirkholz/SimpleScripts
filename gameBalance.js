// Rough balance test for my miniatures game. 
// Will soon take in an offense, a defense, and a strength 
// and use them to calculate the results of combat 
// May also set it up to parse a text file instead
// Last step: Profit

var offense 
var defense
var strength
var resultsDict = {2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0, 8 : 0,  9 : 0, 10 : 0, 11 : 0,  12 : 0}
var singleDict = {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0}

var result = twoDice()
lotsaRolls()
fewerRolls()
console.log(resultsDict)
console.log(singleDict)

// console.log('Enter an offense:')
// process.stdin.resume();
//   process.stdin.setEncoding('utf8');
//   var util = require('util');

//   process.stdin.on('data', function (text) {
//     console.log('received data:', util.inspect(text));

//     if (text === 'q\n') {
//       done();
//     } else {
//       offense = text
//       console.log(offense)
//     }
//   });

//   function done() {
//     console.log('Now that process.stdin is paused, there is nothing more to do.');
//     process.exit();
//   }

  function twoDice() {
    var firstDie = Math.floor(Math.random() * 6) + 1;
    var secondDie = Math.floor(Math.random() * 6) + 1;
    return firstDie + secondDie
  }

    function oneDie() {
    var oneD = Math.floor(Math.random() * 6) + 1;
    return oneD
  }

  function lotsaRolls() {
    for (var i = 0; i < 1000; i++) {
      var roll = twoDice()
      // console.log('The roll is', roll)
      resultsDict[roll] ++
    };
  }

    function fewerRolls() {
    for (var i = 0; i < 1000; i++) {
      var roll = oneDie()
      // console.log('The roll is', roll)
      singleDict[roll] ++
    };
  }

