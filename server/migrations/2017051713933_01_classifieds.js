exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', table => {
    table.increments()
    table.string('title', 255)
    table.string('description', 255).notNullable()
    table.decimal('price').notNullable()
    table.string('item_image', 255).notNullable()
    table.timestamp('dateTime').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('timeStamp').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');

};
