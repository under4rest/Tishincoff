import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import map from '../../img/Map.png'
import vk from '../../img/vk.svg'
import wa from '../../img/whatsapp.svg'
import insta from '../../img/instagram.svg'
import './master.css'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default class ConstactsScreen extends React.Component {
  render() {
    return (
      <>
        <div className="holder contacts_screen">
          <ScrollToTopOnMount />
          <div className="absolute_bg under " />
          <Container>
            <div className="contact_holder">
              <div className="contact_phone">
                <h3 className="contacts_name">Тишин Сергей Владимирович</h3>
                <p>Основатель компании</p>
              </div>
              <h3 className="contacts_name">+7 (900) 000-00-00</h3>
            </div>
            <div className="contact_holder">
              <div className="contact_phone">
                <h3 className="contacts_name">Аполонова Евгения Викторовна</h3>
                <p>Руководитель коммерческого отдела</p>
              </div>
              <h3 className="contacts_name">+7 (900) 000-00-01</h3>
            </div>
            <div className="contact_holder">
              <div className="contact_phone">
                <h3 className="contacts_name">Краснов Александр Васильевич</h3>
                <p>Руководитель сервисного центра</p>
              </div>
              <h3 className="contacts_name">+7 (900) 000-00-02</h3>
            </div>
            <h3 className="contact_text_number">Номер Приема Заявок Кофе и Чая</h3>
            <div className="contact_text_holder">
              <h3 className="contact_phone">+7 (900) 000-00-02</h3>
              <h3 className="contact_phone">+7 (900) 000-00-02</h3>
            </div>
            <h3 className="contact_text_address">Адрес</h3>
            <p className="contact_text_address_p">Управление по приволжскому федеральному округу 428000,<br />  Чувашская Республика, г. Чебоксары, ул. Гагарина, д. 55, офис 307</p>
          </Container>
          <img src={map} className="contact_img_map" />
          <Container>
            <p className="contact_text_address_p contact_description">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «КИРА»<br />Полное наименование: ООО «КИРА»<br />ИНН/КПП: 2130159370/213001001<br />ОГРН: 1152130011010<br />Юридический адрес: 428000, Чувашская Республика, г. Чебоксары, ул. Текстильщиков, д. 13 «А»<br />р/с № 40702810616100031005<br />банк : ПАО АКБ «АВАНГАРД»<br />к/с 30101810000000000201<br />БИК 044525201<br />г. Москва, Садовническая ул., д.12, стр.1 Директор, Тишин Сергей Владимирович действующий на основании Устава<br />Тел: +7(927)99-54-999<br />e-mail:290401@list.ru</p>
            <div className="contact_brand_logo_holder">
              <img src={vk} className="contact_brand_logo" />
              <img src={wa} className="contact_brand_logo" />
              <img src={insta} className="contact_brand_logo" />
            </div>
          </Container>
        </div>
      </>
    )
  }
}