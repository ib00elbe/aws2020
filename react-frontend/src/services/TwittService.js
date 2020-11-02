import axios from 'axios';

const TWEET_API_BASE_URL = "http://localhost:8080/api/v1/tweet";

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

class TwittService {

    getTweets(){
        return axios.get(TWEET_API_BASE_URL);
    }

//    createTweet(twitt, id){
    createTweet(twitt, id){
      console.log('id => ' + JSON.stringify(id));
      console.log('twitt => ' + JSON.stringify(twitt));
        const requestBody = {
            id: id,
            post: twitt.twitt
          }
          
          const qs = require('querystring')

        return axios.post(TWEET_API_BASE_URL, qs.stringify(requestBody), config);
    }

    getTweetByUserId(userId){
        return axios.get(TWEET_API_BASE_URL + '/' + userId);
    }
}

export default new TwittService()