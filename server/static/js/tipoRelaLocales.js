
//Esta función es llamada una vez elegido un tipo de nodo vecino que tenga mas vecinos de los definido como máximo
// La consulta realizada nos devuelve el tipo de relaciones que tienen los vecinos de acuerdo al tipo escogido 

function tiporelaLocales(sid){

var consulta8 = 
	{
	  "id" : sid,
	  "tvecino":nombre,
	  "consulta" : 8
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
       data: JSON.stringify(consulta8),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
		tipox=[];
		relacionxb=[];
		tipob=[];

		for(i=0; i<data.data.length; i++){
		
			tx=data.data[i][0][0];
			xb=data.data[i][1];
			tb=data.data[i][2][0];
			
			tipox.push(tx);
			relacionxb.push(xb);
			tipob.push(tb);
		

		}
		$("#miselec").empty();
		
		//Rellena el select con los tipos de relaciones que tiene el tipo de nodo 
		$( "#miselec" ).append( " <option value='vacio'>...</option>");
		for(c=0; c<relacionxb.length; c++){
		
			$( "#miselec" ).append( "<option value='"+tipob[c]+"'>"+relacionxb[c]+"</option>"   );
		
		}
		$("#loader2").hide();
		$("#miselec").show();
		aplastado=sid;
		
		
		//Al seleccionar un tipo de relacion me obtiene los atributos y llama a la función relacionesLocales 
		//para desplegar los nodos vecinos que tiene el vecino con la relacion elegida
		$("#miselec").change(function() {
		$("#loader3").show();
			if($("#miselec option:selected").val()!= 'vacio'){
				$("#mi_div5").empty();
				nombreb = $("#miselec option:selected").val();
				relacionesLocales(aplastado);
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
	   
		