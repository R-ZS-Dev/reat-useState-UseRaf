
// Use useRef to get any element reference & display the input type data in console

import { useRef } from "react"


const App = () => {
  const inputRef = useRef(null);
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={()=>{console.log(inputRef.current.value);   
      }}>Submit</button>
    </>
  )
}

export default App





// pass a function using props
// DStructing in the props parameter

// import { useState } from "react";
// import FirstComponent from "./conponents/FirstComponent";

// const App = () => {
//   const [a, setA] = useState(0);
//   const hereClick = () => {
//     console.log("Clicked Number one");
//     setA(a+1);
//     console.log(a);
//   }
//   return (
//     <>
//       <button onClick={()=>{hereClick()}}>CLICK ON BOMB</button>
//       <FirstComponent data={a} fn={setA}/>
//     </>
//   )
// }
// export default App




// import { useState } from "react";

// const App = () => {
//   const [a, setA] = useState(0);
//   const hereClick = () => {
//     console.log("Clicked Number one");
//     setA(a+1);
//     console.log(a);
//   }
//   return (
//     <>
//       {a}
//       <button onClick={()=>{hereClick()}}>CLICK ON BOMB</button>
//       <FirstComponent data={a} />
//     </>
//   )
// }

// export default App






// const App = () => {
//   var a = 1;
//   const hereClick = () => {
//     console.log("Clicked Number one");
//     a++;
//     console.log(a);
//   }
//   return (
//     <>
//       {a}
//       <button onClick={()=>{hereClick()}}>CLICK ON BOMB</button>
//       <FirstComponent data={a} />
//     </>
//   )
// }
// export default App




// const App = () => {
//     const boy = "hello"
//   return (
//     <>
//       {boy==="hello"?<h1>How are you</h1> : <h1>I am doing well</h1>}
//     </>
//   )
// }
// export default App




// const App = () => {
//   const a = "Harry Potar";
//   const abc = ["Harry Potar 1", "Who are you", "Where are you"];
//   return (
//     <>
//       {a}
//       {abc.map((hello)=>{return <h2>{hello}</h2>})}
//     </>
//   )
// }
// export default App