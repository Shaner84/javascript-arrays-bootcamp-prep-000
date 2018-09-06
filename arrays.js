var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(){
  return chocolateBars[1] = foo
}

