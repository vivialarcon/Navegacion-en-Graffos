
//Esta funcion es llamada para abrir el facetado local cuando el numero de nodos es mayor a lo establecido 
//Obtiene todos los tipos de nodos vecinos y el numero de vecinos que tiene cada tipo 	 
function FacetadoLocal(sid){
	
var consulta6 = 
	{
	  "id" : sid,
	  "tnodo" :tiposN,
	  "consulta" : 6
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
       data: JSON.stringify(consulta6),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   tiposLocal=[];
	   
		
		for(i=0; i<data.data.length;i++){
			typ={};
			typ["tipo"]=data.data[i][0][0];
			typ["nume"]=data.data[i][1];
			  
			  tiposLocal.push(typ);
			
		}
		

		$("#mi_div3").empty();
		$("#miselec").empty();
		$("#mi_div5").empty();
		$( "#mi_div3" ).append( " <option value='vaciop'>...</option>");
		
		//Rellena el select con todos los tipos de vecinos y el numero de nodos que tiene cada uno
		for (j = 0; j < tiposLocal.length; j++) { 
		
			$( "#mi_div3" ).append( " <option name='"+tiposLocal[j].nume+"' value='"+tiposLocal[j].tipo+"' >" +tiposLocal[j].tipo+" ("+tiposLocal[j].nume+" nodos) </option>");

		}
		$("#mi_div3").show();
		$("#loader1").hide();
		
		sidClick=sid;
		
		//Detecta si se elige una opción del select y obtenemos los atributos
		$("#mi_div3").change(function() {
		$("#loader2").show();
			if($("#mi_div3 option:selected").val()!= 'vaciop'){
				$("#mi_div5").empty();
				nombre = $("#mi_div3 option:selected").val();
				$("#miselec").empty();
				numveci=parseInt($("#mi_div3 option:selected").attr('name'));
				
				//Si el tipo de nodo elegido tiene un numero menor de nodos al máximo entonces se abren los nodos vecinos del tipo escogido
				if(numveci<=totalimite){

					VecinosMenor(sidClick);
					$("#mi_div3").empty();
				}
				
				//Si el número de nodos es mayor entonces llamamos a tiporelaLocales para obtener el siguiente nivel de filtrado
				else{
				 
				tiporelaLocales(sidClick);
				
				}
			}
	
		}); 
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	   }
	   

		
	   
