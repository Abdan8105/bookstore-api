'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [{
      judul: "melangkah",
      penerbit: "Gramedia Widiasarana Indonesia",
      deskripsi: "Novel karya J. S Khairen yang berjudul Melangkah bertemakan tentang petualangan di Indonesia",
      gambar: "assets/image/9786020523316_Melangkah_UV_Spot_R4-1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
