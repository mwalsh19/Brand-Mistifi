import React from 'react';
import Logo from './Logo';
import Sizing from './Sizing';
import General from './General-Principles';
import Signifier from './Signifier';
import Alternate from './Alternate-Layout';
import Icon from './Icon';

export default function(props) {
    return (
      <div className="content-box" id="logo">

          <Logo />

          <Sizing />

          <General />

          <Signifier />

          <Alternate />

          <Icon />

      </div>
    );
}