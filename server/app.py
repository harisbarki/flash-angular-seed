from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder=os.path.join('client_dist'), static_url_path='')

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web', 
        'done': False
    }
]

@app.route('/', methods=['GET'])
def index():
    basedir = os.path.abspath(os.path.dirname(__file__))
    indexFileExists = os.path.isfile(os.path.join(basedir, app.static_folder, 'index.html'))
    if indexFileExists:
        return app.send_static_file('index.html')
    else:
        return "<p>Either your frontend is not compiled or you are running hmr, if latter then please go to <a href='http://127.0.0.1:4200'>127.0.0.1:4200</a>" \
				+ "<br>Also you need to start the browser without security for cross scripting if you want to make api calls to the backend" \
				+ "<br>Example command:" \
				+ "<br><code>\"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\" --user-data-dir=\"C:/Chrome dev session2\" --disable-web-security</code></p>"
        

@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})


if __name__ == '__main__':
    app.run(debug=True)