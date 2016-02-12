$(document).on('ready', function(){
  var turn = 0;
  var xSquares = [];
  var oSquares = [];

  $('td').on('click', function(){
    // this === DOM element
    // $(this) === jQuery object

    // Idempotent = Always get the same outcome
    // Memoization = Memorize the result and store it
    var self = $(this);

    if ( turn % 2 ) {
      self.html('O');
      oSquares.push(parseInt(self[0].id.substr(5)));
      checkForWinner("o");

    }

    else {
      self.html('X');
      xSquares.push(parseInt(self[0].id.substr(5)));
      checkForWinner("x");
    }

    self.off('click');


    turn++;

  });

  function checkForWinner(whichSquares) {
    if (whichSquares === 'x') {
      console.log("X: " + xSquares);
      if (xSquares.length > 2) {
        for (var i=0; i<xSquares.length-2; i++) {
          for (var j=i+1; j<xSquares.length-1; j++) {
            for (var k=j+1; k<xSquares.length; k++) {
              console.log("ADD X: " + xSquares[i] + ", " + xSquares[j] + ", " + xSquares[k] );
              if (xSquares[i] + xSquares[j] + xSquares[k] === 15) {
                console.log("WINNER");
                $('td').off('click');
                alert("X's win the game!!");
              }
            }
          }
        }
      }

    }
    else {
      console.log("O: " + oSquares);
      if (oSquares.length > 2) {
        for (var i=0; i<oSquares.length-2; i++) {
          for (var j=i+1; j<oSquares.length-1; j++) {
            for (var k=j+1; k<oSquares.length; k++) {
              console.log("ADD O: " + oSquares[i] + ", " + oSquares[j] + ", " + oSquares[k] );
              if (oSquares[i] + oSquares[j] + oSquares[k] === 15) {
                console.log("WINNER");
                $('td').off('click');
                alert("O's win the game!!");
              }
            }
          }
        }
      }

    }
  }

});
