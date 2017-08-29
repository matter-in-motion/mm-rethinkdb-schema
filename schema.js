'use strict';

module.exports = {
  __expose: true,
  tables: r => r.tableList().run(),

  indexes: (r, table) => r.table(table).indexList().run(),

  createTable: (r, table, options) => r.tableCreate(table, options).run(),

  dropTable: (r, table) => r.tableDrop(table).run(),

  createIndex: (r, table, index, options) => r.table(table)
    .indexCreate(index, options)
    .run(),

  dropIndex: (r, table, index) => r.table(table)
    .indexDrop(index)
    .run(),

  didUpdate: (r, table) => r.table(table).indexWait().run()
};
