// las funciones PrimerNodo y Nodo1 llaman al primer nodo que pide el usuario mediante la busqueda 

function PrimerNodo(nodoini){
var consulta4 = 
	{

	  "query" : "START n=node("+nodoini+") MATCH n-[re]-x RETURN n, ID(n),count (x) ",
	  "params" : {	  }
	};
	

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta4),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   
			//console.log(data.data);
			primer = data.data[0][0].data;
			Id = data.data[0][1];
			label=data.data[0][0].metadata.labels[0];
			primer["sid"]=Id;
			primer["label"]=label;
			cuenta = data.data[0][2];
			nodes.push(primer);
			
			actualizaGrafo();
		
		   
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	 }
	 
	 
	 
	 
	 function Nodo1(dato,nodoini){
var consulta11 = 
	{

	  "query" : "START n=node(*) where n."+dato+"='"+nodoini+"' RETURN n, ID(n) ",
	  "params" : {	  }
	};
	

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta11),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
	   
			//console.log(data.data);
			primer = data.data[0][0].data;
			Id = data.data[0][1];
			label=data.data[0][0].metadata.labels[0];
			primer["sid"]=Id;
			primer["label"]=label;
			cuenta = data.data[0][2];
			nodes.push(primer);
			
			actualizaGrafo();
		
		   
       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
       },
       complete: function(data) {

       }
	   })
	 }