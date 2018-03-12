from shell import *
class Resultat():
	
	pouls = 0
	systolique = 0
	diasystolique = 0
	datePrise = ""
	
	def __init__(self):
		self.pouls = 0
		self.systolique = 0
		self.diasystolique = 0 
		self.datePrise = ""
	
	def createResultat(self, poulsArg, systoliqueArg, diasystoliqueArg, datePriseArg):
		self.pouls = poulsArg
		self.systolique = systoliqueArg
		self.diasystolique = diasystoliqueArg
		self.datePrise = datePriseArg
	