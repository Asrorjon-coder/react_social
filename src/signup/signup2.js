import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import rgform2 from "./images/mifi-bg-4.jpg"
import {Container, Form} from "react-bootstrap";
import React from "react";

function Signup1() {
    React.useEffect(() => {
        function handleResize() {
            var h = window.innerHeight;
            var w = window.innerWidth;
            const par = document.querySelector("#parent");
            const form = document.querySelectorAll("#f");
            par.setAttribute('style', `margin-left: ${5*w / 12}px;
                                                        margin-top: ${h / 3}px;
                                                        border: 5px solid black;
                                                        width: ${w / 6}px;
                                                        padding-right: 40px; 
                                                        padding-left: 40px;
                                                        padding-top: 40px;
                                                        padding-bottom: 30px; 
                                                        display: flex;
                                                        flex-wrap: nowrap;
                                                        align-items: center;
                                                        justify-content: center;
                                                        background-color: white`);
            var index = 0;
            for (; index < form.length; index++) {
                form[index].setAttribute('style', `margin-bottom: 10px;
                                                                    display: flex;
                                                                    justify-content: center`)
            };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize)
    });
    return (
        <Container>
            <div style={{
                backgroundImage: `url(${rgform2})`,
                backgroundSize: "cover",
                backgroundPositionY: "70%",
                height: "100vh",
                width: "100vw",
                position: "fixed"
            }}>
                <div id="parent">
                    <div className="row">
                        <Form method="post" action="/signup">
                            <div id="f"><p><h2>Registration</h2></p></div>
                            <div className="col-md-2" id="f">
                                <Form.Group controlId="formBasicName">
                                    <i className="zmdi zmdi-account-box"/> <Form.Label>Full name</Form.Label><p/>
                                    <Form.Control type="fullname" placeholder="Enter your full name"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group controlId="formBasicUsername">
                                    <i className="zmdi zmdi-account"/> <Form.Label>Username</Form.Label><p/>
                                    <Form.Control type="email" placeholder="Enter username"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group controlId="formBasicEmail">
                                    <i className="zmdi zmdi-email"/> <Form.Label>Email address</Form.Label><p/>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group className="form-wrapper" controlId="formBasicPassword">
                                    <i className="zmdi zmdi-lock"/> <Form.Label>Password</Form.Label><p/>
                                    <Form.Control type="password" placeholder="Enter your Password"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group className="form-wrapper" controlId="formBasicConfPass">
                                    <i className="zmdi zmdi-check"/> <Form.Label>Confirm Password</Form.Label><p/>
                                    <Form.Control type="password" placeholder="Confirm your Password"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <button>Register
                                    <i className="zmdi zmdi-arrow-right"/>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Signup1;