const express = require('express');
const { createUser, getUsers } = require('../controllers/usersController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);

module.exports = router;
