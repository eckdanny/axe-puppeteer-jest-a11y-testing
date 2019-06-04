import React from 'react'
import Home from './modules/Home'
import Content from './modules/Content'
import Markup from './modules/Markup'
import Colors from './modules/Colors'
import Form from './modules/Form'

type NavRoute = {
  name: string
  path: string
  component: React.ComponentType | any
}

const navContext = React.createContext<NavRoute[]>([
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Content',
    path: '/content',
    component: Content,
  },
  {
    name: 'Markup',
    path: '/markup',
    component: Markup,
  },
  {
    name: 'Color',
    path: '/color',
    component: Colors,
  },
  {
    name: 'Form',
    path: '/form',
    component: Form,
  },
])

export default navContext
