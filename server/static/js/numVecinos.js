function numVecinos(sid){

var consulta5 = 
	{

	  "query" : "START n=node("+sid+") MATCH n-[re]-x where "+tiposN +" "+tiposR+" RETURN count(x) ",
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
			if(numVeci <= totalimite){ 
			$('#popmodal').modal('hide');
			
				pedirVecinos(sid);

			}
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
	 