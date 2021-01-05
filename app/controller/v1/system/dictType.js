'use strict';
// app/controller/users.js
const BaseController = require("../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'dictType'
  }

  // 查询
  async index() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      dictName: ctx.query.dictName,
      dictType: ctx.query.dictType,
      status: ctx.query.status,
    };
    const result = await service.v1.system[this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

}

module.exports = Controller;