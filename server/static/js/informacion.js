
//función infoNodos muestra la información del tooltip
function infoNodos(d){

$("#mi_div6").empty();
$("#myModalLabel").empty();
	
	//Cuando se tiene mas de un campo que mostrar en el tooltip 
		// for(x=0; x < nodes.length; x++){
		
			// if(nodes[x].sid == d.sid){
				// datosNodo=[];
				
				// for(t=0; t<camp_tooltip[d.label].length; t++){
					
					// $.map(nodes[x], function(value, key) {
									
						// if(key==camp_tooltip[d.label][t]){
									
							// datosNodo.push(value);  
									
						// }

					// });
							
				// }
			// }
		// }
						

 //muestra el tooltip
	 tip.show(d);
	

	 //Agrega el nombre del nodo al titulo de la ventana modal 
	 $( "#myModalLabel" ).append( ""+d[etiqueta[d.label]]+""  );
	 
	 //Verifica los campos que tiene el nodo con los campos definidos para mostrar en el modal 
	 for(x=0; x < nodes.length; x++){
		
		if(nodes[x].sid == d.sid){

				for(w=0; w<camp_modal[d.label].length; w++){
					
					$.map(nodes[x], function(value, key) {
									
						if(key==camp_modal[d.label][w]){
									
							$( "#mi_div6" ).append( key+ ": ", " "+value+ "</br>"   ); 
									
						}

					});
							
				}
			
		}
	}
	// return datosNodo.join("\n");
	
	//Imagen fija para mostrar en modal 
	$( "#mi_div6" ).append( "<img src='../static/img/GENERAL.jpg' >"  );

}

//se oculta la información del tooltip despues de 2000 milisegundos de retirar el mouse del nodo 
//para que puedan dar click sobre el nombre para abrir toda la información
function ocultarInfo(d){
setTimeout(function(d){

tip.hide(d);
},2000);





}


// function modal(d){
// $("#mi_div6").empty();

 
	// for(x=0; x < nodes.length; x++){
		
		// if(nodes[x].sid == d.sid){
			// // datosNodo=[];
			// $.map(nodes[x], function(value, key) {
			// // datosNodo= "<a>"key+ ": ", " "+value+ "</br>""</a>";
			 // $( "#mi_div6" ).append( key+ ": ", " "+value+ "</br>"   );
			
			// });
			
		// }
	// }
	// // return datosNodo.join("\n");
	// $( "#mi_div6" ).append( "<img src='img/GENERAL.jpg' >"  );
// }

// $('#leermas').click(function (d) {
   
  // });