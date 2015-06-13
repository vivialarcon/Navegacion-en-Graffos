function abrirVecinos(sid){

			//recorre todo el arreglo de nodos que se encuentra almacenado, se compara el identificador de cada elemento almacenado 
            //con el identificador del elemento que se va almacenar 			
				  for(j=0; j<nodes.length;j++){
				     if(nodes[j].sid==b.sid){
					     insertada=true;
						 posb=j;
				     }
				  }
				  if(insertada==false){
				     posb=nodes.push(b) - 1;
				  }
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

					for(k=0; k<links.length; k++){
					   if(links[k].source.sid== nodes[origenind].sid && links[k].target.sid==nodes[posfin].sid)
					       linkinser=true; 
						   
					}
					if(linkinser==false){
						
						links.push({source: nodes[origenind], target: nodes[posfin]});
					}
	
	}