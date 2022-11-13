import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "FAQ",
            href: "/faq"
        }
    ]

  return (
    <div className='Nav'>
        <div className="logo">Nav</div>
        <div className="NavLinks">
            {navList.map((link) => {
                return(
                    <li>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default Nav