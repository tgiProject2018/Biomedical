from shell import *
class User :
	nom = ""
	prenom = ""
	dateNaissance = ""
	resultat = Resultat()
		
	def __init__(self):
		self.nom = ""
		self.prenom = ""
		self.dateNaissance = "" 
		self.resultat = Resultat()
		
	def createUser(self, nomV, prenomV, dateNaissanceV, resultatV):
		self.nom = nomV
		self.prenom = prenomV
		self.dateNaissance = dateNaissanceV
		self.resultat = resultatV
	
	def sendUser(self, ip):
		#SQL("") ip
		print("send user")
		print(self.resultat.pouls)
		print('\n')
		print(self.resultat.systolique)
		print('\n')
		print(self.resultat.diasystolique)
		print('\n')
		print(self.resultat.datePrise)
		print('\n')
		
		
