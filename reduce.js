const mapreduce = require('./map-reduce');

function reduce(key, values)
{
	const valuesCount  = values.length;
	mapreduce.emitReduceResults(key, valuesCount);
}



const inputs = mapreduce.getReduceInput();

for(const input of inputs)
{
	reduce(input[0],input[1]);
}