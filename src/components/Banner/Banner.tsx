import React, { useState } from 'react'
import { Link } from '@reach/router'
import cn from 'classnames'
import SkipLink from '../../components/SkipLink'

type BannerProps = {
  links?: { name: string; path: string }[]
}

const Banner: React.FC<BannerProps> = ({ links }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <SkipLink />
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1 className="h5 m-0">a11y</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(prev => !prev)}
          aria-controls="appbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="appbarNav"
          role="navigation"
          className={cn('collapse navbar-collapse', { show: !isCollapsed })}
        >
          {links && (
            <ul className="navbar-nav">
              {links.map(link => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={'nav-link'}
                    onClick={() => setIsCollapsed(true)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Banner
