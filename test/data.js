'use strict';

const Data = require('../lib');
const assert = require('assert');

describe('data', function () {
    it('has .get', function (done) {
        assert.equal('function', typeof Data.get);
        done();
    });

    it('has .query', function (done) {
        assert.equal('function', typeof Data.query);
        done();
    });

    it('has .mutate', function (done) {
        assert.equal('function', typeof Data.mutate);
        done();
    });

    it('has .initClient', function (done) {
        assert.equal('function', typeof Data.initClient);
        done();
    });

    it('has .initProperties', function (done) {
        assert.equal('function', typeof Data.initProperties);
        done();
    });
});
