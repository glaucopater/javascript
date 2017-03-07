
<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="utf-8">
    
      <meta name="robots" content="index, follow">
      <meta name="googlebot" content="index, follow">
      <meta name="author" content="Flagg">
      
      <script src="findCycle.js" type="text/javascript"></script>

      <link rel="stylesheet" href="style.css"/>

      <title>Find Cycle in Formulas Ver 1.0</title>

<body>
<h1>Find Cycle in Formula</h1>
<div><label></label><input type="text" class="identifier" value="A"/> :  <input type="text" class="definitions" value="B+C"/></div>
<div><label></label><input type="text" class="identifier" value="B"/> :  <input type="text" class="definitions" value=""/></div>
<div><label></label><input type="text" class="identifier" value="C"/> :  <input type="text" class="definitions" value="D"/></div>
<div><label></label><input type="text" class="identifier" value="D"/> :  <input type="text" class="definitions" value=""/></div>

 
<button onclick="main()">Check Formula</button>

<div><label>Check Result</label><input type="text" id="checkResult" value=""/></div>


<div>
<a href='http://flagg.altervista.org/2016-08-24/find-cycle-in-formula'>Back to Original Post</a> | 
<a href='http://flagg.altervista.org/'>Back to Home</a>
</div>

  </body>
</html>


<?php
include("../leaderBanner.php");
?>