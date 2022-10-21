const fs = require('fs')

const HOSTS = process.env.HOSTS.split(',');

for(const host of HOSTS)
{
	const filenames = fs.readdirSync(`${host}/map_results`,'utf-8');
	
	for(const fileName of filenames)
	{
		const fileContent = fs.readFileSync(`${host}/map_results/${fileName}`,'utf-8');
		fs.appendFileSync(`map_results/${fileName}`, fileContent);
	}
}