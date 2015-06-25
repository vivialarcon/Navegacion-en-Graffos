
// var enlace="http://200.93.225.47:9014/db/data/cypher"
var enlace="/peticion"
// var enlace="http://localhost:7474/db/data/cypher"

//Máximo de nodos para mostrar 
var totalimite=25;

//Nombres de los Nodos de acuerdo al tipo 
var etiqueta={};

etiqueta["Alcance"] = "det_alcance_desc";
etiqueta["Ambito"] = "amb_descripcion";
etiqueta["Canton"] = "can_descripcion";
etiqueta["Comunidad"] = "com_descripcion";
etiqueta["Detalle"] = "inmaterial_id";
etiqueta["DetalleSubambito"] = "dsa_descripcion";
etiqueta["Elemento"] = "nombre";
etiqueta["ElementosSig"] = "nombre";
etiqueta["Herramientas"] = "nombre";
etiqueta["Inmaterial"] = "inmaterial_denominacion";
etiqueta["Lengua"] = "len_descripcion";
etiqueta["Parroquia"] = "par_descripcion";
etiqueta["Periodicidad"] = "det_periodicidad_desc";
etiqueta["Preparativo"] = "nombre";
etiqueta["Producto"] = "nombre";
etiqueta["Provincia"] = "pro_descripcion";
etiqueta["Sensibilidad"] = "sensibilidad_desc";
etiqueta["Subambito"] = "sua_descripcion";
etiqueta["Tecnica"] = "nombre";
etiqueta["UsoSimbolico"] = "det_uso_simbolico_desc";


// function label(d){

// label = d[etiqueta[d.label]];

// return label;
// }

//Campos que se muestran en el tooltip de los nodos
var camp_tooltip ={

"Alcance":["det_alcance_desc"],
"Ambito":["amb_descripcion"],
"Canton":["can_descripcion"],
"Comunidad":["com_descripcion"],
"Detalle":["inmaterial_id"],
"DetalleSubambito":["dsa_descripcion"],
"Elemento":["nombre"],
"ElementosSig":["nombre"],
"Herramientas":["nombre"],
"Inmaterial":["inmaterial_denominacion"],
"Lengua":["len_descripcion"],
"Parroquia":["par_descripcion"],
"Periodicidad":["det_periodicidad_desc"],
"Preparativo":["nombre"],
"Producto":["nombre"],
"Provincia":["pro_descripcion"],
"Sensibilidad":["sensibilidad_desc"],
"Subambito":["sua_descripcion"],
"Tecnica":["nombre"],
"UsoSimbolico":["det_uso_simbolico_desc"],

}

//Campos que se muestran al abrir toda la informacion 
var camp_modal ={

"Alcance":["det_alcance_desc","det_alcance"],
"Ambito":["amb_descripcion","amb_codigo"],
"Canton":["can_descripcion","pro_codigo"],
"Comunidad":["com_descripcion","com_codigo"],
"Detalle":["inmaterial_id","uso_alcance_desc"],
"DetalleSubambito":["dsa_descripcion","dsa_codigo"],
"Elemento":["nombre","inmaterial_id"],
"ElementosSig":["nombre","inmaterial_id"],
"Herramientas":["nombre","inmaterial_id"],
"Inmaterial":["inmaterial_denominacion","inmaterial_id","inmaterial_sensi_desc","comunidad_nombre","lengua_nombre"],
"Lengua":["len_descripcion","len_codigo"],
"Parroquia":["par_descripcion","pro_codigo","can_codigo","par_codigo"],
"Periodicidad":["det_periodicidad_desc","det_periodicidad"],
"Preparativo":["nombre","inmaterial_id"],
"Producto":["nombre","inmaterial_id"],
"Provincia":["pro_descripcion","pro_codigo"],
"Sensibilidad":["sensibilidad_desc","sensibilidad_id"],
"Subambito":["sua_descripcion","sua_codigo"],
"Tecnica":["nombre","inmaterial_id"],
"UsoSimbolico":["det_uso_simbolico_desc","det_uso_simbolico"],


}