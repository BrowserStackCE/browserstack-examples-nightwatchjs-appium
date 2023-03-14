module.exports = class Page {
  

  async swipeOnElement(app) {
    
    await app.executeScript('mobile:swipeGesture', {
      'left':170,
      'top':550,
      'height':400,
      'width':700,
      'direction':'left',
      'percent':0.75,

    });
  
  }

};
