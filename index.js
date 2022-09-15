import { group, sleep } from 'k6'; 
import FirstApi from "./scenarios/FirstApi.js";
import SecondApi from './scenarios/SecondApi.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default () => {

  group('This is first API', () => {
    FirstApi();
  })

  //  group('This is first API', () => {
  //   SecondApi();
  // })

  
}