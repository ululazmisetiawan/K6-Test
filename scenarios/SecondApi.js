import { check, fail } from 'k6';
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let res = http.get('http://test.k6.io/');

  let durationMsg  = "Too many takes time"

  if (!check(res, {
    'is status 200': (r) => r.status === 200,
    'body contains text': (r) => r.body.includes('Public pages')
  })) {
        fail(durationMsg);
  }

  sleep(1);
}