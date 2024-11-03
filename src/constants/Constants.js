export const INPUT = {
  COST: '구입금액을 입력해 주세요.\n',
  JACKPOT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS: '\n보너스 번호를 입력해 주세요.\n',
};

export const FORMAT = {
  HYPHEN: '-',
  NUMBER: /^[0-9]+$/,
};

export const UNIT = {
  TICKET_PRICE: 1000,
};

export const WINNINGS = {
  RANK5: '5,000',
  RANK4: '50,000',
  RANK3: '1,500,000',
  RANK2: '30,000,000',
  RANK1: '2,000,000,000',
};

export const OUTPUT = {
  TICKET: '개를 구매했습니다.',
};

export const RESULT = {
  HEADER: '\n당첨 통계\n---',
  5: `3개 번호 일치 (${WINNINGS.RANK5}원) ${FORMAT.HYPHEN}`,
  4: `4개 번호 일치 (${WINNINGS.RANK4}원) ${FORMAT.HYPHEN}`,
  3: `5개 번호 일치 (${WINNINGS.RANK3}원) ${FORMAT.HYPHEN}`,
  2: `5개 번호 일치, 보너스 번호 일치 (${WINNINGS.RANK2}원) ${FORMAT.HYPHEN}`,
  1: `6개 번호 일치 (${WINNINGS.RANK1}원) ${FORMAT.HYPHEN}`,
  COUNT_CHAR: '개',
  RATE_HEADER: '총 수익률은 ',
  RATE_FOOTER: '%입니다.',
};

export const ERROR = {
  COST_UNIT: '[ERROR] 구매 금액은 1,000원 단위만 가능합니다.',
  NON_NUMBER: '[ERROR] 정수만 입력 가능합니다.',
  LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  LOTTO_ARRAY_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_TYPE: '[ERROR] 숫자와 쉼표가 아닌 잘못된 값이 입력되었습니다.',
  LOTTO_REPEAT: '[ERROR] 중복된 숫자가 존재합니다.',
  BONUS_REPEAT: '[ERROR] 당첨 번호와 중복된 숫자가 존재합니다.',
};
