import axios from "axios";

const root_url = "http://172.105.86.227:1323/";

export const API_Request = endpoint => {

    let url = root_url + endpoint

    return {
        fetchAll: () => axios.get(url),
        fetchById: (id) => axios.get(url + id),
        create: (newRecord) => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: (id) => axios.delete(url + id)
    }
}