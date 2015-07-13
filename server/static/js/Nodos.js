// Se crea y configura la parte visual mediante la libreria D3js los nodos y relaciones
var guia;
var color = d3.scale.category20();

var vis = d3.select("body")
    .append("svg:svg")
      .attr("class", "svg-tam");
     

var force = d3.layout.force()
	
    .nodes(nodes)
    .links(links)
	.charge(-150)
	.linkDistance(50)
    
    .size([w, h]);
	
					
// Flechas para la direccion de las relaciones

	vis.append("svg:defs")
                    .selectAll("marker")
                    .data(["end"]) 
                    .enter().append("svg:marker")
                    .attr("id", String)
                    .attr("viewBox", "0 -5 10 10")
                    .attr("refX", 40)
                    .attr("refY", -1.5)
                    .attr("markerWidth", 6)
                    .attr("markerHeight", 6)
                    .attr("orient", "auto")
                    .append("svg:path")
					.attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
					.style("stroke", "#4679BD")
					.style("opacity", "0.9");
                    // .attr("d", "M0,-5L10,0L0,5");


//tooltip en los nodos 		
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([0, 7])
    .html(

	function(d){
	var titulo=datosNodo.join();
	//limita la cantidad de caracteres que se muestran de la variable
	titulo= titulo.substring(0,10);
	//muestra el nombre del nodo en un boton junto con icono de informacion 
		return "<button type='text'  class='btn btn-primary btn pull-right' data-toggle='modal' data-target='#myModal' id='leermas'> <img src='../static/img/Icono_información.png' class='icono' >"+titulo+"... </button>";
	}
	)
vis.call(tip);

 
 

	
//tooltip para los nodos guias 	
var tip2 = d3.tip()
    .attr('class', 'd3-tip2')
    .offset([-7, 0])
    .html(function (d) {
    return  d.label;
})
vis.call(tip2);
         

// se crea el nodo con la informacion que esta en nodes y los agrega al grupo g 
 var node = vis.selectAll("circle.node")
      .data(nodes)
      .enter()
	  .append("g")
      .attr("class", "node")
	  .style("cursor","pointer")
	  
      .call(force.drag);

    //CIRCLE y sus atributos 
   node.append("svg:circle")
     .attr("r", circleWidth)
	 .style("cursor","pointer")
     .attr("fill", function(d, i) {  return  color(d.label);  } )
	 
	
	 // se crea las relaciones con su estilo
var link = vis.append("g").selectAll(".link")
        .data(links)
       .enter().append("line")
        .attr("class", "link")
		//.style("stroke-width", function(d) { return Math.sqrt(d.value); });
        .style("marker-end", "url(#end)");
	 
// se crea nodos guias con sus atributos 
function guias(){
	
	guia = vis.selectAll("circle.guia")
	  .data(tiposNodes)
	  .enter()
	  .append("svg:circle")
	  .attr("r",circleWidth)
	  .attr("id", function(d,i){return "guia"+d.label})
	  .attr("fill",function(d,i) {return color(d.label)})
	  .attr("cx", function(d,i) { return (i*30)+20})
      .attr("cy", 30)
	  .on("mouseover", guiatool)
      .on("mouseout", tip2.hide)  

	  }	 	  
 function guiatool(d){
  tip2.show(d);

 }
	 
force.on("tick", function(e) {

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("transform", function(d, i) {     
        return "translate(" + d.x + "," + d.y + ")"; 
    });
   
  
   link.attr("x1", function(d)   { return d.source.x; })
       .attr("y1", function(d)   { return d.source.y; })
       .attr("x2", function(d)   { return d.target.x; })
       .attr("y2", function(d)   { return d.target.y; })
	   
   node.each(collide(0.5));	   
});

force.start();

 
var padding = 1, // separation between circles
    radius=6;

function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
    var rb = 2*radius + padding,
        nx1 = d.x - rb,
        nx2 = d.x + rb,
        ny1 = d.y - rb,
        ny2 = d.y + rb;
    
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y);
          if (l < rb) {
          l = (l - rb) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}