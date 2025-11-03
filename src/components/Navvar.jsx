import React from 'react'
import { navLinks } from '../constants'

export const Navvar = () => {
  return (
    <div>
        <header>
            <nav>
                <img src='/logo.svg' alt='Apple logo'/>

                <ul>
                    {navLinks.map(({label})=>{
                      return  <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    })}
                </ul>
                <div className='flex-center gap-3'>
                    <button>
                        <img src='/search.svg' alt='search' />
                    </button>
                      <button>
                        <img src='/cart.svg' alt='Cart' />
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}
