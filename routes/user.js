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

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    db.collection('nodetest2').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('nodetest2').removeById(userToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
});
