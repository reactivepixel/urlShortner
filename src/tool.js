exports.genURL = (urlLength) => {
  var urlString = "";
  const sourceLetters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

  // We need to make sure the loop only goes on as long as requested by the function param
  for(var genLoopIndex = 0; genLoopIndex < urlLength; genLoopIndex++){

    // Add a random letter to the urlString
    urlString += sourceLetters.charAt(Math.random() * (sourceLetters.length - 1))
  }

  return urlString
}
