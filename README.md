# weatherback

2021 2월 16일
기상api를 받아와 출력하는 백엔드 개발
async를 사용하지 않았을 때 기상api의 data가 변수에 저장되지 않았다 이유는 변수에 기상api를 저장하는 코드가 기상api를 불러오기 전에 실행되었기 때문

2021 2월 17일
기상api를 google cloud platform의 db에 저장하였고 개발한 백엔드를 firebase functions에 배포
하지만 cors policy 떄문에 react에서 기상 api를 받아올 수 없어 모든 유저에 권한을 줘 해결
firebase functions에 배포한 직 후 api값을 출력하지 않았고 firebase에서 각 api페이지에 권한을 변경하여 해결
