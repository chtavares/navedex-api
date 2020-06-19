import uuidv4 from 'uuid/v4'

const naverId = uuidv4()
const projectId = uuidv4()

export const seed = async knex => {
  await knex('navers').del()
  await knex('projects').del()
  await knex('navers_projects').del()
  await knex('navers').insert([
    {
      id: naverId,
      name: 'Christian Tavares',
      age: 28,
      admission_date: '2019-08-19',
      job_role: 'Desenvolvedor',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  await knex('projects').insert([
    {
      id: projectId,
      name: 'Project Test',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  await knex('navers_projects').insert([
    {
      naver_id: naverId,
      project_id: projectId,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
