import api from '../env/apiconfig';

'https://northwind.now.sh' + '/api/category'
let apiurl = api.testurl;

const baseservice = {

    get: (url) => {
        fetch(`${apiurl}${url}`)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                //error loglanabilir
                console.log(err);
            })
    },
    post: (url, data) => {

        let requestoptions = {
            method: 'POST',
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
    delete: (url) => {
        let requestoptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch(`${apiurl}${url}`, requestoptions)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
    }

}


export default baseservice;