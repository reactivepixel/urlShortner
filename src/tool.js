exports.genURL = (urlLength) => {
  var urlString = "";
  const sourceLetters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

  for(var genLoopIndex = 0; genLoopIndex < 150; genLoopIndex++){

    // Add a random letter to the urlString
    urlString += sourceLetters.charAt(Math.random() * (sourceLetters.length - 1))
  }

  return urlString
}
