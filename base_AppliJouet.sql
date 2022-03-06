DROP DATABASE IF EXISTS AppliJouet;
CREATE DATABASE AppliJouet;
USE AppliJouet;

CREATE TABLE IF NOT EXISTS Jouet (
	id AUTO_INCREMENT NOT NULL,
	nom VARCHAR(20) NOT NULL,
	prix FLOAT NOT NULL,
	description VARCHAR(50) NOT NULL,
	CONSTRAINT Jouet_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Message (
	id AUTO_INCREMENT NOT NULL,
	description VARCHAR(100) NOT NULL,
	provenance VARCHAR(20) NOT NULL,
	destinataire VARCHAR(20) NOT NULL,
	date DATE NOT NULL,
	CONSTRAINT Message_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Troc (
	id AUTO_INCREMENT NOT NULL,
	jouet1 VARCHAR(20) NOT NULL,
	jouet2 VARCHAR(20) NOT NULL,
	date DATE NOT NULL,
	CONSTRAINT Troc_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Payement (
	id AUTO_INCREMENT NOT NULL,
	moyenPayement VARCHAR(20) NOT NULL,
	idTroc INT NOT NULL,
	CONSTRAINT Payement_pk PRIMARY KEY (id),
	CONSTRAINT payement_idTroc_fk FOREIGN KEY (idTroc)
		REFERENCES Troc (id)
);

CREATE TABLE IF NOT EXISTS Visiteur (
	id AUTO_INCREMENT NOT NULL,
	pseudo VARCHAR(10) NOT NULL,
	mdp VARCHAR(10) NOT NULL,
	mail VARCHAR(30) NOT NULL,
	idJouet INT NOT NULL,
	idMessage INT NOT NULL,
	idPayement INT NOT NULL,
	CONSTRAINT Visiteur_pk PRIMARY KEY (id),
	CONSTRAINT visiteur_idJouet_fk FOREIGN KEY (idJouet)
		REFERENCES Jouet (id),
	CONSTRAINT visiteur_idMessage_fk FOREIGN KEY (idMessage)
		REFERENCES Message (id),
	CONSTRAINT visiteur_idPayement_fk FOREIGN KEY (idPayement)
		REFERENCES Payement (id)
);



