function VecinosLocales(sid){

var consulta7 = 
	{
	  "query" : "START n=node("+sid+") MATCH n-[re]-x-[r]-(b) where x:"+nombre+" and b:"+nombreb+" and b."+atributoNombre+"='"+nodoveci+"'  RETURN x, ID(x), startnode(re),ID(startnode(re)) skip "+skip+"  Limit "+limite+"",
	  "params" : {	  }
	};


	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta7),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {

		   for(i=0; i<data.data.length; i++){
		   origenind = -100;
				  posfin = -100;
		          insertada=false;
				  linkinser=false;
				  
			      b = data.data[i][0].data;
				  id=data.data[i][1];
				  label=data.data[i][0].metadata.labels[0];
				  b["sid"]=id;
				  b["label"]=label;
				  nodoinicio = data.data[i][2].data;
				  idre=data.data[i][3];
				  nodoinicio["sid"]=idre;
				
		          abrirVecinos(sid);
	
				  
			}
		   consulReal++;
		   if(consulReal==numConsultas){
				actualizaGrafo();
			}

       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
		
       },
       complete: function(data) {

       }
	   
	   })
	   }