import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {



  const [hLength, sethLength] = useState(10);
  const [vLength, setvLength] = useState(10);
  const [blurRange, setblurRange] = useState(10);
  const [BGColor, setBGColor] = useState("#008b8b");
  const [Color, setColor] = useState("#808080");
  const [Inset, setInset] = useState(false);
  const [spreadRange, setspreadRange] = useState(0);



  return (
    <>
      <Navbar title="Box Shadow Generator" NavLink1="Ravee.in" NavLink2="TextUtility" />
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-5 px-3">
              <div className="controls">
                <div className='control-unit'>
                  <label htmlFor="hLength" className="bsg-label">Horizontal Length: {hLength}px</label>
                  <input type="range" min="-100" max="100" value={hLength} onChange={(event) => sethLength(event.target.value)} className="form-range" id="hLength" />
                </div>
                <div className='control-unit'>
                  <label htmlFor="vLength" className="bsg-label">Vertical Length: {vLength}px</label>
                  <input type="range" min="-100" max="100" value={vLength} onChange={(event) => setvLength(event.target.value)} className="form-range" id="vLength" />
                </div>

                <hr className='bg-dark my-4' />

                <div className='control-unit'>
                  <label htmlFor="blurRange" className="bsg-label">Blur Radius: {blurRange}px</label>
                  <input type="range" min="0" max="100" value={blurRange} onChange={(event) => setblurRange(event.target.value)} className="form-range" id="blurRange" />
                </div>
                <div className='control-unit'>
                  <label htmlFor="spreadRange" className="bsg-label">Spread Radius: {spreadRange}px</label>
                  <input type="range" min="0" max="100" value={spreadRange} onChange={(event) => setspreadRange(event.target.value)} className="form-range" id="spreadRange" />
                </div>

                <hr className='bg-dark my-4' />

                <div className='control-unit color'>
                  <label htmlFor="colorRange" className="bsg-label">Shadow Color</label>
                  <div className="colorInput">
                    <input type="color" value={Color} onChange={(event) => setColor(event.target.value)} className="form-control mx-2" id="colorRange" />
                    <input type="text" value={Color} onChange={(event) => setColor(event.target.value)} className="form-control mx-2 px-1" id="colorInp" />
                  </div>
                </div>

                <div className='control-unit color'>
                  <label htmlFor="colorRange" className="bsg-label">Box Color</label>
                  <div className="colorInput">
                    <input type="color" value={BGColor} onChange={(event) => setBGColor(event.target.value)} className="form-control mx-2" id="BGcolorRange" />
                    <input type="text" value={BGColor} onChange={(event) => setBGColor(event.target.value)} className="form-control mx-2 px-1" id="BGcolorInp" />
                  </div>
                </div>

                <hr className='bg-dark my-4' />

                <div className='control-unit'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" checked={Inset} onChange={() => setInset(!Inset)} />
                    <label className="form-check-label">Inset</label>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-7">
              <div className="outputArea">
                <div className="box m-auto" style={{ boxShadow: `${Inset ? "inset" : ""} ${hLength}px ${vLength}px ${blurRange}px ${spreadRange}px ${Color}`, backgroundColor: `${BGColor}` }}>

                </div>

                <div className="outputCSS mt-5 mx-auto">
                  <p className='m-0'>-webkit-box-shadow:{Inset ? "inset" : ""} {hLength}px {vLength}px {blurRange}px {spreadRange}px {Color};</p>
                  <p className='m-0'>-moz-box-shadow:{Inset ? "inset" : ""} {hLength}px {vLength}px {blurRange}px {spreadRange}px {Color};</p>
                  <p className='m-0'>box-shadow:{Inset ? "inset" : ""} {hLength}px {vLength}px {blurRange}px {spreadRange}px {Color};</p>
                  <hr />
                  <p className='mt-3 mb-0 text-danger text-center'><small>Note: Copy the above CSS to use</small></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
