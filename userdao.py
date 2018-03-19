from saveUser import *
import sqlite3 import Error
import mysql.connector
class UserDao() :
	#Chemin de la base de donne local
	#A modifier
	path = ''
	def create_connection(db_file=path) :
		try: 
			conn = sqlite3.connect(db_file)
			return conn
		except Error as e:
			print (e)		
		return none
	
	#Sauvegarde un patient dans la base de donne local
	def saveUserLocal(conn,user) :
		conn = create_connection(database)
		with conn:
			patient = user
			cur = conn.cursor()
			cur.execute("INSERT INTO tbPatient(prenom,nom,dateNaissance) values (user.prenom,user.nom,user.dateNaissance)")
		cur.close()
		conn.commit()
		conn.close()
	
	#Sauvegarde vers la base de donne local une prise de test associe selon un client et son code 
	def saveBlood(conn,test,user):
		conn = create_connection(database)
		with conn:
			prise = test
			cur = conn.cursor()
			#String sql = "Select" + test.id + "from tbPrisePatient where nom=" + user.nom + "prenom=+ " + user.prenom + ";"
			cur.execute("INSERT INTO tbPrisePatient(date,systolique,diasystolique,poul,idClient) values (datetime('now'),test.systolique,test.diasystolique,test.poul,user.id)")
		cur.close()
		conn.commit()
		conn.close()