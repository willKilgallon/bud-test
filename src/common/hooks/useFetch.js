import {useEffect, useState} from "react";

// accounted for multiple use cases,  methods and body etc
export default function useFetch (endpoint, method, body) {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    // from the .env file
    const url = process.env.API_BASE_URL + endpoint;

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                await fetch(url, {
                    method: method,
                    body: body,
                })
                    .then(async response => {
                        let data = await response.json();
                        setApiData(data);
                    });

                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { isLoading, apiData, serverError };
};

