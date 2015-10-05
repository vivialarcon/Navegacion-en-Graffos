# coding=utf-8
import sys
reload(sys)
sys.setdefaultencoding('UTF-8')
import requests
from flask import render_template
from flask import Flask
from flask import *
from credenciales import *
import json
app = Flask(__name__)

@app.route("/")
def principal():
    #print request.data    
    return render_template('index.html')

@app.route("/peticion", methods =['GET','POST'])
def peticion():
    print "Hola"
    r= requests.post('http://localhost:9014/db/data/cypher',request.data, auth=(user,passw))
    print r.json()
    return r.text
	#asdasdasdasd#
@app.route("/peticion_n", methods =['GET','POST'])
def peticion_n():
	c=json.loads(request.data)
	print "español"
	
	if (c["consulta"]==1):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x where "+c["tnodo"] +" "+c["trel"]+" RETURN x, ID(x), startnode(re),ID(startnode(re))","params" : {	  }})
	# consulta del tipo de nodos existentes
	elif (c["consulta"]==2):
		consulta=json.dumps({"query" : "START n=node(*) RETURN distinct labels(n)","params" : {	  }})
	# consulta del tipo de relaciones existentes
	elif (c["consulta"]==3):
		consulta=json.dumps({"query" : "START r=rel(*) return distinct(type(r))","params" : {	  }})
	# consulta del primer nodo por id de nodo
	elif (c["consulta"]==4):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x RETURN n, ID(n),count (x) ","params" : {	  }})
	# contar el numero de vecinos del nodo que se ha clickeado
	elif (c["consulta"]==5):	
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x where "+c["tnodo"] +"  RETURN count(x) ","params" : {	  }})
	# obtiene los tipos de nodos vecinos y el numero de vecinos que tiene cada tipo 
	elif (c["consulta"]==6):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x where "+c["tnodo"]+" RETURN  distinct labels(x), count (x)","params" : {	  }})
	# se ejecuta cuando se ha elegido un vecino con menos vecinos que el limite definido
	elif (c["consulta"]==7):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x  where x:"+c["tvecino"]+"  RETURN x, ID(x), startnode(re),ID(startnode(re))","params" : {	  }})
	#consulta tipos de relaciones de los nodos vecinos (relaciones locales)
	elif (c["consulta"]==8):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x-[r]-(b) WHERE x:"+c["tvecino"] +" RETURN DISTINCT labels(x), type(r) , labels(b) ","params" : {	  }})
	# devuelve los nodos vecinos del vecino que tengan la relacion elegida y el número de relaciones que tiene 
	elif (c["consulta"]==9):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x-[r]-(b) WHERE x:"+c["tvecino"]+" and b: "+c["relvecino"]+" RETURN DISTINCT count (r),b ","params" : {	  }})
	# encuentra los nodos que cumplan con los parámetros y por cada checkbox en check
	elif (c["consulta"]==10):
		consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x-[r]-(b) where x:"+c["tvecino"]+" and b:"+c["relvecino"]+" and b."+c["atributo"]+"='"+c["vecino"]+"'  RETURN x, ID(x), startnode(re),ID(startnode(re)) skip "+str(c["salto"])+"  Limit "+str(c["limite"])+"","params" : {	  }})
	# consulta del primer nodo por propiedad y valor de propiedad
	elif (c["consulta"]==11):
		consulta=json.dumps({"query" : "START n=node(*) where n."+c["dato"]+"='"+str(c["id"])+"' RETURN n, ID(n) ","params" : {	  }})
		
	print "peticion nueva"
	#consulta="{'query':'START n=node("+identificador+")MATCH n-[re]-x where"+tiposNodos+" "+tiposRelaciones+" RETURN x, ID(x), startnode(re),ID(startnode(re))','params':{} }"
	r= requests.post('http://localhost:9014/db/data/cypher',consulta, auth=(user,passw))
	return r.text
	
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)
