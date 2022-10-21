const fs = require('fs');

const HOST = process.env.HOST;

/*
	MAP related methods
*/

function getMapInput(fileName)
{
	const path = `${HOST}/${fileName}`;
	return fs.readFileSync(path,'utf-8');
}

function emitMapResult(key, value)
{
	const fileName = `${HOST}/map_results/${key}.txt`;
	fs.appendFileSync(fileName, value+'\n');
}

/*
	REDUCE related methods
*/
function getReduceInput()
{
	const inputs = [];
	const fileNames = fs.readdirSync(`map_results`,'utf-8');
	for(const filename of fileNames)
	{
		const key = filename.split('.')[0];
		const contents = fs.readFileSync(`map_results/${filename}`,'utf-8');
		const value = contents.split('\n').filter(x => x!=='');
		inputs.push([key,value]);
	}
	return inputs;
}

function emitReduceResults(key, value)
{
	const fileName = `reduce_results/results.txt`;
	if(null!==key && ''!==key)
	{
		fs.appendFileSync(fileName, key+'-->'+value+'\n');
	}
}


// Export the module functions
module.exports.getMapInput=getMapInput;
module.exports.emitMapResult=emitMapResult;
module.exports.getReduceInput=getReduceInput;
module.exports.emitReduceResults=emitReduceResults;

