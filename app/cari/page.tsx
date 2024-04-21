'use client'
import React, { useState } from 'react'
import SectionResult from './sectionResult'
import SectionUsers from './sectionUsers'

export default function Page() {

  const [query, setQuery] = useState('')

  const onSearch = (e:any) => {
    e.preventDefault()

    const input = e.target[0].value

    setQuery(input)
  }

  return (
    <div>
      <div className='container py-10 px-20'> 
        <form onSubmit={onSearch}>
            <input type="text" className='mb-5 bg-slate-50 border-cyan-500' placeholder='Cari user GitHub'
            onChange={(e) => e.target.value === '' && setQuery(e.target.value)}

            style={
              {
                width: '300px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                outline: 'none',
                marginRight: '10px',
                marginTop: '10px'
              }
            }
            
            />
            <button style={
              {
                // craete style botton blue
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
              }
            }>
                Cari Orang
            </button>
        </form>

        {query ? <SectionResult query={query} /> : <SectionUsers />}
      </div>
    </div>
  )
}
