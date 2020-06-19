export const up = knex =>
  knex.schema
    .createTable('projects', table => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.timestamps(true, true)
    })
    .createTable('navers', table => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.integer('age')
      table.datetime('admission_date').notNullable()
      table.string('job_role')
      table.timestamps(true, true)
    })
    .createTable('navers_projects', table => {
      table.increments('id').primary()
      table.uuid('naver_id')
      table
        .foreign('naver_id')
        .references('id')
        .inTable('navers')
      table.uuid('project_id')
      table
        .foreign('project_id')
        .references('id')
        .inTable('projects')
      table.timestamps(true, true)
    })

export const down = knex =>
  knex.schema
    .dropTableIfExists('navers_projects')
    .dropTableIfExists('navers')
    .dropTableIfExists('projects')
