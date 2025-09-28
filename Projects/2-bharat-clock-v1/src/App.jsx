import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrTime from './components/CurrTime'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrTime></CurrTime>
  </center>
}

export default App
