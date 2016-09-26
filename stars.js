const f1 = function(symbol, times)
{
	if(times === 0)
		return "";
	return symbol + f1(symbol, times - 1);
}
const f2 = function(space, stars)
{
	if(space < 0)
	{
		return "";
	}
	return f1(" ", space) + f1("*", stars) + "\n" + f2(space - 1, stars + 2);
}
const triangleStars = function(n)
{
	console.log(f2(n - 1, 1));
}
triangleStars(5);
