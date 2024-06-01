import './App.css'
import { Header, Content, Footer } from './layout'
import { HomePage } from './page'

function App() {

  return (
    <div className='text-pretty antialiased'>
      <Header />
      <Content>
        <HomePage />
      </Content>
      <Footer />
    </div>

  )
}

export default App
