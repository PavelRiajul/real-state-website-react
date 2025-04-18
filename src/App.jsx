
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App