import { useCallback, useState, useEffect } from "react";

export async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
        const resData = await response.json(); // try to parse error details if available
        throw new Error(resData.message || 'Something went wrong, failed to send request.');
    }

    // Check if the response body is empty
    const textResponse = await response.text();  // Get response as text

    // If the response is empty, you can return a default value or null
    if (!textResponse) {
        return 'data posted';  // Return default message for empty response
    }

    // Try to parse the response as JSON
    try {
        const resData = JSON.parse(textResponse); // Try parsing the response as JSON
        return resData;
    } catch (error) {
        // If parsing fails, return the raw text response
        console.error('Failed to parse JSON:', error);
        return textResponse;  // Return the raw response as a fallback
    }
}

export function useHttp(url, config, initialData) {

    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [retry, setRetry] = useState(0);




    function clearData() {
        setData(initialData);
    }

    const handleErrorBtn = useCallback(() => {
        setError(null);
        setRetry((prev) => prev + 1);
    }, []);



    const sendRequest = useCallback(
        async function sendRequest(data) {
            setIsLoading(true);
            try {
                const resData = await sendHttpRequest(url, { ...config, body: data });
                    setData(resData);
            } catch (error) {
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
        },
        [url, config]
    );

    useEffect(() => {
        if ((config && (config.method === 'GET' || !config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config, retry]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        handleErrorBtn
    };

}

