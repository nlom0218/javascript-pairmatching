const Repository = require('../data/Repository');
const Pair = require('../models/Pair');
const { InputView, OutPutView } = require('../views/IOView');

class Controller {
  #pairRepo = new Repository();
  #pair;

  start() {
    this.requestAppFunction();
  }

  requestAppFunction() {
    InputView.readAppFunction((appFn) => this.handleAppFunction(appFn));
  }

  handleAppFunction(appFn) {
    if (appFn === '1') return this.requestPairMatching(false);

    if (appFn === '2') return this.pairLookup();

    if (appFn === '3') return this.pairReset();

    console.log('앱을 종료합니다.');
  }

  requestPairMatching(isRematch) {
    OutPutView.printBlank();
    if (!isRematch) OutPutView.printAppInfo();
    InputView.readPairInfo((pairInfo) => this.handlePairInfo(pairInfo));
  }

  handlePairInfo(pairInfo) {
    pairInfo = pairInfo.split(', ');
    this.actionAboutNewPair(pairInfo);
  }

  actionAboutNewPair(pairInfo) {
    this.#pair = new Pair(pairInfo);
    if (this.#pairRepo.isExistSamePairInfo(pairInfo))
      return this.requestRematch();

    // this.#pairRepo.hasSamePair(pairInfo, newPair.getPair());
    this.addPair();
  }

  addPair() {
    this.#pairRepo.addPair(this.#pair);
    OutPutView.printPairs(this.#pair.getPair());
    this.requestAppFunction();
  }

  requestRematch() {
    InputView.readRematch((rematch) => this.handleRematch(rematch));
  }

  handleRematch(rematch) {
    if (rematch === '아니오') return this.requestPairMatching(true);

    this.#pairRepo.deletePair(this.#pair.getPairInfo());
    this.addPair();
  }

  pairLookup() {
    console.log('페어 조회를 합니다.');
  }

  pairReset() {
    console.log('페어 초기화를 합니다.');
  }
}

module.exports = Controller;
