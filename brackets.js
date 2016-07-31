
function checkBrackets(formula){
  var bracket_open, bracket_closed;
  brackets_open = (formula.match(/\(/g) || []).length;
  brackets_closed = (formula.match(/\)/g) || []).length;


  if (brackets_open + brackets_closed == 0) {
    console.log('Math Formula contains no brackets');
  }
  if (brackets_open == brackets_closed) {
    console.log('correct')
  }
  else {
    console.log('incorrect');
  }
}

checkBrackets('( ( a + b ) / 5 abd )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )');
