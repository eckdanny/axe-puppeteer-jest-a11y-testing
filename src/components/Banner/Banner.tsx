import React from 'react'
import { Link } from '@reach/router'
import SkipLink from '../../components/SkipLink'

type BannerProps = {
  links?: { name: string; path: string }[]
}

const Banner: React.FC<BannerProps> = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <SkipLink />
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1 className="h5 m-0">a11y</h1>
        </Link>
        <div role="navigation" className="collapse navbar-collapse">
          {links && (
            <ul className="navbar-nav">
              {links.map(link => (
                <li key={link.path} className="nav-item">
                  <Link to={link.path} className={'nav-link'}>
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
