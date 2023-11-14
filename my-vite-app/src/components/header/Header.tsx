import React from 'react'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img
            className="header-logo"
            src="/favicon.png"
            alt="Логотип Базовые Технологии"
          />
          <a className="header-link" href="/">
            <h1 className="header-title">Базовые технологии</h1>
          </a>
        </div>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
              <a className="header-link" href="/about">
                О нас
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="/contact">
                Контакты
              </a>
            </li>
            <li className="header-item">
              <address>
                <a className="header-link" href="tel:+73919891467">
                  +7 (391) 989-14-67
                </a>
              </address>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
