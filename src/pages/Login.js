import React, { useState, useEffect } from 'react';

function Login(props) {
  const { isAuth, setIsAuth } = props;
  //   console.log(props);
  return (
    <>
      <h1>會員登入登出</h1>
      <h3>目前會員狀態:{isAuth ? '登入' : '登出'}</h3>
      <button
        onClick={() => {
          setIsAuth(true);
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setIsAuth(false);
        }}
      >
        登出
      </button>

      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">帳號</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">密碼</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              記得我
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            登入
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
