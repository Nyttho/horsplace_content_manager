'use strict';

/**
 * what-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::what-list.what-list');
