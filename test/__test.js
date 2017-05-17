const expect = require('chai').expect;
const tool = require('../src/tool.js');

describe('URL Gen Testing', () => {

  it('Was the proper length observed', () => {
    const properLength = 150;
    const lenTest = tool.genURL(properLength);
    expect(lenTest.length).to.equal(properLength)
  })

  it('Is genURL a function', () => {
    expect(typeof(tool.genURL)).to.be.equal('function');
  })

  it('Is it a string', () => {
    const stringTest = tool.genURL(12)
    expect(typeof(stringTest)).to.be.equal('xxxxxxx')
  })

})
