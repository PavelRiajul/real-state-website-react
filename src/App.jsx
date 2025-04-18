
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App