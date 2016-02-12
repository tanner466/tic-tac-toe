$(document).on('ready', function(){
  var turn = 0;

  //var winningCombos =

  $('td').on('click', function(){
    // this === DOM element
    // $(this) === jQuery object

    // Idempotent = Always get the same outcome
    // Memoization = Memorize the result and store it
    var self = $(this);

    if ( turn % 2 ) {
      self.html('O').addClass('o');
    }

    else {
      self.html('X').addClass('x');
    }

    self.off('click');

    //checkForWinner();

    turn++;

  });

  // function checkForWinner() {
  //   $('.x')
  // }

});
