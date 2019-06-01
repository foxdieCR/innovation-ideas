import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Layout from './components/layout'
import Home from './components/Home'
import GenerateLink from './components/GenerateLink'

import './App.css'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route component={ScrollToTop} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/links" exact component={GenerateLink} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
