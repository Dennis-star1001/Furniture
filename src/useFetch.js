import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPendng, setIsPending] = useState(true);
    const [error, setError] = useState(null);
const abortCont = new AbortController();
    useEffect(() => {
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for the resourse');
                    }
                    console.log(res)
                    return res.json()
                }).then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);

                })
                .catch(err => {
                    if(err.name === "AbortError"){
                        console.log('Fetch aborted')
                    }else{
                         setError(err.message);
                    setIsPending(false);
                    }
                   
                })
                
        }, 1000);

        return () => abortCont.abort();
    }, [url])
    return { data, isPendng, error };
}
export default useFetch;