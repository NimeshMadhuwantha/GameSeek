import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '680303837b14425d8e543a8d8b2d2ded'
    }

})