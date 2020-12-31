const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

router.get('/api/v1/stores', (req, res) => {
    Store.find({}).then((stores) => {
        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        })
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: 'server error'
        })
    })
})

router.post('/api/v1/stores', (req, res) => {
    const store = new Store(req.body);
    store.save().then(() => {
        return res.status(200).json({
            success: true,
            data: store
        })
    }).catch((err) => {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This store already exists' });
          }
        res.status(500).json({
            error: "server error"
        })
    })
})

module.exports = router;