var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  const moreChocolateBars = ["foo", ...chocolateBars]
    return moreChocolateBars
}
function destructivelyAddElementToBeginningOfArray(){
  const chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}

