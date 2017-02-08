'use strict';

const Data = require('../lib');
const assert = require('assert');

describe('data', function () {
    it('has .get', function (done) {
        assert.equal('function', typeof Data.get);
        done();
    });
});