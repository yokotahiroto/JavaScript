var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段')
} else{
  alert('みかんの値段がりんごより高い')；
}

var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}