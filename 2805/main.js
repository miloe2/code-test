const fs = require('fs');
// 답안 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 정리
let [n, m] = input[0].split(' ').map(v => Number(v));
let arr = input[1].split(' ').map(v => Number(v));
let max = Math.max(...arr); // 46
let min = 0
let rst;
// 풀이
function solution() { 
    while(min <= max){ // 최소값이 최대값보다 커질때까지 실행
        let sum = 0;
        let cut = parseInt((max + min) / 2); // 46 + 0 / 2 = 23
        arr.forEach(e => {
            if(e - cut > 0){ // 자르는 크기보다 나무가 커야함
                sum += e - cut;
            }
        });
        if(sum >= m){ // 자른 나무보다 m값이 클 때, 최소값을 올려서 다시 수행
            min = cut + 1;
            rst = cut;
        } else if(sum < m) { // 자른 나무가 m보다 작으면, 최대값을 내리고 다시 수행
            max = cut -1
        } 
    }
    console.log(rst);
};
solution();
