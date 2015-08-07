
//Esta consulta obtiene los distintos nodos vecinos del vecinos que tengan la relacion elegida y el número de relaciones que tiene 
function relacionesLocales(sid){

	var consulta9 = 
	{
	  "id" : sid,
	  "tvecino":nombre,
	  "relvecino" :nombreb,
	  "consulta" : 9
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
       data: JSON.stringify(consulta9),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {

	    numrelaciones=[];
	    nodob=[];


		for(i=0; i<data.data.length; i++){

			nrel=data.data[i][0];
			nb=data.data[i][1].data;

			numrelaciones.push(nrel);
			nodob.push(nb);

		}

		numConsultas=0;
		totalnumRela=0;
		
		$("#mi_div5").empty();
		
		
		//Muestra en pantalla todos los distintos nodos con su respectivo número de relaciones junto con checkbox 
		for(c=0; c<nodob.length; c++){
		
			$( "#mi_div5" ).append( "<div> <input type='checkbox' id="+c+"nrl name='"+nodob[c][etiqueta[nombreb]]+"' value='"+numrelaciones[c]+"' >"+nodob[c][etiqueta[nombreb]]+" tiene: "+numrelaciones[c]+" nodos relacionados </div>"   );
			
	//Verifica si cada checkbox esta en check o no y los cuenta, de acuerdo a eso es el numero de consultas que se van a realizar con sus respectivos datos 
			$('#'+c+'nrl').click(function(){
				contar=$(this);
				if(contar.is(":checked")){

					numConsultas++;
				}
				
				else{					
					numConsultas--;
				}

				pulsa=sid;
		
			});
		}
		
		
		$("#loader3").hide();
		$("#mi_div5").show();
		$('#btnSubmitL').show();
		
		//Al dar click sobre el botón vecinos 
		$('#btnSubmitL').click(function() { 
		//Si el nodo pulsado tiene nodos vecinos abiertos los cierra para abrir los nuevos 
			 borrar = [];
			borrarVecinos=[];
			borrarLinks=[];
			cerrarVecinos(pulsa,false);
			
			//divide el limite de nodos que se pueden visualizar para el numero de consultas que se van a realizar 
			//para que cada seleccion tenga el mismo numero de nodos vecinos 
			consulReal=0;
			limite=Math.ceil(totalimite/numConsultas);

			nombresNodosb=[];
			atributoNombre=etiqueta[nombreb];
	
			for(j=0; j < nodob.length; j++){
				nombresNodos={};
				var localb = $('#'+j+'nrl').is(":checked");
				localbthis=$('#'+j+'nrl');
				
				//Si el checkbox esta en check se obtiene el numero de nodos relacionados
				if(localb){
					numnodos=parseInt(localbthis.attr('value'));
					//Si el numero de nodos relacionados es mayor al limite se mostraran los nodos desde una posicion aleatoria
					if(numnodos > totalimite){
						rando = Math.floor(Math.random() * (numnodos));
						if(rando > numnodos - totalimite){
							skipe=rando-totalimite;
						}
						else{
							skipe=rando;
						}
						if(skipe<0){
							skipe=0;
						}
					}
					else{
						skipe=0;
					}
		
					nombresNodos["nodob"]=localbthis.attr('name');
					nombresNodos["numero"]=skipe;
					nombresNodosb.push(nombresNodos);
				}
					
			}

			//de acuerdo al numero de checkbox que se encuentren en check se realizara el llamado de la funcion VecinosLocales con sus respectivos datos 
			for(k=0; k<nombresNodosb.length; k++){
		
				nodoveci=nombresNodosb[k].nodob;
				skip=nombresNodosb[k].numero;

				VecinosLocales(pulsa)
				$("#mi_div3").empty();
				$("#miselec").empty();
				// $("#miselec").hide();
				$("#mi_div5").empty();
				// $('#btnSubmitL').hide();
				// $("#loader1").show();
				// $("#mi_div3").hide();
				// $("#mi_div5").hide();
			}
		
		
		
		$("g").popover('hide');
        tp = 0;
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
	 
		