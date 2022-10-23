import config from '../constants/config.json';

const fetchCall = async(
        endpoint, 
        method,
        data
    )=> {
        const url = config?.baseUrl+'/'+endpoint;
        let options = {
            method: method,
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        if(method !== config.methodTypes?.GET) {
            options = {
                ...options, 
                body: JSON.stringify(data),
            };        
        }

    const res = await fetch(url, options);
    const response = res.json();
    return response;
}

export default fetchCall;