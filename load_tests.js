import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export let options = {
  vus: 500,
  duration: '5m',
};

export default function () {
  let listUsersResponse = http.get('https://reqres.in/api/users?page=1');
  
  check(listUsersResponse, {
    'status is 200': (r) => r.status === 200,
  });

  check(listUsersResponse, {
    'response body contains users': (r) => r.json('data').length > 0,
  });

  sleep(1);
}
