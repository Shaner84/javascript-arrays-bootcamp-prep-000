var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  chocolateBars = ['foo', ...chocolateBars]
  return chocolateBars[1]
}

