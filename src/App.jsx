import { Route, Routes } from 'react-router-dom'

import AllRepository from './Components/AllRepository'
import ErrorPage from './Components/ErrorPage'
import Modal from './Components/Modal'
import Navbar from './Components/Navbar'
import React from 'react'
import SingleRepository from './Components/SingleRepo'

const App = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Navbar setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
      <Routes>
        <Route element={<AllRepository />} path="/" />
        <Route element={<SingleRepository />} path="/single/:id" />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
