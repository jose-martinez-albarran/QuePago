import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlusSquare, faQrcode} from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel'



const home = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item id="section-im2">

    <Carousel.Caption>
      <h2 className="section1hb">Cansado de Cuentas olvidadas</h2>
      <h5>CONOCE MÁS</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item id="section-im1">


    <Carousel.Caption>
      <h2 className="section1ha">Cansado de Largas filas</h2>
      <h5>CONOCE MÁS</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item id="section-im3">

    <Carousel.Caption>
      <h2 className="section1hc">Cansado de Servicios vencidos</h2>
      <h5>CONOCE MÁS</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div className="jumbotron section-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 homewidget section-3">
              <span className="circle">
              <FontAwesomeIcon className="iconeM" icon={faUserPlus} />
              </span>
              <h2 className="section2-h">Paso 1</h2>
              <h3>Registraté en la aplicación.</h3>
            </div>
            <div className="col-sm-4 homewidget section-3">
              <span className="circle">
              <FontAwesomeIcon className="iconeM" icon={faPlusSquare} />
              </span>
              <h2 className="section2-h">Paso 2</h2>
              <h3>Da de alta tus servicios, pagos recurrentes.</h3>
            </div>
            <div className="col-sm-4 homewidget section-3">
              <span className="circle">
              <FontAwesomeIcon className="iconeM" icon={faQrcode} />
              </span>
              <h2 className="section2-h">Paso 3</h2>
              <h3>Guarda tu codigo QR y paga en tu centro más cercano.</h3>
            </div>
          </div>
        </div>
      </div>


      
      <div className="site-content">
        <div className="container">
          <div className="section-wide">
            <div className="row">
              <div className="section-title col-12 section-4">
                <h2>Ultimos Servicios incorporados</h2>
              </div>
              <div className="container row section-4p">
                <div className="col-sm-3 col-6 portbox">
                  <img
                    className="img-fluid1"
                    src="https://www.vectorlogo.es/wp-content/uploads/2018/04/logo-vector-att.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-3 col-6 portbox">
                  <img
                    className="img-fluid1"
                    src="https://thumb.lovemondays.com.br/image/57eb4e51c90249199419bbb865611a0b/logos/795385/comision-federal-de-electricidad.png"
                    alt=""
                  />
                </div>
                <div className="col-sm-3 col-6 portbox">
                  <img className="img-fluid1" src="https://www.energiaynegocios.com.ar/wp-content/uploads/2018/07/logo-naturgy.jpg" alt="" />
                </div>
                <div className="col-sm-3 col-6 portbox">
                  <img
                    className="img-fluid1"
                    src="https://www.izzi.mx/izzi/v3/img/logos/izzi-dark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom" className="section6">
        <div className="container">
          <div className="row">
            <div className="botwid col-6 col-lg-4 widget_text">
              <h3 className="bothead">QuéPago</h3>
              <div className="textwidget">
                <p>
                  Agrega y guarda de una forma sencilla los pagos que a ti
                  importan. Llevalos contigo en todo momento y paga en el centro
                  más cercano, nosotros nos encargamos de recordarte.
                </p>
              </div>
            </div>
            <div className="botwid col-6 col-lg-4 widget_meta ">
              <h3 className="bothead">Servicios</h3>
              <ul className="section6cl">
                <li><a href="#"> ATT </a></li>
                <li><a href="#"> CFE </a></li>
                <li>
                  <a
                    href="#"
                    title="Powered by WordPress, state-of-the-art semantic personal publishing platform."
                  >
                    TELMEX
                  </a>
                </li>
              </ul>
            </div>
            <div className="botwid col-6 col-lg-4 widget_archive">
              <h3 className="bothead">Opiniones</h3>
              <ul className="section6cl">
                <li>
                  <a href="#"
                    >El Negro José - <em> "Lo mejor de mi vida" </em></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
