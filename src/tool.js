exports.genURL = (urlLength) => {
  var urlString = "";
  const sourceLetters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

	// URL length should be dynamically added to limit: not set to 50 characters
  for(var genLoopIndex = 0; genLoopIndex < urlLength; genLoopIndex++){

    // Add a random letter to the urlString
    urlString += sourceLetters.charAt(Math.random() * (sourceLetters.length - 1))
  }

  return urlString
}
