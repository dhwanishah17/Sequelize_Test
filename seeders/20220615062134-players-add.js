'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [
      {
        name: 'Virat',
        age: 29,
        captain: 'No',
        dob: '2000-04-15',
        team_id: "1"
      },
      {
        name: 'Iyer',
        age: 29,
        captain: 'Yes',
        dob: '2000-04-15',
        team_id: "3"
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Players', null, {});
  }
};
