async function api(params) {
    const url = 'https://streaming-availability.p.rapidapi.com/countries';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b3ea33a726msh89aa9258f7eccc2p1d4e94jsn2a1f22dcbdcd',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
const arr = "ahmed\n Mansour \n Al-rfai"
arr.split("\n")
console.log(arr.split("\n"))