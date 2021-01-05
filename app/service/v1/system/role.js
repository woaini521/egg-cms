'use strict';

const BaseService = require("../base");
const { getDeptWhere } = require("../../../utils/tools");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class RolesService extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Roles'
  }

  // 查询某条数据
  async findOne (id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id
      },
      include: [{
        model: this.ctx.model['Menus'],
        as: 'menus'
      }]
    })
  }

  // 新增
  async create (query) {
    try {
      // 创建事务
      let transaction = await this.ctx.model.transaction();

      let role = await this.ctx.model[this.modelName].create(query, {
        transaction
      })

      let menuIds = this.ctx.request.body['menuIds']
      let menuQuery = []
      for (let i = 0; i < menuIds.length; i++) {
        let obj = {}
        obj.menuId = menuIds[i]
        obj.roleId = role.id
        menuQuery.push(obj)
      }

      // 事务批量增操作
      await this.ctx.model.RoleMenu.bulkCreate(menuQuery, {
        transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      this.ctx.throw(500, '服务器错误') 
    }
  }

  // 修改状态
  async updateStatus(query, where) {
    return await this.ctx.model[this.modelName].update(query, {
      where
    });
  }

  // 修改
  async update (query, where) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      // 事务操作
      await this.ctx.model[this.modelName].update(query, {
        where,
        transaction
      });
      await this.ctx.model.RoleMenu.destroy({
        where: {
          roleId: where.id
        },
        transaction
      })
      let menuIds = this.ctx.request.body['menuIds']
      let menuQuery = []
      for (let i = 0; i < menuIds.length; i++) {
        let obj = {}
        obj.menuId = menuIds[i]
        obj.roleId = where.id
        menuQuery.push(obj)
      }

      console.log(menuQuery)
      // 事务批量增操作
      await this.ctx.model.RoleMenu.bulkCreate(menuQuery, {
          transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      console.log(error)
      this.ctx.throw(500, '服务器错误');
    }
  }

  // 删除
  async destroy (ids) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      await this.ctx.model[this.modelName].destroy({
        where: {
          id: {
            [Op.or]: ids
          }
        },
        transaction
      });
      await this.ctx.model.RoleMenu.destroy({
        where: {
          roleId: {
            [Op.or]: ids
          }
        },
        transaction
      })
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      this.ctx.throw(500, '服务器错误') 
    }
  }
}

module.exports = RolesService;