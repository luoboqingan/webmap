//let map;

//function initMap() {
//  map = new google.maps.Map(document.getElementById("map"), {
//    center: { lat: -34.397, lng: 150.644 },
 //   zoom: 8,
//  });
//}
var click5 = 0;
var click6 = 0;
	  
function show1(){
	document.getElementById("div1").style.display="block";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.display="none";
	document.getElementById("div4").style.display="none";
	document.getElementById("div5").style.display="none";
	document.getElementById("div6").style.display="none";
}


function show2(){
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="block";
	document.getElementById("div3").style.display="none";
	document.getElementById("div4").style.display="none";
	document.getElementById("div5").style.display="none";
	document.getElementById("div6").style.display="none";
	var myimage = document.getElementById("myimage");   
if (myimage.addEventListener) {   
    // IE9, Chrome, Safari, Opera   
    myimage.addEventListener("mousewheel", MouseWheelHandler, false);   
    // Firefox   
    myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);   
}   
// IE 6/7/8   
else myimage.attachEvent("onmousewheel", MouseWheelHandler);
function MouseWheelHandler(e) {   
    // cross-browser wheel delta   
    var e = window.event || e; // old IE support   
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); 
	myimage.style.width = Math.max(50, Math.min(2100, myimage.width + (30 * delta))) + "px";   
    return false;   
}  
}

const TILE_SIZE = 256;
function createInfoWindowContent(latLng, zoom) {
	const scale = 1 << zoom;
	const worldCoordinate = project(latLng);
	const pixelCoordinate = new google.maps.Point( 
	  Math.floor(worldCoordinate.x * scale),
	  Math.floor(worldCoordinate.y * scale)           
	); 
	const tileCoordinate = new google.maps.Point( 
	  Math.floor((worldCoordinate.x * scale) / TILE_SIZE),
	  Math.floor((worldCoordinate.y * scale) / TILE_SIZE)           
	); 
	return [ 
	  "Isle of Wight", 
	  "LatLng: " + latLng,
	  "Zoom level: " + zoom,
	  "World Coordinate: " + worldCoordinate,
	  "Pixel Coordinate: " +   pixelCoordinate,
	  "Tile Coordinate: " + tileCoordinate, 
      "A county in England. It is near the northern shore of the English Channel, across the Solent from the island of Great Britain. It is diamond-shaped, 36 km long from east to west and 22 km wide from north to south, with an area of 381 km??. The population is 119,000 (1983)."	  
	].join("<br>");       
} 
function project(latLng) {           
    let siny = Math.sin((latLng.lat() * Math.PI) / 180); 
	// Truncating to 0.9999 effectively limits latitude to 89.189. This is
	// about a third of a tile past the edge of the world tile.           
	siny = Math.min(Math.max(siny, -0.9999), 0.9999); 
	return new google.maps.Point( 
	  TILE_SIZE * (0.5 + latLng.lng() / 360), 
	  TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 -  siny)) / (4 * Math.PI))
	);       
} 
function show3(){
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.display="block";
	document.getElementById("div4").style.display="none";
	document.getElementById("div5").style.display="none";
	document.getElementById("div6").style.display="none";
	//let map; 
	const wight3 = new google.maps.LatLng(50.68, -1.30); 
    const map3 = new google.maps.Map(document.getElementById("div3"), { 
	    center: wight3, 
		zoom: 11, 
      });
    const coordInfoWindow = new google.maps.InfoWindow(); 	 
    coordInfoWindow.setContent(
	  createInfoWindowContent(wight3, map3.getZoom())
    );
    coordInfoWindow.setPosition(wight3);           
	coordInfoWindow.open(map3);           
	map.addListener("zoom_changed", () => {
		coordInfoWindow.setContent(
		  createInfoWindowContent(wight3, map3.getZoom())
		); 
		coordInfoWindow.open(map3);           
	}); 	
}

