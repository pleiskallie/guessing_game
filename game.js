console.log('Happy lucky day! You have been selected to be a member of the secret club - -');

var name = prompt('First, lets get official - enter your name!');
var email = prompt('Enter your email!');
var age = prompt('Enter your age');
var cityState = prompt('Enter your location - City & State');

console.log('Its time to test your brain - lets see how much you can recall - - !');

(function() {

//this constructor was created to reflect a new game
  function Game() {
    this.answer1 = '3&6910';
    this.answer2 = '#44&8*9';
    this.answer3 = '&987#1$$';
//this method is to play the game (method = actions)
    this.letsPlay = function() {
      alert('3&6910');
      var guess1 = prompt('What was the phrase?');
        if (guess1== '3&6910') {
          alert('Great Job! Lets try another phrase - -');
        }

      alert('#44&8*9');
      var guess2 = prompt('What was the phrase?');
        if (guess2 == '#44&9*9') {
          alert('Great Job! Lets another phrase - -');
        }

      alert('&987#1$$');
      var guess3 = prompt('What was the phrase?');
        if (guess3 == '&987#1$$') {
          alert('Great Job! You are done - - !!');
        }
      }
    }

  // console.log('The answer to first question was ' + answer1);
  // console.log('The answer to the second question was ' + answer2);
  // console.log('The answer to the third question was ' + answer3);

var newgame = new Game();
newgame.letsPlay();

var newGame2 = new Game();
newGame2.letsPlay();

var endGame = document.getElementById('endGame');
endGame.textContent = 'SMILE :) - You are done!';


})();








