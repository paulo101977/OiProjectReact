import React, { PropTypes } from 'react';

class Sidemenu extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2  sidebar-home sidebar-menu scrollable-menu sidebar-menu-animation">
                <div id="navbar-dashboard" className="col-xs-6 col-sm-12 col-md-12">
                    <ul className="nav nav-tabs nav-stacked">
                        <div className="section section-menu hide">
                            <div className="selected"></div>
                            
                            <li className="start" role="presentation">
                                <a href="#start">
                                    <div className="start">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <div className="img_container">
                                                    <img className="menu-img" src="svg/home.svg" />
                                                    <div className="exclamation">!</div>
                                                </div>
                                                <div className="menu-item-text">INICÍO</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="telephone" role="presentation">
                                <a href="#telephone">
                                    <div className="telephone">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <img className="menu-img" src="svg/telephone.svg" />
                                                <div className="menu-item-text">FIXO</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="wifi" role="presentation">
                                <a href="#wifi">
                                    <div className="wifi">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <img className="menu-img" src="svg/wifi.svg" />
                                                <div className="menu-item-text">OI WIFI</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="oiplay" role="presentation">
                                <a href="#oiplay">
                                    <div className="oiplay">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <img className="menu-img" src="svg/oiplay.svg" />
                                                <div className="menu-item-text">OI PLAY</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="recharge" role="presentation">
                                <a href="#recharge">
                                    <div className="recharge">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <img className="menu-img" src="svg/recharge.svg" />
                                                <div className="menu-item-text">RECARGA</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="help" role="presentation">
                                <a href="#help">
                                    <div className="help">
                                        <div className="slide menu-item">
                                            <div className="menu-item-align">
                                                <img className="menu-img" src="svg/asks.svg" />
                                                <div className="menu-item-text">DÚVIDAS <br className="break_line"></br><span className="hidden-xs">FREQUENTES</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
  }
}

export default Sidemenu;