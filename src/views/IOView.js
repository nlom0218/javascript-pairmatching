const InputView = require('./InputView');
const OutPutView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');

const IOView = {
  InputView,
  OutPutView,

  quit() {
    Console.close();
  },
};

module.exports = IOView;
