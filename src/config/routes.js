const express = require('express');

module.exports = function(server){

    const router = express.Router();
    server.use('/api', router);

    const sectionService = require('../api/section/sectionService')
    sectionService.register(router, '/sections')
}