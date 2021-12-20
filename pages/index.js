import Head from 'next/head'
import { useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Main from '../component/Main';
const App=()=> {

  
  
  return (
    <>
      <Head>
        <title>Magic 8 Ball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>
      <Main/>
      <Footer/>
      
    </>
  )
}
export default App