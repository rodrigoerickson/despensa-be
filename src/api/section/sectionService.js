const Section = require('./section');

Section.methods(['get', 'post', 'put', 'delete']);
Section.updateOptions({new:true, runValidators:true});

module.exports = Section;