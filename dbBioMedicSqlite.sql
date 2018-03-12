.open dbbiomedic;
PRAGMA foreign_keys=on;
BEGIN TRANSACTION;
CREATE TABLE tblpatient (
id integer primary key autoincrement,
prenom text,
nom text,
dateNaissance numeric);
INSERT INTO tblpatient VALUES(1,'paul','tadi','1994-08-02');
CREATE TABLE tblpriseTeste (
id integer primary key autoincrement,
date numeric,
systolique real,
diasystolique real,
poul real,
idPatient integer,
foreign key (idPatient) references tblPatient(id));
INSERT INTO tblPriseTeste VALUES(1,1994,NULL,NULL,NULL,1);
INSERT INTO tblPriseTeste VALUES(2,'2018-02-27',10.0,22.999999999999999999,44.0,1);
INSERT INTO tblPriseTeste VALUES(3,1990,NULL,NULL,NULL,1);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('tblPatient',1);
INSERT INTO sqlite_sequence VALUES('tblPriseTeste',1989);
COMMIT;
