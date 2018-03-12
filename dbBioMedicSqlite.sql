.open dbbiomedic;
PRAGMA foreign_keys=on;
BEGIN TRANSACTION;
CREATE TABLE tblPatient (
id integer primary key autoincrement,
prenom text,
nom text,
adresse text,
dateNaissance numeric);
INSERT INTO tblPatient VALUES(1,'paul','tadi','1994-08-02');
CREATE TABLE tblPriseTeste (
id integer primary key autoincrement,
date numeric,
systolique real,
diasystolique real,
poul real,
idPatient integer,
foreign key (idPatient) references tblPatient(id));
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('tblPatient',1);
INSERT INTO sqlite_sequence VALUES('tblPriseTeste',1989);
COMMIT;
