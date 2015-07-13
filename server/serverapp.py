import requests
# importar flask
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
    #print request.data
    print "Hola"
    r= requests.post('http://localhost:9014/db/data/cypher',request.data, auth=(user,passw))
    print r.json()
    return r.text
	
@app.route("/peticion_n", methods =['GET','POST'])
def peticion_n():
	c=json.loads(request.data)
	consulta=json.dumps({"query" : "START n=node("+str(c["id"])+") MATCH n-[re]-x RETURN n, ID(n),count (x) ","params" : {	  }})
	print "peticion nueva"
	#consulta="{'query':'START n=node("+identificador+")MATCH n-[re]-x where"+tiposNodos+" "+tiposRelaciones+" RETURN x, ID(x), startnode(re),ID(startnode(re))','params':{} }"
	r= requests.post('http://localhost:9014/db/data/cypher',consulta, auth=(user,passw))
	return r.text
	
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)