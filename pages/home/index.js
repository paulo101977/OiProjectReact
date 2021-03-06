/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Router, Route, Link, browserHistory } from 'react-router'
import React, { PropTypes } from 'react';
import Prehome from '../../components/Prehome';
import Index from '../../components/Index';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {


  render() {
    return (
        <Prehome></Prehome>
    );
  }

}

export default HomePage;
