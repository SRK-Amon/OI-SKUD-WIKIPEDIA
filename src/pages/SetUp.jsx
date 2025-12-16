import setUp from "../assets/images/setUp.jpg";

const SetUp = () => {
  return (
    <div className="setUp">
      <div className="container">
        <div className="setUp__box">
          <h2 className="setUp__title title">Set Up</h2>
          <div className="setUp__item">
            <p className="setUp__detail">
              Как в окне ( <span>Guest Cards</span> ) добавить еше некоторое
              количество блоков квартир для новых катетжей ?
            </p>
            <img src={setUp} alt="setUp" className="setUp__img" />
          </div>
          <p className="setUp__important--info">
            Самое важное — вам следует уточнить, с какого блока и с какой
            квартиры нужно начать, а также до какого номера нумерация должна
            продолжаться. Далее ваши действия будут следующими:
          </p>
          <div className="setUp__texts--box">
            <p className="setUp__text">
              1) Bыбираем блок в ячейке <span>Building</span>
            </p>
            <p className="setUp__text">
              2) В ячейках от <span>Room No</span>, вводим нумерацию квартир (от
              и до).
            </p>
            <p className="setUp__text">
              3) В ячейке <span>From</span> введите число, с которого должна
              начаться генерация.
            </p>
            <p className="setUp__text">
              4) В ячейке <span>To</span> введите число, на котором генерация
              должна завершиться.
            </p>
            <p className="setUp__text">
              5) Если нужно добавить только одну квартиру, введите одну и ту-же
              цифру на обе ячейки <span>From & To</span>
            </p>
            <p className="setUp__text">
              6) В конце нажимаем на кнопку <span>Save</span> и квартиры
              сгенирируются.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
