/**
 * Created by liulei on 2018/5/6
 */


const Controller = require('egg').Controller;

class HomeController extends Controller {
  async test() {
    this.ctx.body = {
      data: 'test',
      status: 'ok',
    };
  }
}

module.exports = HomeController;

