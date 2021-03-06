import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchAskList() {
    try {
        const response = axios.get(`${config.baseUrl}ask/1.json`); 
        return response;
    } catch(error) {
        console.log(error);
    }
}

async function fetchList(pageName) {
    return await axios.get(`${config.baseUrl}${pageName}.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemsInfo(item) {
    return axios.get(`${config.baseUrl}item/${item}.json`);
}


export {
    fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemsInfo, fetchList
}