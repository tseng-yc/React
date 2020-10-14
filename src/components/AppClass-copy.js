//如果是開發者自訂的元件，檔名開頭第一個字一定要是英文大寫！！
//一個.js檔案，建議寫一個元件就好

//導入React函式庫
import React from 'react';

/* 最簡單元件   extends是繼承的意思
   class App extends React.Component{
   render(){
       return
       <></>
    } 
  }
*/

//繼承類別，繼承React函式庫裡的東西
class AppClass extends React.Component {
  // 建構式的第一行需要使用super呼叫父母類別的建構式
  // super呼叫上層類別得來的建構式
  constructor(props) {
    // 這裡建立狀態的初始化值
    super(props); //建構式裡面有一個狀態，他的初始值是0，狀態是個物件
    this.state = {
      // total: props.initValue,  這是不好的寫法
      total: 0,
    };
  }
  //類別型元件裡面回傳值，render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log(this.props);
    let initValue = this.props.initValue
      ? this.props.initValue
      : this.state.total;
    return (
      <>
        {/* 呈現狀態值要使用this.state.total */}
        <h1>{this.props.title}</h1>
        {/* <h1>{this.state.total}</h1> */}
        <h1>{initValue}</h1>
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    );
  }
}

export default AppClass;
