import guestCards from "../assets/images/guestCards.jpg";
import square_white from "../assets/images/square_white.png";
import square_green from "../assets/images/square_green.png";
import guest__encodeCards from "../assets/images/guest_cards_newEncode.png";
import card_encode from "../assets/images/card_encoder.png";

const GuestCards = () => {
  return (
    <div className="guest">
      <div className="container">
        <div className="guest__box">
          <h2 className="guest__title title">Guest Cards</h2>
          <div className="guest__box--rooms">
            <img src={guestCards} alt="" className="guest__img" />
            <p className="rooms__info">
              <span>ЗАПОМИНАЕМ !</span>
              Каждый блок — это набор квартир, и каждая из них играет свою роль
              в системе. К примеру: кто в ней живёт, с какой даты проживают и
              какая нумерация квартиры у клиентов.
            </p>
          </div>
          <div className="guest__box--squares">
            <div className="squares__box">
              <img
                src={square_white}
                alt="squares__white"
                className="squares__img"
              />
              <p className="squares__text">
                - Белый блок означает, что эта квартира пустая и на неё ещё не
                создана ключ карта.
              </p>
            </div>
            <div className="squares__box">
              <img
                src={square_green}
                alt="squares__green"
                className="squares__img"
              />
              <p className="squares__text">
                - Зеленый блок означает, что в квартире проживает клиент и на
                эту дверь открыта ключ карта.
              </p>
            </div>
          </div>
          <h2 className="guest__title title">Как создать ключ-карту? </h2>
          <p className="guest__text-extraInfo">
            Ключ-карта создаётся в том случае, если клиент оформил договор, либо
            если он уже является арендатором квартиры и потерял свою ключ-карту.
          </p>
          <div className="guest__box--encode">
            <img
              src={guest__encodeCards}
              alt="Guest-Cards-New-Encode-Card"
              className="encode__img"
            />
            <div className="encode__box--texts">
              <p className="encode__text">
                1) В ячейке «
                <span className="encode__text--gold">Building</span>» выбираем
                блок, указанный в договоре.
              </p>
              <p className="encode__text">
                2) В ячейке «
                <span className="encode__text--skyblue">Room No</span>» вводим
                номер квартиры, указанный в договоре.
              </p>
              <p className="encode__text">
                3) В ячейке «
                <span className="encode__text--gold">Number of Nights</span>»
                вводим количество дней, указанное в договоре.
              </p>
              <p className="encode__text">
                4) В ячейке «
                <span className="encode__text--skyblue">Guest Name</span>»
                записываем Ф.И.О нанимателя, указанное в договоре.
              </p>
              <p className="encode__text">
                5) В ячейке «
                <span className="encode__text--gold">Guest ID</span>» вводим
                паспортные данные, указанные в договоре (нам нужна только ID).
              </p>
              <p className="encode__text">
                6) В завершении этой секции кладём новую ключ-карту на
                устройство Encoder.
              </p>
              <div className="encode__box--instruction">
                <img
                  src={card_encode}
                  alt="card_encode"
                  className="instruction__img"
                />
                <p className="instruction__text">
                  <span>Card Encode</span> — это устройство для передачи данных
                  на ключ-карту, чтобы она могла открывать дверь квартиры.
                </p>
              </div>
              <p className="encode__text">
                И нажимаете на кнопку «
                <span className="encode__text--skyblue">New Encode</span>»,
                после чего ключ-карта создаётся и передаётся владельцу квартиры.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCards;
