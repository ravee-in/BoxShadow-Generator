import React from 'react';

export default function Footer(props) {
  return (
    <footer id="footer" className="py-5 bg-light">
        <div className="container">
        <div className="row">
            <div className="social-icons text-center"> 
                <a href="https://www.linkedin.com/in/ravee7284" className="text-dark"><i className="fa fa-linkedin"></i></a> 
                <a href="https://www.behance.net/ravee" className="text-dark"><i className="fa fa-behance"></i></a>
            </div>
            <div className="copyright text-center">
                <p className="text-dark">© Copyright {(new Date().getFullYear())}. All Right Reserved. Made with <i className="fa fa-heart "></i> By <a href="https://ravee.in" target="_blank" rel="noreferrer">Ravee.in</a></p>
            </div>
        </div>
        </div>
    </footer>  
  );
}
