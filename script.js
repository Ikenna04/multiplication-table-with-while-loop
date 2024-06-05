//Multiplication Table with while loops
i = 0;

while (i <= 12) {
	console.log(i + ' Times');
	let j = 1;
	while (j <= 12) {
		console.log(`${i} x ${j} = ${i * j}`);
		j++;
	}
	i++;
}
