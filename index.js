module.exports = {
  sanitize: function (word) {
    return word.toLowerCase().replace(/-/, ' ')
  },
  unTested: function(sentence) {
    return sentence.split(' ')
  }
}
