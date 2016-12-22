import React, { PropTypes } from 'react';

class Sidebar extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (

            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 sidebar sidebar-home sidebar_animation">
                <div className="col-xs-9 col-sm-1 col-md-1 col-lg-1 logo-container">
                    <img className="home_logo" src="svg/oi_logo.svg" />
                </div>
                <div className="col-xs-3 col-sm-1 col-md-1 col-lg-1 exit_text">
                    Sair
                </div>
            </div>
        )
  }
}

export default Sidebar;