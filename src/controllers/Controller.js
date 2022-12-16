const Repository = require('../data/Repository');
const PairGenerator = require('../models/PairGenerator');
const { InputView, OutPutView } = require('../views/IOView');

class Controller {
  #pairRepo = new Repository();

  start() {
    this.requestAppFunction();
  }

  requestAppFunction() {
    InputView.readAppFunction((appFn) => this.handleAppFunction(appFn));
  }

  handleAppFunction(appFn) {
    if (appFn === '1') return this.pairMatching();

    if (appFn === '2') return this.pairLookup();

    if (appFn === '3') return this.pairReset();

    console.log('앱을 종료합니다.');
  }

  pairMatching() {
    OutPutView.printAppInfo();
    InputView.readPairInfo((pairInfo) => this.handlePairInfo(pairInfo));
  }

  handlePairInfo(pairInfo) {
    pairInfo = pairInfo.split(', ');
    this.actionAboutNewPair(pairInfo);
    this.requestAppFunction();
  }

  actionAboutNewPair(pairInfo) {
    const newPair = new PairGenerator(pairInfo);
    this.#pairRepo.addPair(newPair);
    OutPutView.printPairs(newPair.getPair());
  }

  pairLookup() {
    console.log('페어 조회를 합니다.');
  }

  pairReset() {
    console.log('페어 초기화를 합니다.');
  }
}

module.exports = Controller;
