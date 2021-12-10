'use strict';

/**
 * words-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::words-note.words-note');
