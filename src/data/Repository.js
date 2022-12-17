class Repository {
  #pairList = [];

  addPair(pair) {
    this.#pairList.push(pair);
    console.log(this.#pairList);
  }

  deletePair(pairInfo) {
    this.#pairList = this.#pairList.filter((pair) => !pair.isSame(pairInfo));
    console.log(this.#pairList);
  }

  isExistSamePairInfo(pairInfo) {
    return this.#filterPairs(pairInfo).length !== 0;
  }

  getSamePairInfo(pairInfo) {
    return this.#filterPairs(pairInfo);
  }

  hasSamePair(pairInfo, pairs) {
    const samePairInfo = this.getSamePairInfo(pairInfo);
    if (samePairInfo.length === 0) return false;

    console.log(samePairInfo[0].hasSamePair(pairs));
  }

  #filterPairs([process, level, mission]) {
    let comparePair = this.#pairList;
    comparePair = this.#filterSameProcess(comparePair, process);
    comparePair = this.#filterSameLevel(comparePair, level);
    return this.#filterSameMission(comparePair, mission);
  }

  #filterSameProcess(comparePair, process) {
    return comparePair.filter((pair) => {
      return pair.isSameProcess(process);
    });
  }

  #filterSameLevel(comparePair, level) {
    return comparePair.filter((pair) => {
      return pair.isSameLevel(level);
    });
  }

  #filterSameMission(comparePair, mission) {
    return comparePair.filter((pair) => {
      return pair.isSameMission(mission);
    });
  }
}

module.exports = Repository;
