# javascript-lotto-precourse

## 과제 안내

- 기능은 간단한 로또 발매기이다. 사용자가 구매할 로또의 개수만큼 금액을 입력하면, 그 금액에 맞춰 랜덤 로또 번호가 발행된다.
- 이후, 당첨 번호와 보너스 번호를 입력하면 발행된 로또 번호와 비교하여 수익률을 계산해 반환해준다.
- 주요 기능은 랜덤으로 발행된 로또와 당첨 번호를 비교하여 수익률을 반환해주는 것이다.

### 학습 목표

- [ ] 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 한다.
- [ ] 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는 영역을 확보한다.

## 과제 진행 요구사항

- [ ] 커밋은 README 파일에 정리된 기능 목록 단위로 추가

## 기능 요구사항

- 당첨 기준

  - [ ] 1등: 6개 번호 일치 / 2,000,000,000원
  - [ ] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - [ ] 3등: 5개 번호 일치 / 1,500,000원
  - [ ] 4등: 4개 번호 일치 / 50,000원
  - [ ] 5등: 3개 번호 일치 / 5,000원

### 입출력 요구 사항

- 입력

  - [x] 1,000원 단위의 로또 구입 금액을 입력받는다. ('구입금액을 입력해 주세요.')
  - [x] 사용자가 입력한 구입 금액/1000 값을 계산한다. [로또 1장 당 1,000원]
  - [x] 당첨 번호를 입력받는다. ('당첨 번호를 입력해 주세요.')
  - [x] 당첨 번호는 쉼표를 기준으로 구분한다.
  - [x] 보너스 번호를 입력받는다. ('보너스 번호를 입력해 주세요.')

- 출력

  - [x] 로또 갯수를 출력한다. ('${갯수}개를 구매했습니다.')
  - [x] 로또 갯수만큼 랜덤의 6자리의 수를 출력한다. ('[1, 2, 3, 4, 5, 6]')
  - [ ] 랜덤 번호와 입력한 당첨 번호를 비교한다.
  - [ ] 비교한 결과값을 출력한다. (ex. '당첨 통계\n---\n3개 일치 (5,000원) - 1개')
  - [ ] 수익률을 계산한다. => 수익률 = (로또 구매 금액 / 당첨 금액 합계) \* 100
  - [ ] 수익률을 출력한다. ('총 수익률은 ${수익률}%입니다.')

### 예외 상황

- 구입금액 입력

  - [x] 로또 구입 금액에 숫자가 아닌 값이 입력된 경우
  - [x] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 ('로또 금액은 1,000원 단위로 입력 가능합니다.')

- 당첨 번호 입력

  - [x] 숫자가 7개 이상 입력되었을때
  - [x] 쉼표가 아닌 기호가 들어갔을때
  - [ ] 1 ~ 45 범위 밖의 숫자가 입력되었을때 ('로또 번호는 1부터 45 사이의 숫자여야 합니다.')
  - [x] 중복된 숫자가 들어갔을때

- 보너스 번호 입력

  - [ ] 당첨 번호와 중복되는 숫자가 입력되었을때
  - [ ] 1 ~ 45 범위 밖의 숫자가 입력되었을때 ('로또 번호는 1부터 45 사이의 숫자여야 합니다.')

## 프로그래밍 요구 사항

### 1

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [ ] 3항 연산자를 쓰지 않는다.
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만든다.
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

### 2

- [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [ ] else를 지양한다.
- [ ] 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다. (LottoTest 참고)

### 3. Lotto 클래스

- [ ] numbers 이외의 필드(인스턴스 변수)를 추가할 수 없다.
- [ ] numbers의 접근 제어자인 #은 변경할 수 없다.
- [ ] Lotto의 패키지를 변경할 수 있다.
