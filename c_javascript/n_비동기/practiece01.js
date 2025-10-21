// ! JSONPlaceholder
// : 가상의 무료 데이터를 제공하는 Mock Server (가자 서버)
// - REST API를 활용하여 사용 (경로 지원을 통해 데이터 구분)
// - 게시글, 댓글, 사용자, 사진 등의 정보를 JSON 형식으로 제공

// [전체 조회 - 배열 반환]
// http://jsonplaceholder.typicode.com/원하고자하는데이터
// http://jsonplaceholder.typicode.com/users
// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/albums

// [단건 조회 - 객체 반환]
// http://jsonplaceholder.typicode.com/users/1
// http://jsonplaceholder.typicode.com/posts/1

// % 1. Promise 체이닝
function fetchPromiseUserData() {
  try {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(Response => {
        // HTTP 응답 상태 확인 (200번대가 아니라면 에러 처리)

        if (!Response.ok) {
          throw new Error(`HTTP error: status ${Response.status}`);
        }

        return Response.json();
      })
      .then(users => users.forEach(user => console.log(user)));
      //? cf) forEach는 동기 함수에 대한 기대
      //      >> 콜백함수나 비동기 문법을 사용하더라도 실행을 기다려주지 않음 

  } catch (error) {
    console.error(error);
  }
}

console.log('Promise로 데이터 처리하기');
fetchPromiseUserData();

// % 2. Async & Await
async function fetchAsyncPosetsData() {
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      new Error(`HTTP error: status ${response.status}`);
    }

    const post = await response.json();

    console.log(post);
    
  } catch(e) {
    console.error(`게시물 가져오기 실패: ${e.message}`);
  }
}
console.log('Async, Await로 데이터 가져오기');
fetchAsyncPosetsData();