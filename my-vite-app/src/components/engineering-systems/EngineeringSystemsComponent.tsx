import React, { useState, useEffect, useRef } from 'react'
import './EngineeringSystemsComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faFan,
  faToilet,
  IconDefinition,
  faTemperatureArrowUp,
  faTruckDroplet,
  faPlugCircleCheck,
  faFireExtinguisher,
} from '@fortawesome/free-solid-svg-icons'

interface EngineeringSystemsCard {
  title: string
  links: { displayText: string; path: string }[]
  icon: IconDefinition
}

const EngineeringSystemsComponent: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const engineeringsystemsCards: EngineeringSystemsCard[] = [
    {
      icon: faTemperatureArrowUp,
      title: 'Отопление',
      links: [
        { displayText: 'Ссылка 1', path: 'https://example.com/link1' },
        { displayText: 'Ссылка 2', path: 'https://example.com/link2' },
        { displayText: 'Ссылка 3', path: 'https://example.com/link3' },
      ],
    },
    {
      icon: faTruckDroplet,
      title: 'Водоснабжение',
      links: [
        { displayText: 'Ссылка 4', path: 'https://example.com/link4' },
        { displayText: 'Ссылка 5', path: 'https://example.com/link5' },
        { displayText: 'Ссылка 6', path: 'https://example.com/link6' },
      ],
    },
    {
      icon: faPlugCircleCheck,
      title: 'Электромонтаж',
      links: [
        { displayText: 'Ссылка 7', path: 'https://example.com/link7' },
        { displayText: 'Ссылка 8', path: 'https://example.com/link8' },
        { displayText: 'Ссылка 9', path: 'https://example.com/link9' },
      ],
    },
    {
      icon: faFan,
      title: 'Монтаж систем вентиляции',
      links: [
        { displayText: 'Ссылка 1', path: 'https://example.com/link1' },
        { displayText: 'Ссылка 2', path: 'https://example.com/link2' },
        { displayText: 'Ссылка 3', path: 'https://example.com/link3' },
      ],
    },
    {
      icon: faFireExtinguisher,
      title: 'Пожарная безопасность и видеонаблюдение',
      links: [
        { displayText: 'Ссылка 4', path: 'https://example.com/link4' },
        { displayText: 'Ссылка 5', path: 'https://example.com/link5' },
        { displayText: 'Ссылка 6', path: 'https://example.com/link6' },
      ],
    },
    {
      icon: faToilet,
      title: 'Канализация',
      links: [
        { displayText: 'Ссылка 7', path: 'https://example.com/link7' },
        { displayText: 'Ссылка 8', path: 'https://example.com/link8' },
        { displayText: 'Ссылка 9', path: 'https://example.com/link9' },
      ],
    },
  ]

  const toggleDropdown = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveCardIndex(null)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section className="engineering-systems-container">
      <h2 className="engineering-systems-title">Инженерные сети и системы</h2>
      <div className="engineering-systems-cards">
        {engineeringsystemsCards.map((card, index) => (
          <article key={index} className="engineering-systems-card">
            <FontAwesomeIcon icon={card.icon} size="3x" /> {/* Иконка */}
            <h3>{card.title}</h3>
            <div
              className="engineering-systems-links-dropdown"
              ref={dropdownRef}
            >
              <button
                className="engineering-systems-dropdown-button"
                onClick={() => toggleDropdown(index)}
              >
                Ссылки <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {activeCardIndex === index && (
                <div className="engineering-systems-dropdown-content">
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.displayText}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EngineeringSystemsComponent
