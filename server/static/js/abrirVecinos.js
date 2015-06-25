function abrirVecinos(sid){

			//recorre todo el arreglo de nodos que se encuentra almacenado, se compara el identificador de cada elemento almacenado 
            //con el identificador del elemento que se va almacenar si ya esta en el arreglo insertada se pone en true y no se agrega 			
				  for(j=0; j<nodes.length;j++){
				     if(nodes[j].sid==b.sid){
					     insertada=true;
						 posb=j;
				     }
				  }
				  // si insertada esta en false no esta en el arreglo el nodo y se agrega 
				  if(insertada==false){
				     posb=nodes.push(b) - 1;
				  }
				  // Se verifica el nodo inicio de la relacion para determinar la dirección de la misma
				  for(j=0; j<nodes.length;j++)
				  {
					 if(nodes[j].sid==sid && nodoinicio.sid==nodes[j].sid){
					     origenind=j;
						 posfin = posb;
					 }
					 if(nodes[j].sid==sid && nodoinicio.sid != nodes[j].sid){
					     origenind=posb;
						 posfin=j;
					 }
				  }  
				  
				  //Se verifica que las relaciones no esten en el arreglo para agregarlas 

					for(k=0; k<links.length; k++){
					   if(links[k].source.sid== nodes[origenind].sid && links[k].target.sid==nodes[posfin].sid)
					       linkinser=true; 
						   
					}
					if(linkinser==false){
						
						links.push({source: nodes[origenind], target: nodes[posfin]});
					}
	
	}