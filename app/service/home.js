const Service = require('egg').Service;
const puppeteer = require('puppeteer');
const path = require('path');

class HomeService extends Service {

  async getPicture(option) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(option.url);
    await page.screenshot({
      path: '../data/'+option.path,
      clip: {
        x: 0,
        y: 0,
        width: Number(option.width),
        height: Number(option.height),
      }
    })
  }
}
  module.exports = HomeService