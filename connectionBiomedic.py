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
	
def afficherInfo(*args):
	idPatient = args[0]
	query = ("Select date, systolique, diasystolique, poul from tblPriseTest"
			"Where id = %s")
	cursor.execute(query, idPatient)
	
	for(date, systolique, diasystolique, poul) in cursor:
		print("date : {}, systolique : {}, diasystolique : {}, poul : {} ".format(date,systolique,diasystolique,poul))
		socket.emit('afficherInfoPatient', {date: date, systolique: systolique, diasystolique: diasystolique, poul:poul});
	

	cursor.close()
	cnx.close();
		
def afficherToutLesPatient(*args):
	#idPatient = args[0]
	query = ("Select id , prenom, nom, dateDeNaissance, adresse, date from tblPatient"
			""
	)
	cursor.execute(query, idPatient)
	#Select x.id, prenom, nom, y.date from tbpatient x
	#inner join tbpriseteste y
	#on(y.idClient = x.id)
	#Where y.id = (select max(id) from tbpriseteste where idClient = x.id);
	for(prenom, nom, dateDeNaissance, adresse) in cursor:
		print("prenom : {}, nom : {}, Naissance : {}, adresse : {} ".format(prenom,nom,dateDeNaissance,adresse))
		socket.emit('afficherToutLesPatient', {prenom: prenom, nom: nom, naissance: dateDeNaissance, adresse:adresse});
	

	cursor.close()
	cnx.close();
	
## 'main'
socketIO.on('afficherInfo', afficherInfo)
## Loop principal
socketIO.wait()
## On fait le menage
cursor.close()
cnx.close()