from shell import *
class User() :
	nom = ""
	prenom = ""
	dateNaissance = ""
	resultat = Resultat()
		
	def __init__(self):
		self.nom = ""
		self.prenom = ""
		self.dateNaissance = "" 
		self.resultat = Resultat()
		
	def createUser(self, nomArg, prenomArg, dateNaissanceArg, resultatArg):
		self.nom = nomArg
		self.prenom = prenomArg
		self.dateNaissance = dateNaissanceArg
		self.resultat = resultatArg
	
	def sendUser(self, ip):
		# code DOMINICQUE
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
		
		
