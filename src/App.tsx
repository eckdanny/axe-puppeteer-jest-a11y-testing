import React, { useContext } from 'react'
import { Router } from '@reach/router'
import NavContext from './NavContext'
import Banner from './components/Banner'

const App: React.FC = () => {
  const links = useContext(NavContext)
  return (
    <div>
      <div role="banner">
        <Banner links={links} />
      </div>
      <div role="main" id="main-content" className="flex-shrink-0 py-3">
        <Router>
          {links.map(({ component: Tag, ...props }) => (
            <Tag key={props.path} {...props} />
          ))}
        </Router>
      </div>
    </div>
  )
}

export default App
