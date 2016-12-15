const Sequelize = require('sequelize');

const databaseURI = process.env.DATABASE_URL || 'postgres://localhost:5432/image-search-abstraction-layer';
const db = new Sequelize(databaseURI, {
  logging: false
});
