
// enlace="http://200.93.225.47:9014/db/data/cypher"
enlace="/peticion"
// enlace="http://localhost:7474/db/data/cypher"
var consulta3 = 
	{
	  "query" : "START r=rel(*) return distinct(type(r))",
	  
	  "params" : {	  }
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
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
	 