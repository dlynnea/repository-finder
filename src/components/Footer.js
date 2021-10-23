import React from 'react';

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="social">
                        <a href='https://www.linkedin.com/in/danielle-matton/' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-linkedin' />
                        </a>
                        <a href='https://twitter.com/dlynneaa' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-twitter' />
                        </a>
                        <a href='https://github.com/dlynnea' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github' />
                        </a>
                        <a href='https://medium.com/@danimatton' target='_blank' rel='noopener noreferrer'>
                            <i className="fab fa-medium-m"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <section className="copyright">
            <div className="container">
                <p>&copy; 2021 copyright</p>
            </div>
        </section>
        </>
    )
}

export default Footer;