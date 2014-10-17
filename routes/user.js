var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/', function(req, res) {
    var db = req.db;
    db.collection('nodetest2').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;