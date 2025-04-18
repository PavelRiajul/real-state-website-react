
import About from './components/About'
import Contact from './components/Contact'
import FacebookMsg from './components/FacebookMsg';
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Contact/>
      <FacebookMsg/>
    </div>
  )
}

export default App