function init4(){
	var mapOptions = {
		center: new google.maps.LatLng(50.68, -1.30),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		scrollwheel: false
	}
	var map4 = new google.maps.Map(document.getElementById("div4"),mapOptions);
	var ctaLayer = new google.maps.KmlLayer({
		url:'doc.kml'
	});
	ctaLayer.setMap(map4);
}
function show4(){
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.display="none";
	document.getElementById("div4").style.display="block";
	document.getElementById("div5").style.display="none";
	document.getElementById("div6").style.display="none";

  const map4 = new google.maps.Map(document.getElementById("div4"), {
    zoom: 11,
    center: { lat: 50.68, lng: -1.30 },
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://www.rowmaps.com/kmls/IW/converted.kml",
    map: map4,
  });

}
	  
function show5(){
	click5++;
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.display="none";
	document.getElementById("div4").style.display="none";
	document.getElementById("div5").style.display="block";
	document.getElementById("div6").style.display="none";


}

function show6(){
	click6++;
    document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.display="none";
	document.getElementById("div4").style.display="none";
	document.getElementById("div5").style.display="none";
	document.getElementById("div6").style.display="block";
	
	if (click6 == 1){
		var mousePositionControl = new ol.control.MousePosition({
          coordinateFormat: ol.coordinate.createStringXY(4),     //????????????
          projection: 'EPSG:4326',                               //????????????????????????????????????????????????????????????????????????????????????
          className: 'custom-mouse-position',                    //????????????????????????????????????'ol-mouse-position'
          target: document.getElementById('mouse-position'),     //???????????????????????????????????????
          undefinedHTML: '&nbsp;'                                //????????????????????????
        });

        var layer6 = new Array();            //map??????????????????
        var layerName = new Array();        //??????????????????
        var layerVisibility = new Array();  //????????????????????????

        function loadLayersControl(map, id) {
            var treeContent = document.getElementById(id);   //??????????????????

            var layers = map.getLayers();                    //???????????????????????????
            for (var i = 0; i < layers.getLength(); i++) {
                //????????????????????????????????????????????????
                layer6[i] = layers.item(i);
                layerName[i] = layer6[i].get('name');
                layerVisibility[i] = layer6[i].getVisible();

                //??????li??????????????????????????????
                var elementLi = document.createElement('li');
                treeContent.appendChild(elementLi); // ???????????????
                //?????????????????????
                var elementInput = document.createElement('input');
                elementInput.type = "checkbox";
                elementInput.name = "layers";
                elementLi.appendChild(elementInput);
                //??????label??????
                var elementLable = document.createElement('label');
                elementLable.className = "layer6";
		        setInnerText(elementLable, layerName[i]);
                elementLi.appendChild(elementLable);
                //??????????????????????????????
                if (layerVisibility[i]) {
                   elementInput.checked = true;
                }
                addChangeEvent(elementInput, layer6[i]);  //???checkbox??????????????????                                         
            }
        }

        function addChangeEvent(element, layer) {
            element.onclick = function () {
                if (element.checked) {
                    layer.setVisible(true); //????????????
                }
                else {
                   layer.setVisible(false); //???????????????
                }
		    };
        }

        function setInnerText(element, text) 
	    {
            if (typeof element.textContent == "string") {
                element.textContent = text;
            } else {
                element.innerText = text;
            }
        }

        var map = new ol.Map({
            target: 'div6', //????????????div???ID
            layers: [//????????????????????????
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    name: 'Isle of Wight(OSM)'
                }),
			    new ol.layer.Tile({
                    source: new ol.source.Stamen({layer: 'watercolor'}),
                    name: 'Isle of Wight(Stamen Map)'
                })
            ],//??????????????????
            view: new ol.View({
                center: ol.proj.fromLonLat([-1.30, 50.68]), //?????????????????????
                zoom: 11 //????????????????????????
            })
        });//????????????????????????
		loadLayersControl(map, "layerTree");
        map.addControl(mousePositionControl);
	}
	else{
		return 0;
	}

}



