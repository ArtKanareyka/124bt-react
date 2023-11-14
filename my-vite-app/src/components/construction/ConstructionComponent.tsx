import React, { useState, useEffect, useRef } from 'react'
import './ConstructionComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faTools,
  faHouseCircleCheck,
  IconDefinition,
  faHammer,
} from '@fortawesome/free-solid-svg-icons'

interface СonstructionCard {
  title: string
  links: { displayText: string; path: string }[]
  icon: IconDefinition
}

const СonstructionComponent: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const СonstructionCards: СonstructionCard[] = [
    {
      icon: faHammer,
      title: 'Строительство',
      links: [
        { displayText: 'Ссылка 1', path: 'https://example.com/link1' },
        { displayText: 'Ссылка 2', path: 'https://example.com/link2' },
        { displayText: 'Ссылка 3', path: 'https://example.com/link3' },
      ],
    },
    {
      icon: faTools,
      title: 'Ремонт помещений',
      links: [
        { displayText: 'Ссылка 4', path: 'https://example.com/link4' },
        { displayText: 'Ссылка 5', path: 'https://example.com/link5' },
        { displayText: 'Ссылка 6', path: 'https://example.com/link6' },
      ],
    },
    {
      icon: faHouseCircleCheck,
      title: 'Обслуживание зданий',
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
    <section className="construction-container">
      <h2 className="construction-title">
        Строительство, ремонт и обслуживание
      </h2>
      <div className="construction-cards">
        {СonstructionCards.map((card, index) => (
          <article key={index} className="construction-card">
            <FontAwesomeIcon icon={card.icon} size="3x" /> {/* Иконка */}
            <h3>{card.title}</h3>
            <div className="construction-links-dropdown" ref={dropdownRef}>
              <button
                className="construction-dropdown-button"
                onClick={() => toggleDropdown(index)}
              >
                Ссылки <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {activeCardIndex === index && (
                <div className="construction-dropdown-content">
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

export default СonstructionComponent
