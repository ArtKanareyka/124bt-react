import React from 'react'
import AdvantagesList from '../advantages/AdvantagesList'
import EngineeringComponent from '../engineering/EngineeringComponent'
import ConstructionComponent from '../construction/ConstructionComponent'
import EngineeringSystemsComponent from '../engineering-systems/EngineeringSystemsComponent'
import Licenses from '../licenses/Licenses'
const Main: React.FC = () => {
  return (
    <main>
      <AdvantagesList />
      <EngineeringComponent />
      <ConstructionComponent />
      <EngineeringSystemsComponent />
      <Licenses />
    </main>
  )
}

export default Main
