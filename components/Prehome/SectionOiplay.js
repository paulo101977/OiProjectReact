import React, { PropTypes } from 'react';


class SectionOiplay extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
            <div className="section oiplay">
                    <div className="title">Oi Play</div>
                    <div className="content">
                        <p>Clientes TV HD podem assistir ao melhor do nosso conteúdo no Oi Play.</p>

                        <p className="space-bottom">Quando e onde quiser, direto do seu computador, tablet ou smartphone, podendo acessar de mais de um dispositivo ao mesmo tempo. Divirta-se!</p>
                    </div>
                    <button className="btn_oiplay btn_hover_dash">Conheça o Oi Play</button>
                    <div className="footer">
                        <p>Entre com seu login da Minha Oi.</p>
                    </div>

            </div>
        )
  }
}

export default SectionOiplay;