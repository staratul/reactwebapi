import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [employees, setEmployees] = useState([]);

  const url = "https://localhost:44393/";

  const submitHandler = (e) => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Mobile: mobile,
      Type: "Add",
    };

    const config = {
      headers: {
        Authorization: "Bearer sdkfjsdfjlkj29384ksdfksd",
      },
    };

    axios
      .post(`${url}api/Employee/AddEmployee`, data, config)
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1 className="text-danger">Web API CURD Operation</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  placeholder="Mobile"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-info mt-4"
                  onClick={(e) => submitHandler(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
