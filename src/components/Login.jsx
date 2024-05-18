import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8090/api/customer/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);
                if (res.data.message === "Wrong Email") {
                    alert("Email does not exist");
                }
                else if (res.data.message === "Login Success") {
                    navigate('/Home');
                }
                else {
                    alert("Email and password dont match");
                }
            }, fail => {
                console.error(fail);
            });
        } catch (err) {
            alert(err);
        }
    }
  
    return (
        <div>
            <div class="container">
                <div class="Row">
                    <h1>Login</h1>
                    <hr />
                </div>
                <div class="Row">
                    <div class="column">
                        <form>
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
                            <button type="submit" class="btn btn primary" onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Login;