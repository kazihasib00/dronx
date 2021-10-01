import * as React from 'react'

import Header from './components/Header/Header'
import TeamInfo from './components/TeamInfo/TeamInfo'
import Problems from './components/Problems/Problems'
import Dashboard from './components/Dashboard/Dashboard'
import Nasa from './components/Nasa/Nasa'

import './App.css'

export default function App() {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
        <TeamInfo />
      </section>

      <section>
        <Problems />
      </section>

      <section>
        <Dashboard />
      </section>

      <section>
        <Nasa />
      </section>
    </div>
  )
}
