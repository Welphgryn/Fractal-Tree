# <h1>Fractal-Tree</h1>
<br>
<p>Howzit anyone reading this. This code creates a fractal tree by recursively drawing branches and rotating them randomly. The branch function draws a line and calls itself twice, with a shorter length, to generate two smaller branches. The ctx.save() and ctx.restore() methods ensure that the transformation doesn't affect other branches. The Math.random() function generates random numbers between 0 and 1, which are used to determine the angle of rotation. I did this to compliment a dynamic HTML code I was working on. Just a fun side project.</p>
