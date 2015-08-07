// las funciones PrimerNodo y Nodo1 llaman al primer nodo que pide el usuario mediante la busqueda 

function PrimerNodo(nodoini){
	
var consulta4 = 
	{
	  "id" : nodoini,
	  "consulta" : 4
	};
	

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
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
	  "id": nodoini,
	  "dato":dato,
	  "consulta" : 11
	};

	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
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