import React, { useState, useEffect } from 'react';

function Register(props) {
  return (
    <>
      {/* <h1>會員註冊頁面</h1> */}

      <div className="container">
        <form>
          <div className="htmlForm-group">
            <label htmlFor="exampleInputEmail1">帳號</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">姓名</label>
            <input
              type="text"
              className=" form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="text"
              className=" form-control"
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
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">確認密碼</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <button type="button" className="btn btn-primary">
            註冊
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
