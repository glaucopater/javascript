 var urlParams;

 (window.onpopstate = function() {

     var match,

         pl = /\+/g, // Regex for replacing addition symbol with a space

         search = /([^&=]+)=?([^&]*)/g,

         decode = function(s) {
             return decodeURIComponent(s.replace(pl, " "));
         },

         query = window.location.search.substring(1);

     urlParams = {};

     while (match = search.exec(query))

         urlParams[decode(match[1])] = decode(match[2]);

 })();

 var btn = document.getElementById("change");

 var title = document.getElementById("title");

 var comment = document.getElementById("comment");

 var defaultWidth = 800;

 var defaultHeight = 600;

 var defaultFontsize = 30;

 var defaultImgUrl = 'http://ppcdn.500px.org/57576808/e73dd5f3baa5777ea7fcc101bb7859aca9af24dc/4.jpg';

 var defaultTitle = 'Title';

 var defaultComment = 'comment';

 var w;

 var h;

 var fontsize;

 if (urlParams.w !== undefined)

     w = urlParams.w;

 else

     w = defaultWidth;

 if (urlParams.h !== undefined)

     h = urlParams.h;

 else

     h = defaultHeight;

 if (urlParams.fontsize !== undefined)

     fontsize = urlParams.fontsize;

 else

     fontsize = defaultFontsize;

 if (urlParams.url !== undefined)

     imageUrl = urlParams.url;

 else

     imageUrl = defaultImgUrl;

 if (urlParams.title !== undefined)

     titletext = urlParams.title;

 else

     titletext = defaultTitle;

 if (urlParams.comment !== undefined)

     commenttext = urlParams.comment;

 else

     commenttext = defaultComment;

 document.getElementById('url').value = imageUrl;

 document.getElementById('title').value = titletext;

 document.getElementById('comment').value = commenttext;

 // Define Stage

 var stage = new Kinetic.Stage({

     container: "canvas",

     width: w,

     height: h

 });

 function getFgColor() {

     return $('input[name="color"]:checked').val();

 }

 function getBgColor()

 {

     var fgcolor = getFgColor();

     if (fgcolor == "black") return "white";

     else if (fgcolor == "white") return "black";

     else return fgcolor;

 }

 //Define Layer for Function's Image

 var layer = new Kinetic.Layer();

 stage.add(layer);

 // Draw function

 function draw(image, drag)

 {

     var img = new Kinetic.Image({

         image: image

     });

     var title = new Kinetic.Text({

         x: stage.getWidth() / 2,

         y: stage.getHeight() / 2 + 200,

         text: document.getElementById('title').value,

         fontSize: fontsize,

         fontFamily: 'Times New Roman',

         fill: getFgColor(),

         stroke: getFgColor(),

         //shadowColor: getBgColor(),

         strokeWidth: 1,

         draggable: drag

     });

     title.setOffset({

         x: title.getWidth() / 2

     });

     var comment = new Kinetic.Text({

         x: stage.getWidth() / 2,

         y: (title.y()) + 40,

         text: document.getElementById('comment').value,

         fontSize: fontsize * 0.7,

         fontFamily: 'Times New Roman',

         fill: getFgColor(),

         stroke: getFgColor(),

         //shadowColor: getBgColor(),

         strokeWidth: 1,

         draggable: drag

     });

     comment.setOffset({

         x: comment.getWidth() / 2

     });

     layer.add(img);

     layer.add(title);

     layer.add(comment);

     layer.draw();

 }

 // Define draggable image

 var mainImage = new Image();

 mainImage.onload = function() {

     draw(mainImage, true);

 };

 mainImage.width = w;

 mainImage.height = h;

 mainImage.src = imageUrl;

 // Change draggable Image

 btn.addEventListener("click", function(event)

     {

         mainImage.src = document.getElementById('url').value;

         mainImage.width = w;

         mainImage.height = h;

         layer.removeChildren();

         draw(mainImage, true);

     });

 title.addEventListener("keyup", function(event)

     {

         draw(mainImage, true);

     });

 comment.addEventListener("keyup", function(event)

     {

         draw(mainImage, true);

     });