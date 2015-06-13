	buscar= $("#Buscador");
	busq=0;
	
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
	
	
		$('#PrimerNodo').click(function() { 
		// console.log(busq);
			
			if(busq==0){
				alert("Primero elija con el tipo de dato que desea buscar")
			}
			
			if(links.length != 0){
				links.length=0;
			}
			if(nodes.length != 0){
				nodes.length=0;
			}
			if(busq==1){
				nodoini=parseInt(buscar.val());
				PrimerNodo(nodoini);
			}
			
			if(busq != 1 && busq != 0){
				nodoini=buscar.val().toUpperCase();
				dato=etiqueta[name];
				// console.log(dato);
				Nodo1(dato,nodoini);
				
			}

	 });
	 
	 
	 
	
	 $('#empezar').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });
	 
	 $('#titnodos').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });
	 
	 
	 $('#collapseOne').tooltip({
	 
		'html':'true',
		'placement': 'bottom',
		'title':"<div >Para empezar elija el tipo de dato que va a ingresar</div>"
					  
       
	 
	 });