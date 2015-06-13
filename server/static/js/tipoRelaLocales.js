function tiporelaLocales(sid){
var consulta8 = 
	{

	  "query" : "START n=node("+sid+") MATCH n-[re]-x-[r]-(b) WHERE x:"+nombre+" RETURN DISTINCT labels(x), type(r) , labels(b) ",
	  "params" : {	  }
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
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
		
		
		$( "#miselec" ).append( " <option value='vacio'>...</option>");
		for(c=0; c<relacionxb.length; c++){
		
			$( "#miselec" ).append( "<option value='"+tipob[c]+"'>"+relacionxb[c]+"</option>"   );
		
		}
		$("#loader2").hide();
		$("#miselec").show();
		aplastado=sid;
		
		
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
	   
		