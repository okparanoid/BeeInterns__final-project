import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

import './MenuComponent.scss'

export default function MenuComponent() {
  function showSettings (event) {
    event.preventDefault();
  }

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right>
      <Link id="home" to="/">Home</Link>
      <Link id="matchs" to="/">Matchs</Link>
      <Link id="settings" to="/">Settings</Link>
      <Link id="chat" to="/">Chat</Link>
      <a onClick={() => showSettings } className="menu-item--small" href="/">Settings</a>
    </Menu>
  );
}