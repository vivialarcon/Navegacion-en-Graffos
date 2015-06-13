	 
function FacetadoLocal(sid){

var consulta6 = 
	{

	  "query" : "START n=node("+sid+") MATCH n-[re]-x where "+tiposN +" RETURN  distinct labels(x), count (x)",
	  "params" : {	  }
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
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
		for (j = 0; j < tiposLocal.length; j++) { 
		
			$( "#mi_div3" ).append( " <option name='"+tiposLocal[j].nume+"' value='"+tiposLocal[j].tipo+"' >" +tiposLocal[j].tipo+" ("+tiposLocal[j].nume+" nodos) </option>");

		}
		$("#mi_div3").show();
		$("#loader1").hide();
		
		sidClick=sid;
		$("#mi_div3").change(function() {
		$("#loader2").show();
			if($("#mi_div3 option:selected").val()!= 'vaciop'){
				$("#mi_div5").empty();
				nombre = $("#mi_div3 option:selected").val();
				$("#miselec").empty();
				numveci=parseInt($("#mi_div3 option:selected").attr('name'));
				
				if(numveci<=totalimite){

					VecinosMenor(sidClick);
					$("#mi_div3").empty();
				}
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
	   

		
	   
