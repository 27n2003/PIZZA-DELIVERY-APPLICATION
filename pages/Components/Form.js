import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const initialFeatures = {
        protocol_type: '',
        flag: '',
        src_bytes: '',
        dst_bytes: '',
        count: '',
        same_srv_rate: '',
        diff_srv_rate: '',
        dst_host_srv_count: '',
        dst_host_same_srv_rate: '',
        dst_host_same_src_port_rate: ''
    };

    const [features, setFeatures] = useState(initialFeatures);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeatures({
            ...features,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(features),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch prediction');
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setPrediction(data.prediction);
            setError(null); // Clear any previous errors

            // Show toast notification with prediction
            if (data.prediction === 1) {
                toast.error('Anomaly Detected');
            } else {
                toast.success('Good Connection');
            }
        } catch (error) {
            console.error('Prediction error:', error.message);
            setError('Failed to fetch prediction');
            setPrediction(null); // Clear previous prediction on error

            // Show error toast notification
            toast.error(error.message);
        }
    };

    return (
        <div>
            <h1>Intrusion Detection System</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(features).map((feature) => (
                    <div key={feature}>
                        <label>
                            {feature.replace(/_/g, ' ')}:
                            <input
                                type="text"
                                name={feature}
                                value={features[feature]}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Detect Intrusion</button>
            </form>
            <ToastContainer />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {prediction !== null && (
                <p>
                    Prediction: {prediction === 1 ? 'Good Connection' : 'Anomaly Detected'}
                </p>
            )}
        </div>
    );
}
