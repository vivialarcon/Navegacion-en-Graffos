//Agrega al array de eliminado el nodo pulsado
cerrar = function(sid){
 
	 borrar = [];
 borrarVecinos=[];
 borrarLinks=[];
 
 //busco posicion del nodo pulsado
   for(l=0; l<nodes.length; l++){
	   if(nodes[l].sid==sid){
	      pulsado=l;
	   }
	}
	 
	borrarVecinos.push(nodes[pulsado]);
	
	cerrarVecinos(sid,true);
	 actualizaGrafo();
	 
}


