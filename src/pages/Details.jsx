import initialWindow from "../assets/images/Initial_window.png";

const Details = () => {
  return (
    <div className="details">
      <div className="container">
        <div className="details__box">

          <h2 className="details__title title">Основные функции</h2>
          <p className="details__subTitle">
            которые должен знать сотрудник reception(администратор)
          </p>
          <img src={initialWindow} alt="" className="details__img"/>
        </div>
      </div>
    </div>
  );
};

export default Details;
