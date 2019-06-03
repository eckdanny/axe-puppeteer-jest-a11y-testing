import React from 'react'
import Styles from './AnchorLink.module.scss'

type AnchorLinkProps = React.HTMLAttributes<HTMLHeadingElement> & {
  id: string
  tag?: any // lazy
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  tag: Tag,
  id,
  children,
  ...props
}) => {
  return (
    <Tag {...props} id={id}>
      {children}
      <a href={`#${id}`} aria-label="Anchor" className={Styles.Link}>
        #
      </a>
    </Tag>
  )
}

AnchorLink.defaultProps = {
  tag: 'div',
}

export default AnchorLink
