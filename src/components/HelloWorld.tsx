
const HelloWorld = () => {
    return (
        <div style={{
            padding: '2rem',
            margin: '1rem',
            border: '2px solid #232f3e',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#232f3e' }}>Hello World!</h1>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                This is the <strong>Sample MFE</strong> hosted at advitigudagudi.com.
            </p>
            <small>Version 1.0.0 - Ready for Federation</small>
        </div>
    );
};

export default HelloWorld;