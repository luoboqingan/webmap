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
      "A county in England. It is near the northern shore of the English Channel, across the Solent from the island of Great Britain. It is diamond-shaped, 36 km long from east to west and 22 km wide from north to south, with an area of 381 km². The population is 119,000 (1983)."	  
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
          coordinateFormat: ol.coordinate.createStringXY(4),     //坐标格式
          projection: 'EPSG:4326',                               //地图投影坐标系（若未设置则输出为默认投影坐标系下的坐标）
          className: 'custom-mouse-position',                    //坐标信息显示样式，默认是'ol-mouse-position'
          target: document.getElementById('mouse-position'),     //显示鼠标位置信息的目标容器
          undefinedHTML: '&nbsp;'                                //未定义坐标的标记
        });

        var layer6 = new Array();            //map中的图层数组
        var layerName = new Array();        //图层名称数组
        var layerVisibility = new Array();  //图层可见属性数组

        function loadLayersControl(map, id) {
            var treeContent = document.getElementById(id);   //图层目录容器

            var layers = map.getLayers();                    //获取地图中所有图层
            for (var i = 0; i < layers.getLength(); i++) {
                //获取每个图层的名称、是否可见属性
                layer6[i] = layers.item(i);
                layerName[i] = layer6[i].get('name');
                layerVisibility[i] = layer6[i].getVisible();

                //新增li元素，用来承载图层项
                var elementLi = document.createElement('li');
                treeContent.appendChild(elementLi); // 添加子节点
                //创建复选框元素
                var elementInput = document.createElement('input');
                elementInput.type = "checkbox";
                elementInput.name = "layers";
                elementLi.appendChild(elementInput);
                //创建label元素
                var elementLable = document.createElement('label');
                elementLable.className = "layer6";
		        setInnerText(elementLable, layerName[i]);
                elementLi.appendChild(elementLable);
                //设置图层默认显示状态
                if (layerVisibility[i]) {
                   elementInput.checked = true;
                }
                addChangeEvent(elementInput, layer6[i]);  //为checkbox添加变更事件                                         
            }
        }

        function addChangeEvent(element, layer) {
            element.onclick = function () {
                if (element.checked) {
                    layer.setVisible(true); //显示图层
                }
                else {
                   layer.setVisible(false); //不显示图层
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
            target: 'div6', //地图容器div的ID
            layers: [//加载瓦片图层数据
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    name: 'Isle of Wight(OSM)'
                }),
			    new ol.layer.Tile({
                    source: new ol.source.Stamen({layer: 'watercolor'}),
                    name: 'Isle of Wight(Stamen Map)'
                })
            ],//地图视图设置
            view: new ol.View({
                center: ol.proj.fromLonLat([-1.30, 50.68]), //地图初始中心点
                zoom: 11 //地图初始显示级别
            })
        });//加载图层列表数据
		loadLayersControl(map, "layerTree");
        map.addControl(mousePositionControl);
	}
	else{
		return 0;
	}

}



