$(document).on('ready', function(){
  var turn = 0;
  var xSquares = [];
  var oSquares = [];

  $('td').on('click', clickSquare);

  function clickSquare() {
    var self = $(this);

    if ( turn % 2 ) {
      self.html('O');
      oSquares.push(parseInt(self[0].id.substr(5)));
      checkForWinner("o");
      $('#turn').html("X");
    }

    else {
      self.html('X');
      xSquares.push(parseInt(self[0].id.substr(5)));
      checkForWinner("x");
      $('#turn').html("O");

    }

    self.off('click');


    turn++;
  }

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
                var currentXScore = parseInt($('#x_score').html());
                $('#x_score').html(currentXScore + 1);
                $('td').off('click');
                alert("X's win the game!!");
                return;
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
                var currentYScore = parseInt($('#y_score').html());
                $('#y_score').html(currentYScore + 1);
                $('td').off('click');
                alert("O's win the game!!");
                return;
              }
            }
          }
        }
      }

    }

    if (turn===8) {
      alert("Tie game!");
      var currentDrawScore = parseInt($('#draw_score').html());
      $('#draw_score').html(currentDrawScore + 1);
    }
  }

  $("#newGame").on('click', function() {

    var squares = $('td');
    squares.on('click', clickSquare);

    for (var i=0; i<squares.length; i++) {
      $("#cell-"+(i+1)).html(i+1);
    }

    $('#turn').html("X");


    turn = 0;
    xSquares = [];
    oSquares = [];

  });

});
