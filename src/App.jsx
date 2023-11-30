
import './App.css'
import Apples from './Apples'
import Bag from './Bag'
import Pears from './Pears'
import Card from './Card'
import persones from "./persones"
import logo from './assets/react.svg'
import Crypto from './Crypto'
import Btn from './Btn'
import ModeToggler from './ModeToggler'
const Logo =(props) =>{
  return (
    <div>
      <img src={props.avatar} alt="" style={{width:"600px",height:"600px" ,backgroundColor:"pink"}} />
    </div>
  )
}
function App() {

// const hello = () =>{
//   alert("hello")
// }
  return (
      <>
        {/* <Bag children={<Apples color="red" number="5"/>} /> */}

          {/* <Card person={persones[0]}/>
          <Card person={persones[1]}/>
          <Card person={persones[2]}/>
          <Card person={persones[3]}/>
          <Card person={persones[4]}/> */}
      {/* <Btn greating={hello} color="blue"/> */}
      {/* <Btn /> */}

        {/* <Logo avatar={logo}/> */}

        {/* <Crypto /> */}

        <ModeToggler/>
      </>

  )
}

export default App
