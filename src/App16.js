//2020-10-15  1.bootstrap整合範例-登入表單
// 導入其它的模組
import React from 'react';
import { FaReact } from 'react-icons/fa';

function App16(props) {
  return (
    <>
      <div className="container">
        <dir className="row">
          <FaReact color="#bb0" size="50px" />
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small
                id="emailHelp"
                className="form-text text-muted"
                style={{ color: 'red', fontSize: '18px' }}
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </dir>
      </div>
    </>
  );
}

// 輸出元件(函式)
export default App16;
