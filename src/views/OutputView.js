const { Console } = require('@woowacourse/mission-utils');
const Data = require('../data/Data');

const OutPutView = {
  printAppInfo() {
    OutPutView.printBlack();
    OutPutView.printDivied();
    OutPutView.printProcess();
    OutPutView.printMission();
    OutPutView.printDivied();
  },

  printProcess() {
    Console.print(`과정: ${Data.process.join(' | ')}`);
  },

  printMission() {
    Console.print('미션: ');
    Data.missions.forEach((mission) => {
      Console.print(` - 레벨${mission.level}: ${mission.mission.join(' | ')}`);
    });
  },

  printPairs(pairs) {
    Console.print('\n페어 매칭 결과입니다.');
    pairs.forEach((pair) => OutPutView.printPair(pair));
  },

  printPair(pair) {
    Console.print(pair.join(' : '));
  },

  printBlack() {
    Console.print(' ');
  },

  printDivied() {
    Console.print('#############################################');
  },
};

module.exports = OutPutView;
