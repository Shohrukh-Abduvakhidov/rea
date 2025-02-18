import "./index.css";
import "./App.css";
import logo from "./assets/INNOMA.VC.png";
import But1 from "./buttons/but-1";
import But2 from "./buttons/but2";
import img1 from "./assets/img-1.png";
import img2 from "./assets/rocket 1.png";
import burger from "./assets/Group 929.png";
import Component1 from "./components/component1";
import icon1 from "./assets/3.png";
import icon2 from "./assets/Vector.png";
import icon3 from "./assets/Vector (1).png";
import video from "./assets/Group 840.png";
import vector1 from "./assets/Vector (2).png";
import vector2 from "./assets/Vector (3).png";
import vector3 from "./assets/Group 670.png";
import cards from "./assets/Group 811.png";
import apex1 from "./assets/apex-1.png";
import apex2 from "./assets/apex-2.png";
import Footer from "./components/component2";
const App = () => {
  return (
    <>
      <header className="lg:h-[600px]  h-auto pb-[100px]" id="back">
        <nav className="w-[80%] justify-between py-[20px] flex gap-[20px] items-center m-auto lg:text-start text-center">
          <img src={logo} alt="" />
          <ul className="lg:flex items-center gap-[30px] md:flex hidden">
            <li className="text-white">Кто мы?</li>
            <li className="text-white">Услуги</li>
            <li className="text-white">Акселератор</li>
            <li className="text-white">Новости</li>
          </ul>
          <But1 text={"Войти"} />
          <img src={burger} alt="" className="md:hidden block" />
        </nav>
        <section className="">
          <aside className="w-[80%] m-auto mt-[50px]">
            <h1 className="text-[#fff] lg:text-[43px] font-bold lg:text-start text-center text-[25px] py-[10px]">
              Запустите <br />
              <span className="p-[10px] bg-[#07AF91] lg:text-start text-center text-white">
                технологический IT-бизнес
              </span>
              <br />
              на международных рынках
            </h1>
            <p className="text-white lg:text-[34px] text-[18px] py-[10px]">
              Открыт набор заявок на акселератор
            </p>
            <But2 text={"Подать заявку"} />
          </aside>
        </section>
      </header>
      <main className="">
        <section className="w-[80%] m-auto mt-[50px] lg:text-start text-center">
          <h1 className="text-[#1178B2] text-[36px] font-bold py-[30px]">
            Наши услуги
          </h1>
          <aside className="flex flex-col-reverse lg:flex-row gap-[20px] items-center">
            <aside className="">
              <p className="text-[#1178B2] text-[24px] font-bold py-[10px]">
                Аналитические исследования
              </p>
              <p className="text-[#000000] text-[20px] py-[10px]">
                Одним из наших ключевых направлений является анализ
                технологических трендов на международных рынках. Мы проводим
                анализ на основе публичных исследований McKinsey, BCG, PWC,
                Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S,
                PitchBook а также агрегируем и анализируем данные из открытых
                международных источников патенты, медиа, научные публикации
              </p>
              <But1 text={"Узнать подробнее"} />
            </aside>
            <img src={img1} alt="" />
          </aside>
        </section>
        <section className="w-[80%] m-auto mt-[100px] lg:text-start text-center">
          <aside className="flex flex-col-reverse lg:flex-row gap-[50px] items-center">
            <img src={img2} alt="" />
            <aside className="">
              <p className="text-[#1178B2] text-[24px] font-bold py-[10px]">
                Онлайн акселератор для IT бизнеса
              </p>
              <p className="text-[#000000] text-[20px] py-[10px]">
                Онлайн программа аскелерации IT бизнеса позволит вашей команде
                открыть новые горизонты и возможности для бизнеса на глобальных
                рынках. В результате программы вы получите возможность
                презентовать свой проект для международных инвесторов и
                локальных партнеров
              </p>
              <But1 text={"Узнать подробнее"} />
            </aside>
          </aside>
        </section>
        <section className="w-[80%] m-auto">
          <h1 className="text-[#1178B2] text-[36px] font-bold py-[30px]">
            Для кого мы?
          </h1>
          <aside className="flex flex-col lg:flex-row md:flex-wrap">
            <Component1
              num={"01"}
              text1={"IT проекты на стадии идеи"}
              text2={
                "Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
              }
            />
            <Component1
              num={"02"}
              text1={"Инновационный бизнес"}
              text2={
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
              }
            />
            <Component1
              num={"03"}
              text1={"Корпорации"}
              text2={
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
              }
            />
          </aside>
        </section>
        <section className="w-[100%] lg:h-[400px] h-auto" id="back-2">
          <aside className="w-[80%] m-auto text-center pt-[50px] pb-[50px]">
            <h1 className=" font-bold text-[#fff] p-[5px] bg-[#07AF91] text-[25px] lg:text-[40px]">
              Научитесь исследовать иностранные рынки и откройте новые
              возможности для своего бизнеса
            </h1>
            <p className="text-[#fff] text-center lg:text-[24px] text-[14px] py-[10px]">
              Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
              Латинской Америки и Африки
            </p>
            <But2 text={"Получить консультацию"} />
          </aside>
        </section>
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            С какими рынками мы работаем?
          </h2>

          <div className="flex space-x-4 flex-wrap my-[20px] mb-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Ближний восток
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold">
              Азия
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold">
              Латинская Америка
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold">
              Африка
            </button>
          </div>
          <div className="flex gap-[50px] flex-col lg:flex-row">
            <section className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold">
                ЧЕМ ИНТЕРЕСЕН <br />{" "}
                <span className="text-green-500">РЫНОК MENA:</span>
              </h3>
              <p className="text-gray-700 mt-2 py-[20px]">
                ОАЭ, Саудовская Аравия, <br /> Израиль, Оман, Бахрейн, <br />{" "}
                Катар, Тунис, Йемен, Египет, Алжир
              </p>
              <But2 text={"Выйти на рынок"} />
            </section>
            <div className="grid lg:grid-cols-2  md:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                <p className="text-4xl font-bold text-[#1178B280]">
                  &gt;5,5 Млрд
                </p>
                <p className="text-gray-600">Инвестиции pre-seed, seed</p>
              </div>
              <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                <p className="text-4xl font-bold text-[#1178B280]">&gt;300</p>
                <p className="text-gray-600">Акселераторов, инкубаторов</p>
              </div>
              <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                <p className="text-4xl font-bold text-[#1178B280]">73</p>
                <p className="text-gray-600">Венчурных фонда</p>
              </div>
              <button className="bg-blue-700 text-white p-6 rounded-lg font-semibold flex justify-center items-center">
                Скачать отчет по рынку MENA
              </button>
            </div>
          </div>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-700">
              Об акселераторе IT бизнеса
            </h3>
            <p className="text-gray-700 mt-3">
              Программа акселератора рассчитана на 8 недель интенсивного
              онлайн-курса с вебинарами приглашённых экспертов по международным
              рынкам, разбором ваших идей и проектов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-100 p-6 rounded-lg text-center flex flex-col justify-center items-center shadow-md">
                <img src={icon1} alt="" />
                <p className="text-gray-700">Месяца обучения</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center flex flex-col justify-center items-center shadow-md">
                <img src={icon2} alt="" />
                <p className="text-gray-700">Приглашённые эксперты</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center flex flex-col justify-center items-center shadow-md">
                <img src={icon3} alt="" />
                <p className="text-gray-700">Персональный менеджер</p>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full">
          <img src={video} alt="" className="w-[90%] m-auto mt-[100px]" />
        </section>
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Программа акселератора
          </h2>

          <div className="space-y-4">
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">Модуль 1</h3>
              <p className="text-gray-700 flex-1 ml-4">
                Тенденции и тренды современного мира
              </p>
              <span className="text-white text-2xl bg-[#2A79C2] rounded-[50%] px-[5px]">
                ▾
              </span>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">Модуль 2</h3>
              <p className="text-gray-700 flex-1 ml-4">
                Стартап подход к созданию международного IT продукта
              </p>
              <span className="text-white text-2xl bg-[#2A79C2] rounded-[50%] px-[5px]">
                ▾
              </span>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">Модуль 3</h3>
              <p className="text-gray-700 flex-1 ml-4">
                Бизнес моделирование и поиск Product Market Fit
              </p>
              <span className="text-white text-2xl bg-[#2A79C2] rounded-[50%] px-[5px]">
                ▾
              </span>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">Модуль 4</h3>
              <p className="text-gray-700 flex-1 ml-4">
                Определение рынка, поиск и исследование Целевой аудитории
              </p>
              <span className="text-white text-2xl bg-[#2A79C2] rounded-[50%] px-[5px]">
                ▾
              </span>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">Модуль 5</h3>
              <p className="text-gray-700 flex-1 ml-4">
                Что такое MVP и почему это важно
              </p>
              <span className="text-white text-2xl bg-[#2A79C2] rounded-[50%] px-[5px]">
                ▾
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start">
            <button className="text-blue-700 font-semibold underline mb-4">
              Демо день
            </button>
            <But2 text={"Получить полную программу"} />
          </div>
        </div>

        <section className="w-full lg:h-[500px] h-auto py-[50px]" id="back-4">
          <aside className="flex flex-col lg:flex-row w-[90%] m-auto items-center">
            <aside className="lg:w-[556px]">
              <h1 className="text-[#fff] text-[40px] font-bold ">
                Попадите на радары инвесторов и партнеров
              </h1>
              <p className="text-[#fff] text-[18px] py-[20px]">
                В результате прохождения обучения мы создадим профили вашей
                компании на всех международных скаутинговых площадках
              </p>
              <But1 text={"Записаться в акселератор"} />
            </aside>
            <img src={cards} alt="" className="lg:py-0 py-[50px]" />
          </aside>
        </section>
        {/* stop */}
        <section className="w-[85%] m-auto mt-[100px]">
          <h1 className="text-[#1178B2] text-[36px] font-bold">
            Что вы получите в результате?
          </h1>
        </section>
        <section className="grid lg:grid-cols-3 md:grid-cols-3  w-[90%] m-auto mt-[20px]">
          <Component1
            num={"01"}
            text1={"Документы по продукту"}
            text2={
              "Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP"
            }
          />
          <Component1
            num={"02"}
            text1={"Обратная связь от рынка"}
            text2={
              "Проведение исследования целевой аудитории позволит сформировать Product market fit"
            }
          />
          <Component1
            num={"03"}
            text1={"Продвижение продукта"}
            text2={"Продвижение продукта через аналитические системы партнеров"}
          />
          <Component1
            num={"04"}
            text1={"Подписка на отчеты"}
            text2={
              "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
            }
          />
          <Component1
            num={"05"}
            text1={"Подписка на отчеты"}
            text2={
              "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
            }
          />
          <Component1
            num={"06"}
            text1={"Подписка на отчеты"}
            text2={
              "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
            }
          />
        </section>

        <section className="py-12 w-[80%] m-auto bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 text-start mb-8">
              Стоимость
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={vector1}
                    alt="Market Analysis"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Анализ международных рынков
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>1. Анализ конкурентов</li>
                  <li>2. Анализ инвесторов</li>
                  <li>3. Размеры рынка (TAM, SAM, SOM)</li>
                  <li>4. Анализ СМИ</li>
                  <li>5. Анализ запросов в сети интернет</li>
                  <li>6. Проведение каст дева</li>
                </ul>
                <p className="text-gray-600">
                  Готовность: <strong>7 раб. дней</strong>
                </p>
                <p className="text-gray-600">
                  Язык: <strong>рус./англ.</strong>
                </p>
                <p className="text-xl font-bold text-blue-600 my-4">$1 000</p>
                <button className="w-full bg-[#016CA8] text-white py-2 rounded-lg">
                  Оставить заявку
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={vector2}
                    alt="Startup Package"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Упаковка стартапа под локальные рынки
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>1. Анализ локальных рынков</li>
                  <li>2. Бизнес план</li>
                  <li>3. Питч презентация</li>
                  <li>4. Финансовый план</li>
                  <li>5. Расчет юнит экономики</li>
                  <li>6. Проведение каст дева</li>
                </ul>
                <p className="text-gray-600">
                  Готовность: <strong>7 раб. дней</strong>
                </p>
                <p className="text-gray-600">
                  Язык: <strong>рус./англ.</strong>
                </p>
                <p className="text-xl font-bold text-blue-600 my-4">$1 000</p>
                <button className="w-full bg-[#016CA8] text-white py-2 rounded-lg">
                  Оставить заявку
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={vector3}
                    alt="Business Accelerator"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">
                  Акселератор вашего бизнеса
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>1. Онлайн доступ к курсам</li>
                  <li>2. Документы для бизнеса</li>
                  <li>3. Питч презентация</li>
                  <li>4. Демо день</li>
                  <li>5. Продвижение по результатам</li>
                  <li>6. Проведение каст дева</li>
                </ul>
                <p className="text-gray-600">
                  Готовность: <strong>7 раб. дней</strong>
                </p>
                <p className="text-gray-600">
                  Язык: <strong>рус./англ.</strong>
                </p>
                <p className="text-xl font-bold text-blue-600 my-4">$1 000</p>
                <button className="w-full bg-[#016CA8] text-white py-2 rounded-lg">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[85%] m-auto mt-[100px]">
          <h1 className="text-[#1178B2] text-[36px] font-bold">Кто мы?</h1>
        </section>
        <section className="w-[90%] m-auto flex flex-col lg:flex-row gap-[20px] items-center">
          <img src={apex1} alt="" />
          <aside className="lg:w-[585px]">
            <p className="text-[20px]">
              <span className="text-[#1178B2]">INNOMA.VC</span> - Международное
              аналитическое агентство по запуску IT бизнеса на локальных рынках
              регионов Азии, Ближнего Востока, Латинской Америки, Африки. <br />{" "}
              <br /> Наша команда состоит из профессионалов своего дела и
              основной нашей целью является помощь IT компаниям получить
              необходимые знания и пакеты документов, чтобы успешно запустить
              свой продукт на международных рынках.
            </p>
          </aside>
        </section>
        <section className="w-[80%] mt-[100px] m-auto flex flex-col lg:flex-row gap-[50px] items-center">
          <img src={apex2} alt="" />
          <aside className="lg:w-[585px]">
            <p className="text-[20px]">
              Всем привет! <br /> Меня зовут Роман. Последние 6 лет я являюсь
              частью инновационной экосистемы СНГ, прошел путь от проектного
              менеджера до руководителя продукта по автоматизированному
              скаутингу и скорингу стартапов. За 6 лет работы я увидел множество
              ошибок и отсутствие ориентации акселерационных программ под
              запросы стартапов. Все акселераторы выполнялись ради акселераторв
              и выполнения КПЭ.
            </p>
            <p className="text-[20px] py-[20px]">
              <span className="font-bold">Роман Гайн Роман Гайн</span> <br />{" "}
              Основатель INNOMA.VC
            </p>
          </aside>
        </section>
      </main>
      <Footer/>
    </>
  )

}

export default App;
