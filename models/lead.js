"use strict";

var mongoose = require('mongoose');

var leadSchema = new mongoose.Schema({
	position: {
		type: String,
		required: false
	},
	company: {
		type: String,
		required: false
	},
	funnelStage: {
		type: Number,
		required: false
	},
	companyOverview: {type: String, required: false},
	companySize: {type: String,
		required: false},
	positionLocation: {type: String,
		required: false},
	salaryBenefits: {type: String,
		required: false},
	jobDescription: {type: String,
		required: false},
	applicationDate: {type: Date,
		required: false},
	contactName: {type: String,
		required: false},
	contactEmail: {type: String,
		required: false},
	applicationMaterials: {type: String,
		required: false},
	interviewDate: {type: Date,
		required: false},
	interviewFollowUp: {type: String,
		required: false},
	leadSource: {type: String,
		required: false},
	notes: {type: String,
		required: false},
	rating: {type: Number,
		required: false},
	username: {type: String,
		required: false}
});

var Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;