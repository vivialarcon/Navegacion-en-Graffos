
//Se llama al dar click sobre un nodo para determinar el numero de vecinos que tiene de acuerdo al facetado local 
function numVecinos(sid){

var consulta5 = 
	{

	  "query" : "START n=node("+sid+") MATCH n-[re]-x where "+tiposN +"  RETURN count(x) ",
	  "params" : {	  }
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta5),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   

			numVeci=data.data[0][0];
			
			//Si el numero de nodos vecinos es menor al limite definido se cierra el modal de facetado local y se abren los nodos vecinos
			if(numVeci <= totalimite){ 
			$('#popmodal').modal('hide');
			//NeoPedro
				pedirVecinos(sid);

			}
			
			//Si el numero de vecinos es mayor se llama al facetado local 
			else{
			
			
				FacetadoLocal(sid);
			}
			// actualizaGrafo(true);
		 
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	   }
	 