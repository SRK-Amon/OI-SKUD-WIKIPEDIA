import fc_img from "../assets/images/functionCards.jpg";

const FunctionCards = () => {
  return (
    <div className="fc">
      <div className="container">
        <h2 className="fc__title title">Function Cards</h2>
        <div className="fc__box">
          <img src={fc_img} alt="function_cards_image" className="fc__img" />
          <div className="fc__box--info">
            <h3 className="info__title">
              Если нужно изменить нумерацию комнаты.
            </h3>
            <p className="info__text">
              1) Активируем галочку в «
              <span className="info__text--skyblue">Setup Room</span>»
            </p>
            <p className="info__text">
              2) После нажимает на кнопочный-рисунок с изображением бинокля и
              выбираем блок с номером комнаты.
            </p>
            <p className="info__text">
              3) Ложим новую ключ карту к Encoder-у и нажимаем на кнопку «
              <span className="info__text--skyblue">Setup Card</span>»
            </p>
            <p className="info__text">
              4) Также вам нужно сделать обычную ключ карту на эту-же дверь
              чтобы сразу проверить откроет или нет.
            </p>
            <h3 className="info__title">
              Каждые 3 месяца нужно обновлять чип дверей
            </h3>
            <p className="info__text">
              Оно нужно чтобы дверь работала быстро и без глюков , Ваши
              дейсвтия:
            </p>
            <p className="info__text">
              1) Положите на Encoder новую ключ карту и нажмите на кнопку «
              <span className="info__text--skyblue">Clock Card</span>»
            </p>
            <p className="info__text">
              2) После этого вы прикладываете ключ карту ко всем дверям катеджей
            </p>
          </div>
          <p className="fc__text">
            <span>Не забывайте !!</span> мы это делаем чтобы во дверях время
            обновилось на текушее и вы должны прикладывать ключ карту только на
            один блок. К примеру A10 , там 12 квартир и после того как вы
            обновили время этих квартир , возвращяетесь в офис и пересоздаете
            новую Clock Card карту. Таким образом продолжая все блоки один за
            одним.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunctionCards;
