'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          id: '1',
          title: 'Task 1',
          description: 'Description of Task 1',
          status: 'OPEN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Task 2',
          description: 'Description of Task 2',
          status: 'IN_PROGRESS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
