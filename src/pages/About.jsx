import man_teaching from "../assets/images/man_teaching.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__box">
          <h2 className="about__title title">Что такое SKUD ?</h2>
          <div className="about__card">
            <img src={man_teaching} alt="" className="about__img" />
            <p className="about__text">
              СКУД — это система, которая управляет доступом на объект. Она
              определяет, кто может входить, открывает двери или турникеты и
              фиксирует посещения. Решение для повышения безопасности и удобства
              контроля.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
