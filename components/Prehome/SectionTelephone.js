import React, { PropTypes } from 'react';


class SectionTelephone extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (            
            <div className="section telephone">
                <div className="title">Fixo</div>
                <div className="content">
                    <p>Contratou um novo Fixo da Oi?  Então agora é só aguardar a sua instalação.</p>

                    <p>Siga o passo a passo da sua visita técnica pra começar a falar ilimitado com qualquer Oi.</p>
                </div>
                <button className="btn_installation btn_hover_dash">Acompanhe a Instalação</button>
            </div>
        )
  }
}

export default SectionTelephone;