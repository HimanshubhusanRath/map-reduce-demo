const mapreduce = require('./map-reduce');

function map(text)
{
	const lines = text.split('\n');
	for(const line of lines)
	{
		if(parseInt(line)<300)
		{
			console.log('****************');
			mapreduce.emitMapResult('Under_300',1);
		}
		else 
		{
			console.log('------------------');
			mapreduce.emitMapResult('Above_300',1);
		}
	}
}

const map_input = mapreduce.getMapInput('latencies.txt');
map(map_input);