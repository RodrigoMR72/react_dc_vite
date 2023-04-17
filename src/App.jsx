import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputText} from './components/inputText'
import {MyTitle} from './components/myTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <MyTitle title='Olá mundo, meu nome é Rodrigo!!!'/>
    {/* <h1></h1> */}

    <InputText 
      id='nome'
      name='nome'
      placeholder='Nome'/>

    {/* <input type="text" name="nome" id="nome" placeholder='Nome'/> */}
    <br />

    <InputText  
      id='sobrenome'
      name='sobrenome'
      placeholder='Sobrenome'/>
    {/* <input type="text" name="sobrenome" id="sobrenome" placeholder='Sobrenome'/> */}

    </>
)}

export default App
