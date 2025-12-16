import { useState } from "react";
import closeImg from "../assets/images/close.svg";



const ModalWindow = () => {
  const [close, setClose] = useState(true);

  return (
    <div className={`mention ${close ? "" : "close"}`}>
      <div className="container">
        <div className="mention__box">
          <h2 className="mention__title">!! Упоминание !!</h2>
          <p className="mention__subTitle">
            В этой иикипедии мы подробно свами изучим как пользоватся со СКУД
          </p>
          <img
            src={closeImg}
            alt="close__img"
            className="mention__close"
            onClick={() => setClose(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
