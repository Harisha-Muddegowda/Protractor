var reporte = require('cucumberjs-allur-reporter');
reporter.config(
{
	targetDir:'./Reports/'
	}
	);
module.exports = reporter;