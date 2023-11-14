import React from 'react'
import './AdvantagesList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types' // Add this import
import {
  faFileSignature,
  faScrewdriverWrench,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'

interface Advantage {
  icon: IconDefinition
  title: string
  description: string
  additionalInfo: string
}

const AdvantagesList: React.FC = () => {
  const advantages: Advantage[] = [
    {
      icon: faFileSignature,
      title: 'Разработка документации',
      description:
        'Разработка проектной документации, инженерные расчеты, строительный инжиниринг, технический надзор',
      additionalInfo:
        'Аттестованные инженеры состоящие в региональном СРО гос образца',
    },
    {
      icon: faScrewdriverWrench,
      title: 'Строительство и ремонт',
      description:
        'Строительство и отделка, зданий, сооружений и жилых домов, монтаж внутренних и наружных инженерных систем и сетей',
      additionalInfo:
        'Квалифицированные снабженцы и субподрядчики имеющие допуски',
    },
    {
      icon: faToolbox,
      title: 'Техническое обслуживание',
      description:
        'Плановое и круглосуточное аварийно-техническое обслуживание зданий, сооружений и инженерных систем',
      additionalInfo:
        'Аварийные бригады с необходимым комплектом инструментов и оборудования',
    },
  ]

  return (
    <section className="advantages-list">
      <h1 className="advantages-title">
        Опыт ведущих инженеров на основе современного оборудования, материалов и
        технологий
      </h1>
      <div className="advantage-cards">
        {advantages.map((advantage, index) => (
          <article key={index} className="advantage-card">
            <FontAwesomeIcon icon={advantage.icon} size="3x" />
            <h2 className="advantage-title">{advantage.title}</h2>
            <p className="advantage-description">{advantage.description}</p>
            <hr />
            <small className="advantage-additionalInfo">
              {advantage.additionalInfo}
            </small>
          </article>
        ))}
      </div>
      <p className="advantages-p">
        Строительная компания "Базовые Технологии" предлагает отличные решения
        для предприятий, организаций и частных клиентов. Вы можете заказать
        оборудование, а также услуги по проектированию, монтажу или обслуживанию
        инженерных сетей и систем. Благодаря нашей помощи вы решите различные
        задачи, среди которых:
      </p>
    </section>
  )
}

export default AdvantagesList
