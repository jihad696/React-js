import React from 'react';
import {Outlet} from 'react-router-dom';

function Contact() {
    return <>
        <section className="contact py-5">
        <div className="container">
            <h2>Contact me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/contact/contact1">Contact Me</Link>
            <Link to="/contact/contact2">Contact Me</Link>

            <Outlet/>
        </div>
        </section>
        </>
    }