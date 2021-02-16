const fetch = require('node-fetch');
const express = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.223.127.108',
  user     : 'root',
  password : '1111',
  database : 'mysql'
});

const app = express();

var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var key = '&units=standard&APPID=2bcb224c8994aa4f15decf03210cbe1d';

/*fetch(base+location+key)
    .then(res => res.json())
    .then(res => {data = res});

console.log(data)*/

/*
var data;
async function getApi() {
    data = await fetch(base+location+key)
                    .then(res => res.json())
                    .then(res => data = res)

    console.log(data);
}

getApi();
console.log(data)
*/

/*(async () => {
    var data;
    var location;
    async function getApi(){
        return fetch(base+location+key)
                .then(res => res.json())
                .then(response => data = response)
    }
    await getApi()

    app.get('/',(req,res)=> {
        const location = req.query.location;
        
    })

    app.listen(3001, function(){
        console.log("Express server has started on port 3001")
    })
})();
*/
// async로 호출api를 기다리지 않으면 data엔 아무런 값도 들어가지 않는다 async await 사용

app.get('/',(req,res) => {
    var location = req.query.location;

    (async () => {
        var data;
        async function getApi(){
            return fetch(base+location+key)
                    .then(res => res.json())
                    .then(response => data = response)
        }
        await getApi()
        if (data.cod == 200) { // 검색이 가능할 경우

            connection.connect();
 
            connection.query('select * from ', function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results);
                }
            });
            
            connection.end();

            return res.json(data)
        } else if (data.cod == 404) { // 검색이 불가능할 경우
            return res.json(data)
        }
    })();
})

app.listen(3001, function(){
    console.log("Express server has started on port 3001")
})
