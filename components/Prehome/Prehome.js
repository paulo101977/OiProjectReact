
import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import Sidemenu from './Sidemenu';
import PreContent from './PreContent';

class Prehome extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="container-fluid prehome homeanimation">
        
        <div className="background-white"></div>
        
        <div className="row"> 
            <Sidebar></Sidebar>
            
            <Sidemenu></Sidemenu>
        
            <PreContent></PreContent>
            
            
        </div>
    
    </div>
    );
  }
}

export default Prehome;