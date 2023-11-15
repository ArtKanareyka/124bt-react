// Licenses.tsx

import React from 'react'
import './Licenses.scss'

interface License {
  id: number
  image: string
  title: string
  text: string
}

const licenseData: License[] = [
  {
    id: 1,
    image: './sro-na-proektirovku-elektrosetey.jpg',
    title: 'Проектное СРО',
    text: 'Текст до 25 млн',
  },
  {
    id: 2,
    image: './svidetelstvo-na-proektirovku.jpg',
    title: 'Строительное СРО',
    text: 'до 60 млн',
  },
  {
    id: 3,
    image: './OPS-licenziya.jpg',
    title: 'МЧС',
    text: '12 категорий',
  },
]

const Licenses: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Разрешительные лицензии</h1>
      <div className="licenses">
        {licenseData.map((license) => (
          <div className="license-item" key={license.id}>
            <h3>{license.title}</h3>
            <p>{license.text}</p>
            <img
              src={license.image}
              alt={`Лицензия ${license.id}`}
              className="license-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Licenses
