import requests
# importar flask
from flask import render_template
from flask import Flask
from flask import *
from credenciales import *
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
	
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)