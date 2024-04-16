'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          id: '1',
          title: 'Todo 1',
          description: 'Description of Todo 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Todo 2',
          description: 'Description of Todo 2',
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
