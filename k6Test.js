import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "60s",
  rps: 1000
};

export default function() {
  //let res = http.post("http://127.0.0.1:3001/api/photos/?val=[123,456,789]");
  //let res = http.get("http://127.0.0.1:3001/api/photos/11");
  let res = http.get("http://127.0.0.1:3001/11");

  check(res, {
    "status was 200": (r) => r.status == 200,
  });
  sleep(1);
};