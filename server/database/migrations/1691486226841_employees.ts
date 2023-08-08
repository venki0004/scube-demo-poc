import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID')
      table.string('F_NAME', 50)
      table.string('L_NAME', 50)
      table.string('EMP_ID', 200).unique()
      table.string('EMAIL', 225).unique()
      table.string('CARD_NO', 225).unique()
      table.string('ACCESS_LEVEL', 100).nullable()
      table.string('BADGE_TYPE', 100).nullable()
      table.string('COMPANY', 100).nullable()
      table.string('CARD_TYPE', 100).nullable()
      table.string('CARD_STATUS', 100).nullable()
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
