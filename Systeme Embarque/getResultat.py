from resultat import *
class GetResultat():

	def getResultat(self):
		#call la class resultat qui fake les resultat 
		resultat = Resultat()
		resultat.createResultat(71, 211, 160, "12-03-2018")
		return resultat
