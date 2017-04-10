/**
 * Created by daviD on 23/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var state = {
    db: null
};

exports.connect = function(url, done) {
    if (state.db){
        return done();
    }

    MongoClient.connect(url, function(err, db) {

        assert.equal(err, null);
        //if (err) return done(err)

        console.log("Successfully connected to MongoDB.");

        state.db = db;
        done();
    })
};

exports.get = function() {
    return state.db
};

exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        })
    }
}