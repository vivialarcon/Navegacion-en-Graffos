
//Con esta consulta se obtiene todos los tipos de nodos que contiene la base de datos y se los muestra junto a un checkbox para el facetado global 
var consulta2 = 
	{
	  "tnodo" :"tipo nodos",
	  "consulta" : 2
	};
	
	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
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
			guias();
   
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	 