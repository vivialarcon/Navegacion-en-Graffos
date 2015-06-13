
function relacionesLocales(sid){
var consulta9 = 
	{

	  "query" : "START n=node("+sid+") MATCH n-[re]-x-[r]-(b) WHERE x:"+nombre+" and b: "+nombreb+" RETURN DISTINCT count (r),b ",
	  "params" : {	  }
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
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
		
		for(c=0; c<nodob.length; c++){
		
			$( "#mi_div5" ).append( "<div> <input type='checkbox' id="+c+"nrl name='"+nodob[c][etiqueta[nombreb]]+"' value='"+numrelaciones[c]+"' >"+nodob[c][etiqueta[nombreb]]+" tiene: "+numrelaciones[c]+" nodos relacionados </div>"   );
			
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
		$('#btnSubmitL').click(function() { 
			 borrar = [];
			borrarVecinos=[];
			borrarLinks=[];
			cerrarVecinos(pulsa,false);
			
			consulReal=0;
			limite=Math.ceil(totalimite/numConsultas);

			nombresNodosb=[];
			atributoNombre=etiqueta[nombreb];
	
			for(j=0; j < nodob.length; j++){
				nombresNodos={};
				var localb = $('#'+j+'nrl').is(":checked");
				localbthis=$('#'+j+'nrl');
				
				if(localb){
					numnodos=parseInt(localbthis.attr('value'));
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

			for(k=0; k<nombresNodosb.length; k++){
		
				nodoveci=nombresNodosb[k].nodob;
				skip=nombresNodosb[k].numero;

				VecinosLocales(pulsa)
				$("#mi_div3").empty();
				$("#miselec").empty();
				$("#miselec").hide();
				$("#mi_div5").empty();
				$('#btnSubmitL').hide();
				$("#loader1").show();
				$("#mi_div3").hide();
				$("#mi_div5").hide();
			}
		
		
		
		$("g").popover('hide');
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
	 
		