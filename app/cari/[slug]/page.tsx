import React, { Suspense } from 'react'
import RepoList from './sectionRepository'

async function getUser(param : string) {
    const res = await fetch(`https://api.github.com/users/${param}`)

    return res.json()
}


export default async function DetailCari({params} : {params : {slug : string}}) {
  const dataUser = await getUser(params.slug)

  return (
    <div>
      <h3>
        Detail User : {params.slug}
      </h3>

      <div>
        {JSON.stringify(dataUser)}
      </div>
      <div style={
        {
          marginTop : '20px',
        }
      }>
        <Suspense fallback={<div>Loading dulu bos wkwkk...</div>}>
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  )
}
