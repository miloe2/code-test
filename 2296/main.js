const fs = require('fs');
// 답안 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(v => Number(v));
let arr = input[1].split(' ').map(v => Number(v));
function solution() { 
 
};
solution();
