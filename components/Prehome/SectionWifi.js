import React, { PropTypes } from 'react';


class SectionWifi extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (     
            <div className="section wifi">
                    <div className="wrap">
                        <div className="title">Oi WiFi</div>
                        <div className="content">
                            <p>Busque o hotspot mais perto de você pra se conectar em alta velocidade gratuitamente,
                                sem consumir sua franquia de internet móvel ou celular.</p>

                            <p>São mais de 2 milhões de pontos de acesso em todo o Brasil,
                                entre aeroportos, hotéis, restaurantes, shoppings, cafés e outros locais.
                                É só se cadastrar e aproveitar.</p>
                        </div>
                        <button className="btn_connection btn_hover_dash">Conectar-se</button>
                        <div className="footer">
                            <p>Pra acessar do seu tablet ou smartphone,
                                você pode também baixar o aplicativo mobile nos sistemas Android e iOS.</p>
                        </div>
                    </div>
                </div>
        )
  }
}

export default SectionWifi;