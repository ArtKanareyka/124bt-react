import React, { useEffect, useState } from 'react'
import './Footer.scss' // Подключите ваши стили
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVk,
  faSquareYoutube,
  faSquareOdnoklassniki,
} from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 1100 // Измените этот порог по вашему усмотрению

      setShowFooter(scrolled > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const socialIcons = [
    { icon: faVk, title: 'VK', link: 'https://vk.com/bazovie_tehnologii' },
    {
      icon: faSquareYoutube,
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCtpgCIFXJrtpt8bja26i8sA',
    },
    {
      icon: faSquareOdnoklassniki,
      title: 'Odnoklassniki',
      link: 'https://ok.ru/group/58234031833134/',
    },
  ]
  return (
    <>
      <div
        style={{ height: showFooter ? '200px' : '0' }}
        aria-hidden="true"
      ></div>
      <footer className={`footer ${showFooter ? 'visible' : ''}`}>
        <div className="footer-content">
          <div className="logo-container">
            <img
              src="/bazovye-tehnologii-logo.png"
              alt="Логотип Базовые Технологии"
            />
          </div>
          <div className="contact-info">
            <h3>Контакты</h3>
            <address>
              <p>
                Email: <a href="mailto:info@124bt.ru">info@124bt.ru</a>
              </p>
              <p>
                Телефон: <a href="tel:+73919891467">+7 (391) 989-14-67</a>
              </p>
            </address>
          </div>
          <div className="location-info">
            <h3>Местоположение</h3>
            <address>
              <p>г. Красноярск</p>
              <p>ул. Новая Заря 20, ст. 1</p>
            </address>
          </div>
          <div className="supply-info">
            <h3>Снабжение</h3>
            <p>
              <a
                href="https://magazin.124bt.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Оборудование
              </a>
            </p>
            <p>
              <a
                href="https://baza.124bt.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Стройматериалы
              </a>
            </p>
          </div>
          <div className="blog-container">
            <h3>Блог</h3>
            <address className="social-icons">
              {socialIcons.map((socialIcon, index) => (
                <a
                  key={index}
                  href={socialIcon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={socialIcon.title}
                >
                  <FontAwesomeIcon icon={socialIcon.icon} size="2x" />
                </a>
              ))}
            </address>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
