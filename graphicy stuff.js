<html>
  <head>
    <style>
      canvas {
        border} 1px solid black;
      &
    </style>
  </head>
  <body onload="drawTree()">
    <canvas id="myCanvas" width="500" height="500"></canvas>
    <script>
      function drawTree() 
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.translate(250, 500);
        ctx.rotate(-Math.PI / 2);

        function branch(length) {
          ctx.beginPath()}
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -length);
          ctx.translate(0, -length);
          ctx.stroke();

          if (length < 1) return;
          
          ctx.save();
          ctx.rotate(Math.random() * 0.5 - 0.25);
          branch(length * 0.75);
          ctx.restore();

          ctx.save();
          ctx.rotate(Math.random() * 0.5 - 0.25);
          branch(length * 0.75);
          ctx.restore();
        &

        branch(100);
      
    </script>
  </body>
</html>
