import React from 'react'
import cn from 'classnames'
import Styles from './SkipLink.module.scss'

type SkipLinkProps = React.HtmlHTMLAttributes<HTMLAnchorElement> & {
  // Nothing here yet
}

const SkipLink: React.FC<SkipLinkProps> = () => {
  return (
    <a href="#main-content" className={cn(Styles.SkipLink)}>
      Skip to main content
    </a>
  )
}

export default SkipLink
