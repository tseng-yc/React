//BMI線上計算應用
import React,{useState} from 'react';

function App12(props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi,setBmi] = useState('');
  const calcBMI = (h,w)=>
    w > 0 && h > 0 ? (w/Math.pow(h/100,2)).toFixed(2) : 0;
  return (
    <>
      請輸入你的身高(cm)：
      <br />
      <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} />
      <br />
      請輸入你的體重(kg)：
      <br />
      <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} />
      <br />
      <button onClick={() => setBmi(calcBMI(+height,+weight))}>計算</button>
      <br />
      您的BMI值為 : {bmi}
    </>
  );
}

export default App12;

// function App12(props){
//     const [height,setHeight] = useState(0);
//     const [weight,setWeight] = usestate(0);
//     const BMI = weight>0 && height>0 ? (weight/(height*0.01)^2).toFixed(2) :0
//     return (
//       <>
//         請輸入你的身高(cm)：
//         <input type="text" value={height}></input>
//         <br/>
//         請輸入你的體重(kg)：
//         <input type="text" value={weight}></input>
//         <br/>
//         <button onClick={(enent)=>{

//         }}>計算</button>
//         <br/>
//         您的BMI值為{}
//       </>
//     );
// }