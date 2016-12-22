
import React, { PropTypes } from 'react';


class Index extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 sidebar">
                    <div className="col-xs-9 col-sm-1 col-md-1 col-lg-1 col-lg-12">
                        <img className="img-mask" src="svg/oi_logo.svg" />
                    </div>

                    <div className="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                        <div className="sidebar_text">
                            CRIE SUA SENHA
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <form name="form_login">
                        <div className="col-md-12 item-row">
                            <div className="email-name">E-mail</div>
                            <input name="email" className="email vertical-align-items" maxLength="255" value="washington_loureiro@gmail.com" disabled/>
                        </div>

                        <div className="col-sm-12 col-md-12 item-row">
                            <div className="col-xs-8 col-md-8 col-lg-8 vertical-align-items inline">
                                <input id="password" name="password" className="password" maxLength="10" type="password" placeholder="Senha" />
                            </div>
                            <div className="col-xs-4 col-md-8 col-lg-4 vertical-align-items checkbox-container inline margin-right">
                                <div className="float-right">
                                    <input id="show" className="check without-eye" type="checkbox" />
                                    <label className="text-show" htmlFor="show">mostrar</label>
                                </div>
                                <div className="eye_visible">
                                    <input id="eye" type="checkbox" className="eye_style" />
                                    <label htmlFor="eye"></label>
                                </div>
                            </div>

                            <div className="password-after">
                                Senha
                            </div>

                            <div className="error-message">
                                Mensagem de erro
                            </div>
                        </div>
        
                        <div className="col-xs-12 col-md-12 item-row item-last">
                            <div className="col-xs-10  col-md-10 col-lg-11 vertical-align-items inline">
                                <input className="btn-continue item-last vertical-align-items" type="button" value="Continuar"/>
                            </div>
                            <div className="col-xs-2 col-md-2 col-lg-1 vertical-align-items inline">
                                <div className="img-container">
                                    <img className="arrow-continue" src="svg/next.svg"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
  }
}

export default Index;