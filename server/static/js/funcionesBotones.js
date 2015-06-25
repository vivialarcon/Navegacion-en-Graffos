//Asigno a la variable buscar el input text del buscador inicial de nodos 
	buscar= $("#Buscador");
	busq=0;
	//Cuando se selecciona en el buscador una de las opciones de tipo de nodo por el cual buscar
	$('#idnodo').click(function() { 	
		busq=1;	
	});

	$('#provincia').click(function() { 
		busq=2;
		name=$('#provincia').attr('name');
	});
	
	$('#canton').click(function() { 
		busq=3;
		name=$('#canton').attr('name');
	});
	
	$('#lengua').click(function() { 
		busq=4;
		name=$('#lengua').attr('name');
	});
	
	// click en el boton buscar 
		$('#PrimerNodo').click(function() { 
		// console.log(busq);
			
			if(busq==0){
				alert("Primero elija con el tipo de dato que desea buscar")
			}
			// borramos lo que tenemos en pantalla al realizar nueva busqueda 
			
			if(links.length != 0){
				links.length=0;
			}
			if(nodes.length != 0){
				nodes.length=0;
			}
			//Si se elige IDNodo se llama a la función PrimerNodo ingresando el identificador del nodo 
			if(busq==1){
				nodoini=parseInt(buscar.val());
				PrimerNodo(nodoini);
			}
			
			//Si se elige un tipo de nodo para buscar por su nombre se llama a la función Nodo1  
			if(busq != 1 && busq != 0){
				//nombre ingresado
				nodoini=buscar.val().toUpperCase();
				//tipo de nodo
				dato=etiqueta[name];
				
				Nodo1(dato,nodoini);
				
			}

	 });
	 
	 
	 
	//tooltip guía para la busqueda inicial 
	 $('#empezar').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });
	 
	 //tooltip guía para los checkbox en el tipo de nodos 
	 $('#titnodos').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		//cambiar texto 
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });
	 
	 
	 //tooltip guía para el desplegable de tipo de nodos 
	 $('#collapseOne').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		//cambiar texto 
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });