import mongoose from "mongoose";

const ACCOUNT_SCHEMA = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: false
    },

    knownGenes: []

}, { timestamps: true });

export default mongoose.model('account', ACCOUNT_SCHEMA);