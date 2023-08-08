import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/models/Employee'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Employee.create({
      F_NAME:'VENKATESH',
      L_NAME:'CHAVVAKULA',
      EMP_ID:'SC2006',
      EMAIL:'venkatesh@scube.me',
      CARD_NO:"111111111",
      ACCESS_LEVEL:"SCUBE ACS",
      BADGE_TYPE:"EMPLOYEE",
      COMPANY:"SCUBE",
      CARD_TYPE:"EMPLOYEE",
      CARD_STATUS:"Active"
    })
  }
}