var latinPig = function(str) {
  str = str.toLowerCase().split(' ');
  console.log(str);
  var newStr = str.map(function(word) {
    if (/[aeiou]/.test(word.charAt(0)) === true) { //if first letter is vowel
      return word + "ay";
    } else if (word.startsWith("q") === true && word.charAt(1) === "u") {// "q u" code block
        var quStart = [];
        var wordArray = word.split('');
         quStart.push(wordArray[0]);
         quStart.push(wordArray[1]);
         wordArray.splice(0, quStart.length);
         wordArray.push(quStart.join("") + "ay");
         return wordArray.join('');


    }

    else if (/[aeiou]/.test(word.charAt(0)) === false) { //if first letter is consonant
      var wordArray = word.split("");
      console.log(wordArray);
      var consonantStart = [];
      for (i = 0; i < wordArray.length; i++) { //for loop to test for consonant at each letter in word
        if (/[aeiou]/.test(wordArray[i]) === false) {
          consonantStart.push(wordArray[i]);
        } else {
          break;
        } //end if for consonant

      } //end for loop

      //remove starting consonants
      wordArray.splice(0, consonantStart.length);
      wordArray.push(consonantStart.join("") + "ay");
      return wordArray.join('');

    } //end of if statement that tests first letter in word


  }); //end of map function

	console.log(newStr.join(' '));

}; //end of function

latinPig("wheeling and squealing on qualudes");
