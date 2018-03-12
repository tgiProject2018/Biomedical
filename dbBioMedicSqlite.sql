.open dbbiomedic;
PRAGMA foreign_keys=on;
BEGIN TRANSACTION;
CREATE TABLE tblPatient (
id integer primary key autoincrement,
prenom text,
nom text,
adresse text,
dateNaissance numeric);
CREATE TABLE tblPriseTeste (
id integer primary key autoincrement,
date numeric,
systolique real,
diasystolique real,
poul real,
idPatient integer,
foreign key (idPatient) references tblPatient(id));
COMMIT;
