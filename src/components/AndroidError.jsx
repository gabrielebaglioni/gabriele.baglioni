import React from 'react';

const AndroidError = () => (
  <div style={{
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'monospace',
    padding: '20px',
    border: '1px solid #915EFF',
    borderRadius: '15px',
    background: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
  }}>
    <p>
      Siamo spiacenti, il rendering di questo modello 3D non è supportato su questo dispositivo. <br /><br />
      Causa potenziale: Limitazioni hardware (GPU) o una versione WebGL non compatibile. <br /><br />
      Per un'esperienza ottimale, si consiglia l'utilizzo di un browser desktop .
    </p>
  </div>
);

export default AndroidError; 