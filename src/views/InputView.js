const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readAppFunction(callback) {
    Console.readLine(
      '기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
      callback
    );
  },

  readPairInfo(callback) {
    Console.readLine(
      '과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
      callback
    );
  },
};

module.exports = InputView;
