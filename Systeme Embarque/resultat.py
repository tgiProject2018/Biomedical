from shell import *
class Resultat:
	
	pouls = 0
	systolique = 0
	diasystolique = 0
	datePrise = ""
	
	def __init__(self):
		self.pouls = 0
		self.systolique = 0
		self.diasystolique = 0 
		self.datePrise = ""
	
	def createResultat(self, poulsV, systoliqueV, diasystoliqueV, datePriseV):
		self.pouls = poulsV
		self.systolique = systoliqueV
		self.diasystolique = diasystoliqueV
		self.datePrise = datePriseV
	