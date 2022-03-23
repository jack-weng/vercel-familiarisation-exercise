let ratings = require('../../ratings.json');
const fs = require('fs');

export default function handler(req, res) { 
  if (req.method === 'POST') {
    ratings.push(req.body)
    fs.writeFileSync('ratings.json', JSON.stringify(ratings, null, 4));
    return res.status(200).json({});
  }
}