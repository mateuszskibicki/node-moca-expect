const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  it('should add two numbers', () => {
    var res = utils.add(33, 11);
  
    // if (res !== 44) {
    //   throw new Error(`Expected 44, but got ${res}`);
    // }
  
    expect(res).toBe(44);
  });
  
  
  it('should sub two numbers', () => {
    var res = utils.subtract(44, 1000);
  
    if (res > 0) {
      throw new Error(`Mess`);
    }
  });
  
  it('should square two numbers', () => {
    var res = utils.square(3);
  
    // if (res != 40*40) {
    //   throw new Error(`Mess in square`);
    // }
  
    expect(res).toBe(9);
  });
  
  it('should expect some values', () => {
    expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    expect([2,3,4]).toContain(2);
    expect({
      name: 'Mateusz'
    }).toMatchObject({name: 'Mateusz'});
  });

  describe('#async', () => {
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
      })
    });
    
    it('should async square two numbers', (done) => {
      utils.asyncSquare(5, (sum) => {
        expect(sum).toBe(25);
        done();
      })
    });
  });

  
  
  
})