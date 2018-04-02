#from saveUser import *
import sqlite
class PatientDao() :
	#Chemin de la base de donne local
	#A modifier
	path = ''
	def create_connection() :
		try: 
			conn = sqlite3.connect(path)
			return conn
		except Error as e:
			print (e)		
		return none
	
	#Sauvegarde un patient dans la base de donne local
	def saveUserLocal(user) :
		conn = create_connection(database)
		with conn:
			cur = conn.cursor()
			cur.execute("INSERT INTO tbPatient(prenom,nom,dateNaissance) values (%s,%s,%s)" , user.prenom,user.nom,user.dateNaissance)
		cur.close()
		conn.commit()
		conn.close()
	
	#Sauvegarde vers la base de donne local une prise de test associe selon un client et son code 
	def saveBlood(user,id):
		conn = create_connection(database)
		with conn:
			prise = test
			cur = conn.cursor()
			#String sql = "Select" + test.id + "from tbPrisePatient where nom=" + user.nom + "prenom=+ " + user.prenom + ";"
			cur.execute("INSERT INTO tbPrisePatient(date,systolique,diasystolique,poul,idClient) values (datetime('now'),%f,%f,%f,%f,%d)" , user.systolique,user.diasystolique,user.poul,id)
		cur.close()
		conn.commit()
conn.close()
