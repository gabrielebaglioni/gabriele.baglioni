import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error in canvas:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'monospace',
            padding: '20px',
            border: '1px solid #915EFF',
            borderRadius: '15px',
            background: 'rgba(0,0,0,0.5)'
            }}>
          <p>
          Siamo spiacenti, il rendering di questo modello 3D non è supportato su questo dispositivo. <br /><br />
          Causa potenziale: Limitazioni hardware (GPU) o una versione WebGL non compatibile. <br /><br />
          Per un'esperienza ottimale, si consiglia l'utilizzo di un browser desktop o di un dispositivo mobile più recente.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 