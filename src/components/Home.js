import React from 'react'
import SideDisplay from './SideDisplay';
import CenterPage from './CenterPage';

export default function Home() {
  return (
    <section className='sideContainer'>
        <SideDisplay/>
        <main>
          <CenterPage />
        </main>
      </section>
  )
}
