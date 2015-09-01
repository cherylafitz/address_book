/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    firstname: {
      type: 'string',
      required: true,
      alpha: true,
      maxLength: 30
    },
    lastname: {
      type: 'string',
      required: true,
      alpha: true,
      maxLength: 50
    },
    notes: {
      type: 'string',
      required: true
    },
    contacts: {
      collection: 'Contact',
      via: 'person'
    },
    categories: {
      collection: 'Category',
      via: 'persons'
    }

  }
};

