var chai = require('chai')
var expect = chai.expect
var word = require('../index.js')


//mocha indexSpec.js --reporters doc > output.html creates an html doc with error reports
describe('sanitize', function() {
  beforeEach(function(){
    console.log('before!');
  })

  it('should return lowercase string', function (){
    let inputWord = 'HELLO WORLD'
    let outputWord = word.sanitize(inputWord)

    expect(outputWord).to.equal('hello world')
    expect(outputWord).to.not.equal('HELLO WORLD')
    expect(outputWord).to.contain('hello')
  })
  it('removes and hyphen', function() {
    let inputWord = 'HELLO-WORLD'
    let outputWord = word.sanitize(inputWord)

    expect(outputWord).to.equal('hello world')
  })
})
