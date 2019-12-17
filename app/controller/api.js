'use strict';

const Controller = require('egg').Controller;

class api extends Controller {
  async api1() {
    const { ctx } = this;
   let {newPassword, oldPassword} = ctx.request.body
    ctx.body = {data:{newPassword, oldPassword},returnFlag: '200', returnMsg:'成功'};
  }
}

module.exports = api;
