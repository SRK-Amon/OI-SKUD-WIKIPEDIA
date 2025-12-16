import logIn from "../assets/images/logIn.jpg";

const LogIn = () => {
  return (
    <div className="logIn">
      <div className="conatiner">
        <div className="logIn__box">
          <h2 className="logIn__title title">Вход в систему СКУД</h2>
          <div className="logIn__box--info">
            <p className="logIn__text">
              После открытия окна входа в систему , введите ваш (
              <span>User name</span>) и (<span>Password</span>).
              <span className="logIn_additionalText">
                после входа , вам откроется первоночальное окно.{" "}
              </span>
            </p>
            <img src={logIn} alt="Login_to_SKUD" className="logIn__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
