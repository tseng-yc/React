//2020-10-14  4.小時鐘

import React from 'react';

//繼承類別，繼承React函式庫裡的東西
class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  } // @ @ 這個箭頭函式，會把this值傳給tick，就會在這裡綁定了。

  tick() {
    this.setState({ date: new Date() });
  }   /* @ @ tick裡面呼叫了this.setState。如果你在類別行元件要使用this.setState的話要綁定。
        ˇ
     tick=()=> {
     this.setState({ date: new Date() });
   }   最好是這樣寫！！！ */

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  //   componentDidUpdate() {
  //     console.log('componentDidUpdate');
  //     console.log(this.state.total);
  //   }

  render() {
    return <>{this.state.date.toLocaleTimeString()}</>;
  }
}

export default AppClass;
