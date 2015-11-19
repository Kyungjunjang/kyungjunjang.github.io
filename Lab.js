<center> <h1>POP ART by Keith Haring</h1></center>

<script language="javascript">

var delay=1000 
var curindex=0

var randomimages=new Array()

	randomimages[0]="H7.jpg"
	randomimages[1]="H2.jpg"
	randomimages[2]="H3.jpg"
	randomimages[3]="H4.jpg"
	randomimages[4]="H5.jpg"
	randomimages[5]="H9.jpg"
	randomimages[6]="HH.jpg"

var preload=new Array()

for (n=0;n<randomimages.length;n++)
{
	preload[n]=new Image()
	preload[n].src=randomimages[n]
}

document.write('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

	document.images.defaultimage.src=randomimages[curindex]
}

setInterval("rotateimage()",delay)

</script>
