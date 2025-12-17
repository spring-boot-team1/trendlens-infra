import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    scenarios: {
        hpa_ca_test: {
            executor: 'ramping-vus',
            startVUs: 1,
            stages: [
                { duration: '1m', target: 5 },    // 워밍업
                { duration: '2m', target: 30 },   // HPA 트리거
                { duration: '3m', target: 80 },   // Node 부족 → CA 트리거
                { duration: '2m', target: 0 },    // 부하 종료 (scale-in 관찰)
            ],
        },
    },
};

export default function () {
    http.get('https://api.trendslens.xyz/trend/api/v1/interests/my?seqAccount=24'); // 실제 API 엔드포인트
    sleep(0.02);
}
