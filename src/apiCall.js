import react, { useCallback } from 'react';
import axios from 'axios';

const ApiCall = () => {
    let controller;

    const fetchCall = useCallback(() => {
        controller = new AbortController()
        const signal = controller.signal;
        console.log(signal, 'signal')
        axios
        .get('https://jsonplaceholder.typicode.com/users', { signal })
        
    })
    
    const abortCall = () => {
        controller.abort();
    }

    return (
        <div>
            <button onClick={fetchCall}>
                Start Api
            </button>
            <button onClick={abortCall}>
                Abort Api
            </button>
        </div>
    )
}

export default ApiCall;