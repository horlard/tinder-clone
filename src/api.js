import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization:'Client-ID qdHTeZfRuHbdSx32bhU2q5CC8yywbUh-pTgWr8ciaO0'
    }
})