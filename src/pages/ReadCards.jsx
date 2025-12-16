import readCards from "../assets/images/readCards.jpg";

const ReadCards = () => {
  return (
    <div className="rc">
      <div className="container">
        <h2 className="rc__title title">Read Cards</h2>
        <div className="rc__box">
          <img src={readCards} alt="" className="rc__img" />
          <div className="rc__box--info">
            <h3 className="info__title">Как увидеть информацию ключ карты</h3>
            <p className="info__text">
              1)Тут все просто и кортоко , поставьте на Encoder ту ключ карту от
              которой хотите увидеть информацию.
            </p>
            <p className="info__text">
              2) Нажимаете на кнопку <span>Read Cards</span> и вы увидете
              информацю карты.
            </p>
            <p className="info__text">
              3) Если нужно удалить информацию из ключ карты нажмите на кнопку{" "}
              <span>Delete Card</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadCards;
