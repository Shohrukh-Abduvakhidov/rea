import footerImg from '../assets/Group 870.png';
import "../index.css"
import icon from "../assets/INNOMA.VC.png";

const Footer = () => {
  return (
    <footer className="w-full mt-[100px] h-[220px] md:py-0 py-5 flex lg:flex-row flex-col md:h-[145px]" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${footerImg})`}}>
      <div className="w-[90%] md:w-[70%] h-[145px] m-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <img src={icon} alt="" className="w-[100px] md:w-auto" />
          <p className="text-gray-500 text-center md:text-left">Все права защищены</p>
        </div>
        <ul className="flex list-none gap-[30px] text-white text-center md:text-left">
          <li>Кто мы?</li>
          <li>Услуги</li>
          <li>Акселератор</li>
          <li>Новости</li>
        </ul>
        <div className="text-gray-500 text-center md:text-left">
          <p>Dubai, Single Business Tower <br /> 1503, Business Bay</p>
          <p>Sales@innoma.vc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
