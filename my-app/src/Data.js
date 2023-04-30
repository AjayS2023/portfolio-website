import React, { useState, useEffect } from 'react';

function Data() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
    );
}

export default Data;