How this works
----------------

* In this example, there are two folders Host1 & Host2. In real time, these would be considered as two different machines.
* Each system is having some data (D1, D2). This data is a list of numbers in the range 0-1000.
* We define a map function which categorises a data point as either 'Above_300' or 'Below_300'.
* This map function is applied to the data(D1, D2) at each of these two systems in parallel. Now an intermediate data is generated at both these systems (I1, I2).
* This intermediate data from these two systems are then combined into one folder (assume a new system). Let's denote this data as N1.
* Then a reduce function is applied on this data (N1) which clubs the number of data under each category to summarize the total number of data under that category.


Result
-------
* Above_300-->146
* Under_300-->54



Overview of Map-Reduce architecture
------------------------------------
<img width="1403" alt="Screenshot 2022-10-21 at 7 41 06 PM" src="https://user-images.githubusercontent.com/40859584/197216343-95f78071-686f-4a9c-b1e8-017b77f28cea.png">
