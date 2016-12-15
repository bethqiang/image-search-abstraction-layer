const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

const models = require('./models');
const Query = models.Query;

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get 10 results for a search query from custom search engine
// Can specify optional "start" point, where the first result you see is actually the nth result in the engine results
router.get('/api/search', (req, res, next) => {

  const query = req.query.q;
  const offset = req.query.offset || 1;
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.SE_ID}&q=${query}&searchType=image&start=${offset}`;

  axios.get(url)
  .then(result => {
    const items = result.data.items;
    const filtered = items.map(item => {
      return {
        title: item.title,
        url: item.link,
        snippet: item.snippet,
        thumbnail: item.image.thumbnailLink,
        context: item.image.contextLink
      };
    });
    res.json(filtered);
  })
  .catch(next);

  // Save the query to the database
  Query.create({ query })
  .catch(next);

});

// Get the 10 most recent queries and when they were searched
router.get('/api/latest', (req, res, next) => {
  Query.findAll({
    limit: 10,
    order: [
      ['createdAt', 'DESC']
    ]
  })
  .then(result => {
    const filtered = result.map(item => {
      return {
        query: item.query,
        when: item.createdAt
      };
    });
    res.json(filtered);
  })
  .catch(next);
});

module.exports = router;
