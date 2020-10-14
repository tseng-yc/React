//2020-10-14  1.生命周期方法-類別型元件
//如果是開發者自訂的元件，檔名開頭第一個字一定要是英文大寫
//一個.js檔案，建議寫一個元件就好

//導入React函式庫
import React from 'react'
/* 最簡單元件   extends是繼承的意思
   class App extends React.Component{
   render(){
       return
       <></>
    } 
  }
*/

//繼承類別，繼承React函式庫裡的東西
class AppClassLife extends React.Component {
  // 建構式的第一行需要使用super呼叫父母類別的建構式
  // super呼叫上層類別得來的建構式
  constructor(props) {
    // 這裡建立狀態的初始化值
    super(props); //建構式裡面有一個狀態，他的初始值是0，狀態是個物件
    this.state = {
      total:0,
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.log(this.state.total);
  }




  // 類別型元件裡面回傳值，render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log('render');

    return (
      <>
        
        <button onClick={() => {this.setState({ total: 2 })}}>
          Change State
        </button>
        
      </>
    );
  }
}

export default AppClassLife