import api from '../env/apiconfig';

let apiurl = api.testurl;

const baseservice = {

    get: async (url) => {
        let result;
        await fetch(`${apiurl}${url}`)
            .then((res) => res.json())
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                //error loglanabilir
                console.log(err);
            });

        return result;
    },
    post: async (url, data) => {
        let result;

        let requestoptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        await fetch(`${apiurl}${url}`, requestoptions)
            .then((res) => res.json())
            .then((data) => {
                result = data;
            });

        return result;
    },
    put: (url, data) => {
        let requestoptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(`${apiurl}${url}`, requestoptions)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
    },
    delete: async (url) => {
        let result;
        let requestoptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        await fetch(`${apiurl}${url}`, requestoptions)
            .then((res) => res.json())
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                console.log(err);
            })

        return result;
    }

}


export default baseservice;