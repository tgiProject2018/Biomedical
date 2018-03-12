import cmd, sys
from saveUser import *
from resultat import *
from sendToServer import *
from getResultat import *

class BioMedicalShell(cmd.Cmd):
    intro = 'Welcome Biomedical, Bonjour\n'
    prompt = '(bio) '
    file = None
    result = Resultat()
		
    #commande principale do_commande
    def do_startblood(self, arg):
        'Fait acquisition de la pression sanguine et affichage console'
        self.result = GetResultat().getResultat()
		
		#attendre les reponse des capteurs.	
        print('Pression systolique %d\n' % self.result.systolique)
        print('Pression diasystolique %d\n' % self.result.diasystolique)
        print('Pouls cardiaque %d\n' % self.result.pouls)
        print('Resultat pris')
		
    def do_savecuruserdata(self, arg):
        'Sauvegarder lacquisition courante dans la BD locale du capteur. NOM PRENOM DATE_NAISSANCE(YYYY/MM/DD)'
        #spliter nom prenom date
        tout = arg.split(' ')
        if(len(tout)==3):
            nom,prenom,date = arg.split(' ')
            print('User sauvegarder: Nom: '+nom+' Prenom: '+prenom+' Date Naissance: '+ date)
            user = User()
            user.createUser(nom, prenom, date, self.result)
            user.sendUser("192.0.0.0")
		
    def do_configdate (self, arg):
	    'Ajuster la date et le temps. YYYY/MM/DD HH:MM'
	    changerHeure(arg)
	
    def do_senddata(self, arg):
        'Envoie des donnees au serveur a distance a Ladresse ip du serveur (ipserver) doit etre envoyee en parametre'
        
        transfere = Transfere()
        transfere.createTransfere("ip1",arg)
        transfere.transferer()

		
    def do_exit(self, arg):
        'Exit the shell'
        return True			

    def changerHeure(arg):
	    #spliter en annee mois jour heure minute
        annee,mois,reste = arg.split('/')
        jour,reste = reste.split(' ')
        heure,minute = reste.split(':')	
	
	#setTime(heure,minute,0,jour,mois,annee);
if __name__ == '__main__':
	BioMedicalShell().cmdloop()	
