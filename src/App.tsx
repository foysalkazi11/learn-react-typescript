import { useState } from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Heading from './components/Heading';
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status';
// import HeadingWrper from './components/HeadingWrper';
// import Button from './components/Button';
// import Input from './components/Input'

// import Container from './components/Container';
// import User from './components/User';
// import DomRef from './components/DomRef';
// import MutableRef from './components/MutableRef';
// import Private from './components/profile/Private';
// import Profile from './components/profile/Profile';

// const personInfo = {
//   firstName:"Md Foysal",
//   lastName:"Kazi"
// }

import List from './components/list/List'

const presonList = [
    {
      firstName:"Md Foysal",
      lastName:"Kazi"
    },
    {
      firstName:"Md Rasel",
      lastName:"Kazi"
    },
    {
      firstName:"Md Ibrahim",
      lastName:"Kazi"
    },
]

// const click = (e:React.ReactNode,id:number) => {
//   console.log(e.target,id);
  
// }

function App() {
  const [inputValue,setInputValue] = useState<string> ("")
  return (
    <div className="App">

      {/* <Greet name={"kazi"} messageCount={20}  isLogin={false}/>
      <Person name={personInfo} />
      <PersonList list={presonList} />
      <Status status="loading" />
      <Heading>Some Heading</Heading>
      <HeadingWrper>
        <Heading>Again Heading</Heading>
      </HeadingWrper>
      <Greet name={"kazi"}   isLogin={true}/> */}
{/* 
      <Button handleClick={(e,id)=>console.log(id)
      } />
      <Input handleChange={(e)=> setInputValue(e.target.value)
      } value={inputValue} />
      <Container style={{border:"1px solid black",padding:"1rem",width:500,maxWidth:"100%",margin:"1rem auto"}} />
      <User />
      <DomRef />
      <MutableRef />

      <Private isLogin={true} component={Profile} /> */}
      {/* <List itmes={presonList} onClick={(item)=>console.log(item)
      } /> */}
      
    </div>
  );
}

export default App;
