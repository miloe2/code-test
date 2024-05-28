const fs = require('fs');
// 답안 제출 시 경로 변환 필수 ("/dev/stdin")
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 정리
const n = parseInt(input[0]);
const buildings = input.slice(1).map(line => {
    const [x, y, c] = line.split(' ').map(Number);
    return { x, y, c };
});

// x 좌표 오름차순으로 정렬
buildings.sort((a, b) => a.x - b.x);

// 풀이
const solution = (buildings) => {
    const dp = Array(n).fill(0).map(() => [0, 0]);

    // 첫 번째 건물에 대한 초기값 설정
    dp[0][0] = buildings[0].c; // 1,3 사분면
    dp[0][1] = buildings[0].c; // 2,4 사분면

    for (let i = 1; i < n; i++) {
        let max1 = 0, max2 = 0; // max1 : 1,3사분면 / max2 : 2,4사분면 
        for (let j = 0; j < i; j++) {
            if (buildings[j].y < buildings[i].y) { // 이전 건물의 y좌표가 낮을때, 
                // i = 1, j = 0 | 1 < 5, max1 = 0, dp[0][0](2) : 2

                // i = 2, j = 0 | 1 < 6 max1 = 2 , dp[0][0](2)
                // i = 2, j = 1 | 5 < 6 max1 = 2 , dp[1][0]

                max1 = Math.max(max1, dp[j][0]); // 
                // console.log('첫번째', max1, dp[j][0])
                
            } else if (buildings[j].y > buildings[i].y) { // 이전 건물의 y좌표가 높을때
                max2 = Math.max(max2, dp[j][1]);
                // console.log('두번째', max2, dp[j][1])
            }
        }
        dp[i][0] = max1 + buildings[i].c; // 1,3 사분면
        dp[i][1] = max2 + buildings[i].c; // 2,4 사분면
        //i = 1 : dp[1][0] = max1(2) + 4 | dp[1][1] = max2(0) + 4
        // console.log(dp)
    }

    // dp 내부에서 가장 큰 수 뽑기
    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp[i][0], dp[i][1]);
    }

    return max;
}

const rst = solution(buildings);
console.log(rst);

