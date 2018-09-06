var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  const moreChocolateBars [5] = ["foo", ...chocolateBars]
    return moreChocolateBars
}
function destructivelyAddElementToBeginningOfArray(){
  chocolateBars[5] = "foo"
}

