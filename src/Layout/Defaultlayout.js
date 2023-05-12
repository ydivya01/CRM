import React from 'react';
import { Headercomp } from './Header';
import { Footercomp } from './Footer';



export const Defaultlayout = ({ children })=> {
  return (
    <div className='default-layout'>
      <header className="header mb-3">
        <Header />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}
