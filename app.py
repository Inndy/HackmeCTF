from bottle import *

def path(x):
    return os.path.join(os.path.dirname(__file__), x)

app = Bottle()

@app.get('/')
def index(id=None):
    return static_file('/index.html', path('./front-end/dist'))

@app.get('/static/<file:path>')
def index(file):
    return static_file(file, path('./front-end/dist/static'))

app.run(server='waitress', port=8787)
