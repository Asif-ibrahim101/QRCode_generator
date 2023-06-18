import React from 'react';
import QRCodes from './QRCode';

const App = () => {
  return (
    <>
       <section style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}} className='main'>
          <QRCodes/>
       </section>
    </>
  )
}

export default App
