import axios from 'axios';

const KEY = 'AIzaSyBVbYI5WDZZM7wLu8li-rywBCsjXmbhwiA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});