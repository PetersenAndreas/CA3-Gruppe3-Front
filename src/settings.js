
export default function URLS(){

    function BackendURL() {
        const URL = "https://andreas-cph.com/CA3-Gruppe3";
        return URL;
    }

    function ExternalApi() {
        const URL = "https://andreas-cph.com/CA3-Gruppe3/api/info/external";
        return URL;
    }

    return {
        ExternalApi,
        BackendURL
    }

}