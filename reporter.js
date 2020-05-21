var reporte = require('cucumberjs-allure-reporter');
reporter.config(
{
	targetDir:'./Reports/'
	}
	);
module.exports = reporter;