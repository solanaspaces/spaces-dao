import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <>
      <div>
        <p className="mb-5">
          Welcome to Spaces, please log in with your wallet to access your DAO.
        </p>
        <p>
          Find a DAO{' '}
          <Link className="text-purple" href="/realms">
            <a
              href="/realms"
              className="text-dark-theme-secondary-1-dark visited:text-dark-theme-secondary-1-dark"
            >
              here.
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Homepage
