import React from 'react'
import PostForm from './PostForm';
import axios from 'axios';
import PostList from './PostList';

//! Axios
// : 브아우저 Node.js 환경에서 HTTP  요청을 쉽게 처리할 수 있게 도와주는
//  Promise 기반의 HTTP 클라이언트 라이브러리

// - 서버와 통신해서 데어터를 가져오거나(GET)
// - 서버에 데이터를 보낼 대 (POST, PUT, DELETE) Axios를 사용 (간결성, 일관성 향상)

//? Axios 설치 명령어
// 1) 기본 설치
//    npm install axios
// 2) 타입스크립트 프로젝트
//    npm install --save-dev @types/axios

//! Axios 사용 방법
// & 1) 기본 HTTP 메서드 (async, await 기반)
// - GET) cosnt response = await axios.get("REST APU 경로", { params});
//  >> params (객체 타입, 쿼리 파라미터 값 { page: 1, size: 10, keyword: hamburger})
//        const users = response.data;

// - POST) const response = await axios.post();
//  >> data (서버로 전송할 JSON 데이터)

// & 2) 기본 설정(커스텀 Axios 인스턴스를 생성하는 함수)
// - 기본 axios 사용 대신
//  , 프로젝트 전반에서 공통적으로 설정을 미리 지정 가능
//  , 반복 코드 없이 깔끔하게 API 요청 가능
// 1) const instance명 = axios.create(config);

//    cf) config: 다양한 설정을 담은 객체

export const mockApi = axios.create({
  // config: axios 설정 객체

  // 1. 모든 요청의 기본 주소(URL) 지정
  // : http://localhose:8080/api/v1
  baseURL: "https://jsonplaceholder.typicode.com",

  // 2. 요청 헤어를 기본 지정
  headers: {
    "Content-Type": "application/json",
    // "Authorization":"인증 토큰(Bearer Token)"
  }
});

//? axios 인스턴스 사용 방법
// mockApi.get("/posts")
// === axios.get("https://jsonplacegolder.typicode.com/posts")

function B_Axios() {
  return (
    <div>
      <h1>게시판 CRUD 예제 (Axios/localStorage)</h1>
      <PostForm />
      <hr />
      <PostList />
    </div>
  )
}

export default B_Axios