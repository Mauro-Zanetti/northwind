const cds = require('@sap/cds');
module.exports = cds.service.impl(async function() {
	const service = await cds.connect.to('NorthWind');
	this.on('READ', 'Products', req => {
		return service.run(req.query);
	});
});