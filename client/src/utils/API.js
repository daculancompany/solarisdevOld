import axios from "axios";


export default {
    saveContact: function(data) {
        //return axios.post(apiEndpoint+"createContact", data);retrete
        return axios.post("/api/createContact", data);
    }

};