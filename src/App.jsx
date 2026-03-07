import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Tickets from './components/Tickets'
import Footer from './components/Footer'

const ticketsPromise = fetch('/tickets.json')
  .then(res => res.json())
  //.then(data => console.log(data))
  .catch(err => console.log(err))

function App() {

  return (
    <>
      <Navbar />

      {/* <Dashboard ticketsPromise={ticketsPromise} /> */}

      <Suspense fallback={<h2>Loading...</h2>}>
        <Tickets ticketsPromise={ticketsPromise} />
      </Suspense>

      <Footer></Footer>

    </>
  )
}

export default App
