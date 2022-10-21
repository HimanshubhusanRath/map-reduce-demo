#! /bin/bash

# Clean up files
rm -f host1/map_results/*.txt
rm -f host2/map_results/*.txt
rm -f map_results/*.txt
rm -f reduce_results/*.txt


# Run the map steps on both hosts in parallel
HOST=host1 node map.js &
HOST=host2 node map.js &

# Wait for both of them to be done
wait

# Run the shuffle step
HOSTS=host1,host2 node shuffle.js

# Run the reduce step
node reduce.js


# View the final result of the map-reduce job
cat reduce_results/results.txt

