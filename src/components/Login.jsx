import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    console.log(signIn)

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleLoginWithGoogle = () =>{
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" required className="input input-bordered" />
                                <Link to='/register'>
                                    <button className="btn btn-active btn-link">New In Auth Firebase? Please Register</button>
                                </Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>
                        <button onClick={handleLoginWithGoogle} className="btn btn-primary">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;