const { InputView } = require('../views/IOView');

class Controller {
  start() {
    this.requestAppFunction();
  }

  requestAppFunction() {
    InputView.readAppFunction((appFn) => this.handleAppFunction(appFn));
  }

  handleAppFunction(appFn) {}
}

module.exports = Controller;
