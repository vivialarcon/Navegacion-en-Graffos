 var tp =0;
 var popopen =0;

//Verifica los checkbox de los tipos de nodos en el facetado global que esten en check 
//para agregarlos a la variable tiposN como string y realizar las consultas
function tipNodos(){
		tiposN="";
		checkeado =[];
	 
		for(m=0; m<tiposNodes.length; m++){
			var label = $('#'+m+'').is(":checked");
			if(label){
				checkeado.push(tiposNodes[m].label);	
			}
		}
		for(k=0; k<checkeado.length; k++){
		
			if(k==checkeado.length-1){
				tiposN = tiposN+" x: "+checkeado[k];
			}
			else{
				tiposN = tiposN+" x: "+checkeado[k]+" or";
			}	
		}
	}
			
			
			
	//Verifica los checkbox de los tipos de relaciones en el facetado global que esten en check 
//para agregarlos a la variable tiposR como string y realizar las consultas
	function tipRelaciones(){
		tiposR="";
		checkeadoRel =[];
		 
		for(p=0; p<tiposRelaciones.length; p++){
			var rela = $('#'+p+'r').is(":checked");
				if(rela){
					checkeadoRel.push(tiposRelaciones[p]);	
				}
			}

		for(o=0; o<checkeadoRel.length; o++){
		
			if(o==0){
				tiposR = " and type(re)='"+checkeadoRel[o]+"' or ";
			}
			if(o != 0 && o != checkeadoRel.length - 1){
				tiposR = tiposR+" type(re)='"+checkeadoRel[o]+"' or";
			}	
			if(o==checkeadoRel.length-1){
				tiposR = tiposR+" type(re)='"+checkeadoRel[o]+"'";
			}
		}
	}


// Detecta un click sobre el nodo para la apertura de nodos  

 var doblclic=false;
 
function unclick(d){
	
	var temp = this;
	setTimeout(function(){
		if(doblclic==false){
          d3.select(temp).selectAll("circle")
            .transition()
            .duration(250)
            .style("cursor", "pointer")     
            .attr("r", circleWidth*2);
				
			tp++;				
			// $('#popmodal').modal('show');
		//esconde el tooltip
         tip.hide(d);
		 //llama las funciones que verifican el facetado global
			tipNodos();
			tipRelaciones();
			showPopover ();
			//llama a la funcion numVecinos para verificar el numero de vecinos que tiene el nodo 
			 numVecinos(d.sid);
			 $("#mi_div3").empty();
			// console.log("CLick"+tp);
			 
			 
			 
			
		}
	},200);
}

//función doble click cierra los nodos 
function dosclick(d){
	doblclic=true;
         d3.select(this).selectAll("circle")
            .transition()
            .duration(250)
            .style("cursor", "pointer")
					
             cerrar(d.sid);
			$("g").popover('hide');
             tp = 0;
		setTimeout(function(){
		doblclic=false
		},200);		
			 
}




// Actualiza la presentacion en pantalla de nodos y relaciones 
function actualizaGrafo(){
    force.start();

     node = node.data(force.nodes(), function(d) { return d.sid; });  

	    node.enter()
		.append("g")
        .attr("class", "node")
		    .append("circle")
            .attr("r", circleWidth)
			.style("cursor", "pointer")  
            .attr("fill", function(d, i) {   return  color(d.label); } )
            .on("mouseover", infoNodos)
			//.on("mouseover", function(d) { tip2.show(d, document.getElementById("guiaPeriodicidad")) })
            .on("mouseout", ocultarInfo)
		    .on("click", unclick) 
       	    .on("dblclick", dosclick) 	      
		    .call(force.drag);
	  	
	node.exit().remove();
	


		$("g").popover(
		
		
		{
	
		'html':'true',
		'title':'FACETADO LOCAL',
			'content':"<div id='loader1'><img  src='../static/img/loading.gif'></div><select style='display:none' id='mi_div3' ></select>"+
					  "<div style='display:none' id='loader2'><img  src='../static/img/loader.gif'></div></br><select style='display:none' id='miselec'></select>"+
					  "<div style='display:none' id='loader3'><img  src='../static/img/loader.gif'></div><div style='display:none' id='mi_div5'></div>"+
					  "</br></br><input style='display:none' type='button' id='btnSubmitL' value='Vecinos' /></br></br></br>",
        'container': 'body',
        'placement': 'bottom',

    })

		
	    link = link.data(force.links(), function(d) { return d.source.x +"-"+d.target.x; });
	    link.enter()
	       .append("line")
	       .attr("class", "link")
		   .style("stroke", "#ccc")
           .style("stroke-width", function (d) {
				return Math.sqrt(d.value);})
            .attr("marker-end", "url(#end)");
	       
	    link.exit().remove();
		   
}

var showPopover = function () {
	console.log("primer"+tp);
	
	if(tp>1){
	$("g").popover('hide');
        tp=0;
	}
	
	
  
};

$("body").click(function(e){

		
		if(e.target.localName == "svg" ){
			$("g").popover('hide');
            $("[role='tooltip']").popover('hide');
			tp=0;
		}
		
	
});

