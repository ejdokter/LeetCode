function lengthOfLastWord(s) {
  //
  let lastWord = s.trim().split(" ");
  return lastWord[lastWord.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
