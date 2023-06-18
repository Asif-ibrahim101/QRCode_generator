import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import QRCode from "react-qr-code";

function QRCodes() {

  const [input, getInput] = useState('');
  const [code, getCode] = useState('');


  const handleChange = (e) => {
    getInput(e.target.value);
  };

  const handleSubmit = () => {
    getCode(input);
    console.log(code);
  };
  return (
    <>
      <div className="Card">
        <div className="card_input">
          <input value={input} onChange={handleChange} placeholder='Put Your Link' />
          <IconButton onClick={() => handleSubmit()} sx={{ backgroundColor: '#fff' }}><AdsClickIcon sx={{ color: 'red' }} /></IconButton>
        </div>

        {code.length > 0 ? (<div className="qrcode">
          <div className="code">
            <QRCode value={handleChange ? code : ''} style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox={`0 0 256 256`} />
          </div>
        </div>) : ''}

      </div>
    </>
  )
}

export default QRCodes;