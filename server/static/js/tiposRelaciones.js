
//Se obtiene todos los tipos de relaciones que contiene la base de datos y los muestra junto a un checkbox para el facetado global 
	
var consulta3 = 
	{
	  "trel" : "tipo relaciones",
	  "consulta" : 3
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
       data: JSON.stringify(consulta3),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   tiposRelaciones = [];
			
			for(i=0; i<data.data.length; i++){
				tiposRelaciones.push(data.data[i][0]);
				
			}
		 
			for (i = 0; i < tiposRelaciones.length; i++) { 
				$( "#mi_div2" ).append( "<div class='seleccionableR'><input type='checkbox' id="+i+"r checked>"+tiposRelaciones[i] +"</div>"   );
			}
	
			  
		   
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	 