const express = require('express');
const router = express.Router();
const User = require('./models/user')

router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.send('Error' + err)
    }
});

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(users);
    } catch (err) {
        res.send('Error' + err)
    }
});

router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name,
        address: req.body.address,
        yoe: req.body.yoe
    });
    try {
        const newData = await user.save();
        res.json(newData);
    } catch (err) {
        res.send('Error' + err)
    }
});


module.exports = router;