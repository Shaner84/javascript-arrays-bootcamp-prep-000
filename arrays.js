var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  chocolateBars[1] = 'foo'
  chocolateBars = ['foo', ...chocolateBars]
}

