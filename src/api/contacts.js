//axios base file

import axios from "axios";

//create will take an object which is the URL
export default axios.create({
    baseURL: "http://localhost:3006/"
})
