import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    return (
        <>
            <div className="wrapper" style={{backgroundImage: 'images/bg-registration-form-1.jpg'}}>
                <div className="inner">
                    <div className="image-holder">
                        <img
                            src="https://github.com/Asrorjon-coder/social.uz/blob/master/signup/images/bg-registration-form-1.jpg?raw=true"
                            alt=""/>
                    </div>
                    <Form method="post" action="/signup">
                        <h3>Registration Form</h3>
                        <Form.Group>
                            <input type="text" name="user[first]" placeholder="First Name" className="form-control"/>
                            <input type="text" name="user[last]" placeholder="Last Name" className="form-control"/>
                        </Form.Group>
                        <div className="form-wrapper">
                            <input type="text" name="user[username]" placeholder="Username" className="form-control"/>
                            <i className="zmdi zmdi-account"/>
                        </div>
                        <div className="form-wrapper">
                            <input type="text" name="user[email]" placeholder="Email Address" className="form-control"/>
                            <i className="zmdi zmdi-email"/>
                        </div>
                        <div className="form-wrapper">
                            <select name="user[gender]" id="" className="form-control">
                                <option value="" disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="femal">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <i className="zmdi zmdi-caret-down" style={{fontSize: '17px'}}/>
                        </div>
                        <div className="form-wrapper">
                            <input type="password" name="user[password]" placeholder="Password"
                                   className="form-control"/>
                            <i className="zmdi zmdi-lock"/>
                        </div>
                        <div className="form-wrapper">
                            <input type="password" name="pasword" placeholder="Confirm Password"
                                   className="form-control"/>
                            <i className="zmdi zmdi-lock"/>
                        </div>
                        <Button>Register
                            <i className="zmdi zmdi-arrow-right"/>
                        </Button>
                    </Form>
                </div>
            </div>
            {/*
            <div className="parent-div d-flex align-items-center
        justify-content-center" style={{height: '70vh'}}>
                <div className="child-div">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Chooser the username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
*/}
        </>
    );
}

export default Signup;