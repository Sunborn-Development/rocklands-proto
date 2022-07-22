import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import icon from '../assets/images/link.png'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">トップ</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/guide">営業時間・ご利用案内</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/price">料金</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/access">アクセス</Link></li>
                <li><a href="https://ec.rocklands.tokyo/" target="_blank">ウェブショップ<img src={icon} /></a></li>
            </ul>
  {/*
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
            */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
