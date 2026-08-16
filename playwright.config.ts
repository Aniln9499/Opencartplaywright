import {defineConfig, devices } from '@playwright/test'
import process from 'node:process';


export default defineConfig ({

timeout: 30* 1000,
testDir:'./tests',
fullyParallel: true,
retries:process.env.CI ? 2 : 0,
workers: process.env. CI ? 1 : undefined,

reporter: [
 ['html'],
 ['allure-playwright'],
 ['dot'],
 ['list']
],

use: {
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
},

//grep: /@master/,

projects: [
{name: 'chromium', use: {... devices['Desktop Chrome']} },
//{name: 'firefox', use: {... devices['Desktop Firefox']} },
//{name: 'webkit', use: {... devices['Desktop Safari']} },

],

});
