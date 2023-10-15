import React, { FC, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { useContext } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import HeaderAuth from './components/HeaderAuth';
import MainPageAuth from './pages/mainPageAuth';
const App: FC = () => {
  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [store])

  if (!store.isAuth) {
    return (
      <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='LoginForm' element={<LoginForm />} />
          <Route path='/RegistrationForm' element={<RegistrationForm />} />
        </Routes>
      </>)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPageAuth />} />
        <Route path='LoginForm' element={<LoginForm />} />
        <Route path='/RegistrationForm' element={<RegistrationForm />} />
      </Routes>
    </>
  )


}

export default observer(App);
