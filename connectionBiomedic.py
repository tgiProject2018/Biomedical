from socketIO_client import SocketIO
import mysql.connector


## Connection a la base de donnee
cnx = mysql.connector.connect(user='root', password='',
	host='127.0.0.1',
	database='dbbiomedic')
cursor = cnx.cursor()

## Deleguees
def on_connect():
	print('connect')
def on_disconnect():
	print('disconnect')
def on_reconnect():
	print('reconnect')
	
def insererPatient(*args)
	query = ("insert into tblPatient(prenom,nom,dateNaissance,adresse)values (prenom = %s, nom = %s,dateNaissance = %s adresse = %s)");
	cursor.execute(query, (args[0],args[1],args[2],args[3]));
	cursor.close();
	cnx.close();
	
	
def afficherInfo(*args):
	idPatient = args[0]
	query = ("Select date, systolique, diasystolique, poul from tblPriseTest"
			"Where id = %s")
	cursor.execute(query, idPatient)
	
	for(date, systolique, diasystolique, poul) in cursor:
		print("date : {}, systolique : {}, diasystolique : {}, poul : {} ".format(date,systolique,diasystolique,poul))
		socket.emit('afficherInfoPatient', {date: date, systolique: systolique, diasystolique: diasystolique, poul:poul});
	

	cursor.close();
	cnx.close();
		
def afficherToutLesPatient(*args):
	query = ("Select id , prenom, nom, dateDeNaissance, adresse, date from tblPatient""")
	cursor.execute(query, idPatient)
	#Select x.id, prenom, nom, y.date from tbpatient x
	#inner join tbpriseteste y
	#on(y.idClient = x.id)
	#Where y.id = (select max(id) from tbpriseteste where idClient = x.id);
	for(prenom, nom, dateDeNaissance, adresse) in cursor:
		print("prenom : {}, nom : {}, Naissance : {}, adresse : {} ".format(prenom,nom,dateDeNaissance,adresse))
		socket.emit('afficherToutLesPatient', {prenom: prenom, nom: nom, naissance: dateDeNaissance, adresse:adresse});
	

	cursor.close();
	cnx.close();

def modifierPatient(*args):
	idPatient = args[0];
	query = ("update tblPatient set prenom = %s, nom = %s, adresse = %s where id = %s");
	cursor.execute(query, (args[1],args[2],args[3],idPatient));
	cursor.close();
	cnx.close();
	
def rechercheChamp(*args):
	query = ("select * from tblPatient where prenom like %s or nom like %s");
	cursor.execute(query,(args[0]+"%",args[0]+"%"));
	results = cursor.fetchall();
	socketIO.emit('rechercheChamp', resultats);
	cursor.close();
	cnx.close();
	
## 'main'
socketIO = SocketIO("localhost",8080)
socketIO.on('insererPatient', insererPatient)
socketIO.on('modifierPatient', modifierPatient)
socketIO.on('afficherInfo', afficherInfo)
socketIO.on('afficherPatient', afficherToutLesPatient)
socketIO.on('rechercheChamp', rechercheChamp)
## Loop principal
socketIO.wait()
## On fait le menage
cursor.close()
cnx.close()
