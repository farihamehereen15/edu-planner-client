import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container my-5 p-2'>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header > <h3>What is cors?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Why are you using firebase? What other options do you have to implement authentication?</h3></Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>How does the private route work?</h3></Accordion.Header>
                    <Accordion.Body>
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>What is Node? How does Node work?</h3></Accordion.Header>
                    <Accordion.Body>
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    );
};

export default Blog;