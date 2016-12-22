import React, { PropTypes } from 'react';


class SectionStart extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (                
        <div className="section start">
            <div className="title" data-toggle="popover" data-placement="top" data-content="Nova mensagem">
                <div className="popover">
                    <div className="arrow"></div>
                    <div className="popover-content">Nova mensagem</div>
                </div>
                Oi, Washington
            </div>
            <div className="content">
                <p>O seu novo serviço ainda está sendo cadastrado na Minha Oi.</p>

                <p>Em breve, você terá acesso online a todos os serviços e facilidades da Minha Oi. Aproveite enquanto isso pra tirar suas dúvidas e descubra como a Oi pode te deixar mais conectado.</p>

            </div>
            <div className="footer">
                <button className="btn_start">Receber código no celular</button>
                <div className="link_after">
                    <a href="#">Quero fazer depois</a>
                </div>
            </div>
        </div>
       )
  }
}
        
export default SectionStart;       
