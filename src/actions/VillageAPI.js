const API_URL = "https://r3api.herokuapp.com";

export default class VillageAPI {
    static getInfo(url) {
        return fetch(API_URL + url, {
            method: "GET",
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    static addInfo(url, info) {
        console.log(API_URL + url);
        return fetch(API_URL + url, {
            method: "POST",
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( info )
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    static updateInfo(url, info) {
        console.log('updating info')
        console.log(API_URL + url);
        return fetch(API_URL + url, {
            method: "PATCH",
            headers: {
                'Accepts': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}

