
function cerrarVecinos(sid,actualiza){

//buscamos y agregamos todos los nodos vecinos del nodo pulsado	
	for( i=0; i<links.length;i++){
   
        if(links[i].target.sid==sid){
		   borrar.push(links[i].source);
		   
		}
		if(links[i].source.sid==sid){
		   borrar.push(links[i].target);
		   
		}
    
	}
	
	
	for(j=0; j < borrar.length; j++){
		linksVecinos = [];
		
		//buscamos cuantos links tiene cada vecino 
		for(k=0; k < links.length; k++){
		      
		    if(links[k].source.sid == borrar[j].sid)
			    linksVecinos.push(links[k]);
			if(links[k].target.sid == borrar[j].sid)
			    linksVecinos.push(links[k]);
		}
		   //si el nodo vecino tiene una sola relación correspondiente al que une al nodo pulsado se agrega a los arreglos correspondientes el nodo 
		   //y la relación para luego ser eliminados
		if(linksVecinos.length == 1){
			borrarLinks.push(linksVecinos[0]);
			borrarVecinos.push(borrar[j]);
			   
		}
		// en el caso de tener mas de una relación se busca la que une el vecino con el nodo pulsado y agrega al arreglo de relaciones para eliminarse  
		if(linksVecinos.length > 1 && actualiza){

			for( a=0; a<links.length;a++){

				if(links[a].target.sid==sid && links[a].source.sid == borrar[j].sid){
					borrarLinks.push(links[a]);
				}
				if(links[a].source.sid==sid && links[a].target.sid == borrar[j].sid){
					borrarLinks.push(links[a]);
				}

			}
			   
		}
			
	}
	
	// Se busca las relaciones que coincidan entre el arreglo que contiene todas las relaciones y el arreglo que contienen las relaciones a eliminarse 
	// y se las elimina 
	for(f=0; f <links.length; f++){
		for(p=0; p <borrarLinks.length; p++){
			if(borrarLinks[p].source.sid == links[f].source.sid  && borrarLinks[p].target.sid==links[f].target.sid){
				links.splice(f,1);
			}
		}
	}
// se busca en el arreglo de todos los nodos los que coincidan con los que se encuentran en el arreglo de nodos para eliminar y se los elimina 
	for(n=0; n < nodes.length; n++){
		for(g=0; g < borrarVecinos.length; g++){
			 if(nodes[n].sid == borrarVecinos[g].sid ){
				 nodes.splice(n,1);
			}	 
		}
	}
}