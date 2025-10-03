import React from 'react'
import Footer from '../components/Footer.jsx'

const TooYoung = () => {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#f39c12', marginBottom: '20px' }}>
        👋 Hello!
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '15px' }}>
          This site is for parents of teens.
        </h2>
        
        <p style={{ color: '#6c757d', fontSize: '16px', lineHeight: '1.6' }}>
          Please come back when your children are teens.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <button 
            onClick={() => window.history.back()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ← Go Back
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default TooYoung
