import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import './master.css'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default class AboutScreen extends React.Component {
  render() {
    return (
      <>
        <div className="holder contacts_screen">
          <ScrollToTopOnMount />
          <div className="absolute_bg under " />
          <div className="about_main_holder">
            <h1 className="about_h1">все, что нужно.</h1>
            <p className="about_h1_description">из одних рук для ведения чайно-кофейного бизнеса в кафе, кофейнях, ресторанах и чайных магазинах.</p>
          </div>
          <Container>
            <div className="about_description_block">
              <h3 className="about_h3">зерновой кофе собственной обжарки.</h3>
              <p className="about_h3_description">Каждую минуту по всей России люди выпивают более 100 чашек чая и кофе от компании Tishincoff. Присоединяйтесь к более чем 300 довольных партнеров, которые выбирают нас за качество и вкус.</p>
              <p className="about_h3_description">Мы имеем все для того, чтобы ваше заведение только процветало, ведь продажа кофе оптом – это то, чем мы занимаемся на протяжении 12 лет. Представляем широкий ассортимент: кофейных смесей, ароматизированного кофе, кофе без кофеина, моносорта, кофе класса премиум, ямайка блюмаунтин, копи лювуак.</p>
            </div>
            <div className="about_description_block last">
              <h3 className="about_h3">чай с лучших плантаций мира.</h3>
              <p className="about_h3_description">Итак, вы решили купить чай оптом и ищете надежного поставщика? Tishincoff предлогает вам лучшие сорта чая класса «премиум», отличающиеся превосходными вкусовыми качествами, богатым и насыщенным цветом и незабываемым ароматом. Наша продукция поставляется из надежных и проверенных источников: с самых знаменитых плантаций Индии, Китая, Японии, Шри-Ланки.</p>
              <p className="about_h3_description">Качество нашего чая контролируется на каждом этапе производства: от выбора чайного листа, его хранения до первого глотка. Мы знаем как сохранить его вкус.</p>
            </div>
            <h1 className="about_h1">Немного<br /> о  нашей компании</h1>
            <div className="about_flex_row_wrap">
              <div className="about_half_item">
                <h3 className="about_h4">«СВОЙ ПОСТАВЩИК»</h3>
                <p className="about_h3_description">У каждого уважающего себя ресторана, кафе или бара должен быть «свой» поставщик чая и кофе. Такая компания где рады вашему звонку. Где счастливы, когда вы получаете прибыль, и готовы вам в этом помогать. Такой поставщик знает ваш бизнес и вас лично, живётвашими интересами, относится к работе более ответственно. Свой поставщик — это как личный врач.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">12 лет на рынке</h3>
                <p className="about_h3_description">У каждого уважающего себя ресторана, кафе или бара должен быть «свой» поставщик чая и кофе. Такая компания где рады вашему звонку. Где счастливы, когда вы получаете прибыль, и готовы вам в этом помогать. Такой поставщик знает ваш бизнес и вас лично, живётвашими интересами, относится к работе более ответственно. Свой поставщик — это как личный врач.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">Нам важно дарить эмоции</h3>
                <p className="about_h3_description">У каждого уважающего себя ресторана, кафе или бара должен быть «свой» поставщик чая и кофе. Такая компания где рады вашему звонку. Где счастливы, когда вы получаете прибыль, и готовы вам в этом помогать. Такой поставщик знает ваш бизнес и вас лично, живётвашими интересами, относится к работе более ответственно. Свой поставщик — это как личный врач.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">Продукт на 100%</h3>
                <p className="about_h3_description">У каждого уважающего себя ресторана, кафе или бара должен быть «свой» поставщик чая и кофе. Такая компания где рады вашему звонку. Где счастливы, когда вы получаете прибыль, и готовы вам в этом помогать. Такой поставщик знает ваш бизнес и вас лично, живётвашими интересами, относится к работе более ответственно. Свой поставщик — это как личный врач.</p>
              </div>
            </div>
            <h1 className="about_h1">9 причин,<br /> по которым компания TISHINCOFF достойна вашего доверия:</h1>
            <div className="about_flex_row_wrap">
              <div className="about_half_item">
                <h3 className="about_h4">1. ОПЫТ И НАДЕЖНОСТЬ</h3>
                <p className="about_h3_description">Работу с нами оценили более 300 клиентов. Входим в топовые позиции по поставкам чая и кофе как по ПФО (Приволжский Федеральный округ) так и по РФ в целом.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">2. КОФЕ</h3>
                <p className="about_h3_description">Мы поставляем только натуральный кофе класса премиум. Свежая обжарка зерен и доставка потребителю.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">3. ЧАЙ</h3>
                <p className="about_h3_description">Для производства чая используется бережно собранное сырье высшего качества с лучших плантаций мира.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">4. НАШИ ЦЕНЫ</h3>
                <p className="about_h3_description">Чашка лучшего эспрессо от 8 рублей. Чайник чая 500 мл от 10 рублей.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">5. КАЧЕСТВО</h3>
                <p className="about_h3_description">Мы педантичны в своей работе, поэтому в обязательном порядке проводим тщательный контроль качества на каждом этапе производства.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">6. ОБОРУДОВАНИЕ</h3>
                <p className="about_h3_description">Продажа и монтаж кофейного оборудования от ведущих производителей.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">7. ДЕГУСТАЦИЯ</h3>
                <p className="about_h3_description">Мы приедем к вам в офис, кафе, бар, ресторан и проведем бесплатную дегустацию кофе и чая.</p>
              </div>
              <div className="about_half_item">
                <h3 className="about_h4">8. СЕРВИС</h3>
                <p className="about_h3_description">Гарантийное и постгарантийое обслуживание кофемашин. Сервисное обслуживание для клиентов компании БЕСПЛАТНОЕ.</p>
              </div>
              <div className="about_half_item last">
                <h3 className="about_h4">9. УДОБСТВО</h3>
                <p className="about_h3_description">Работа с персональным менеджером, который будет полностью координировать работу.</p>
              </div>
            </div>
            <h3 className="contact_text_number">Номер Приема Заявок Кофе и Чая</h3>
            <div className="contact_text_holder">
              <h3 className="contact_phone">+7 (900) 000-00-02</h3>
              <h3 className="contact_phone">+7 (900) 000-00-02</h3>
            </div>
            <h3 className="contact_text_address">Адрес</h3>
            <p className="contact_text_address_p">Управление по приволжскому федеральному округу 428000,<br />  Чувашская Республика, г. Чебоксары, ул. Гагарина, д. 55, офис 307</p>
            <div className="about_end" />
          </Container>
        </div>
      </>
    )
  }
}