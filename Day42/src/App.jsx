
import './App.css'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'
import Task6 from './Task6'
import Task7 from './Task7'

function App() {

  return (
    <>
     <Task1/>
     <Task2/>
     <Task3 message={"sangavi"}/>
     <Task4 text="press"/>
     <Task5 children="hii how are you!!!"/>
     <Task6  name='sangavi' age= '22' />
     <Task7/>
    </>
  )
}

export default App
