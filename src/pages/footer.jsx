import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-16 py-8">
          <div>
            <Link to={"/tutorial"}>Tutorial</Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/tutorial"}>X</Link>
            <Link to={"/tutorial"}>Linkedin</Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/blog"}>Blogs</Link>
            <Link to={"/Github"}>Github</Link>
          </div>
        </div>
  )
}

export default Footer
