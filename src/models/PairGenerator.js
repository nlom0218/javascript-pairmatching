const Data = require('../data/Data');
const { Random } = require('@woowacourse/mission-utils');

class PairGenerator {
  #pair;

  constructor([process, level, mission]) {
    this.generate([process, level, mission]);
  }

  generate([process, level, mission]) {
    this.#pair = {
      process,
      level,
      mission,
      pair: this.setPair(process),
    };
  }

  setPair(process) {
    let pairs = [];
    let pair = [];
    this.mixPair(process).forEach((crew, idx) => {
      pair.push(crew);
      if (idx % 2 === 0) return;
      pairs.push(pair);
      pair = [];
    });
    if (pair.length === 1) pairs[pairs[pairs.length - 1].push(pair[0])];
    return pairs;
  }

  mixPair(process) {
    let crews = process === '백엔드' ? Data.backendCrew : Data.frontendCrew;
    const crewsIdx = Random.shuffle(crews.map((_, idx) => idx));
    return crewsIdx.map((idx) => crews[idx]);
  }

  getPair() {
    return this.#pair.pair;
  }
}

module.exports = PairGenerator;
