
var consulta2 = 
	{

	  "query" : "START n=node(*) RETURN distinct labels(n)",
	  "params" : {	  }
	};

	$.ajax({
       async: false, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta2),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   
	  
	    tiposNodes = [];
	   //Se agrega cada tipo encontrado a un arreglo 
			for(i=0; i<data.data.length; i++){
				t={label:data.data[i][0][0]};
				tiposNodes.push(t);
			}
	
			for (j = 0; j < tiposNodes.length; j++) { 
				$( "#mi_div" ).append( "<div class='seleccionable'> <input  type='checkbox' id="+j+" checked >" +tiposNodes[j].label+"</div>"   );
				
			}
		//$( "#mi_div" ).append(" </br></br></br></br></br></br></br></br></br>");
	 
		   
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	 