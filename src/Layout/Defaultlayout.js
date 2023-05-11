import React from 'react';
import {Headercomp} from './Header';
import {Footercomp} from './Footer';
import { Dashboard } from '../Page/entry/Dashboard';

export const Defaultlayout = ()=> {
  return (
    <div className='default-layout'>
        <div className='header'>
        <Headercomp />
        </div>
        Defaultlayout
        <main className="main">
        <Dashboard />
        </main>
        <div className='footer'>
            <footer/>
        </div>
        </div>
  )
}
