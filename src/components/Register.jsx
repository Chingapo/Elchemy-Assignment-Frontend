import { useState } from "react";
import axios from "axios";


function Register() {

    const [customername, setCustomername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
           await axios.post("http://localhost:8090/api/customer/save", {
                customername: customername,
                email: email,
                password: password,
            });
            alert("Customer Registration successfully !");
        } catch (err) {
            alert(err);
        }
    }


    return (
        <div>
            <div class="container">
                <div className="card">
                    <h1>Customer Registration</h1>
                    <form>
                        <div class="form-group">
                            <label>Customer Name</label>
                            <input type="text" class="form-control" id="customername" placeholder="Enter Name"
                                value={customername}
                                onChange={(event) => {
                                    setCustomername(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter Password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>
                        <button type="submit" class="btn btn primary" onClick={save}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;