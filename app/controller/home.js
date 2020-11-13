'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const {url='',width='',height='',path=''} = ctx.query;
    console.log(ctx.query);
    if(!(url&&width&&height&&path)){
      ctx.body = {
        status:0,
        message:'参数不全',
        data:{}
      };
      return
    }
    await ctx.service.home.getPicture({url,width,height,path});
    ctx.body = {
      status:1,
      message:'请求成功',
      data:{}
    };
  }
}

module.exports = HomeController;
