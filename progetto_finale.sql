create database noplay;
use noplay;

create table aziende(
	id int primary key auto_increment,
    ragionesociale varchar(255) not null, 
    partitaiva varchar(11) not null,
    indirizzo varchar(50) not null,
    email varchar(50) not null,
    ntel varchar(15) not null
);

create table ruoli(
	id int primary key auto_increment,
    ruolo varchar(50) not null
);

create table personale(
	id int primary key auto_increment,
    nome varchar(50) not null,
    cognome varchar(50) not null,
    ddn date not null,
    stipendio double not null, check (stipendio > 0),
    dataassunzione date not null,
    idazienda int,
    idruolo int,
    foreign key (idazienda) references aziende(id) ON DELETE SET NULL,
    foreign key (idruolo) references ruoli(id) ON DELETE SET NULL
);

insert into ruoli (ruolo) values
('Sviluppatore Junior'),
('Sviluppatore Senior'),
('Recruiter'),
('Project Owner'),
('Project Manager'),
('Dirigente'),
('Segretario'),
('Social Media Manager'),
('Tecnico'),
('Agricoltore'),
('Cartolaio'),
('Elettricista'),
('Team Leader'),
('Fruttivendolo');

insert into aziende (ragionesociale, partitaiva, indirizzo, email, ntel) values
('Sviluppo software ', '51847362840', 'via Rossi 13, Milano', 'ssoftware@gmail.com', 34567890),
('Impianti fotovoltaici', '36190571438', 'via Bianchi 18, Napoli', 'imp.fotovoltaici.napoli@virgilio.it', 0817958877),
('Riparazione climatizzatori', '84726309652', 'via Garibaldi 13, Cagliari', 'riparaclima@hotmail.com', 3541209866),
('Frutta e verdura', '87190298354', 'via Trieste 22, Sassari', 'frutta.verdura@gmail.com', 3401929233),
('Cartolibreria da Roberto', '81092736401', 'Piazza IV Novembre 12, Quartu S. Elena', 'carto@gmail.com', 070878923),
('Azienda agricola', '89989172834', 'via Bianchi 18, Napoli', 'agrico.napoli@gmail.com', 3401229320);

insert into personale (nome, cognome, ddn, stipendio, dataassunzione, idazienda, idruolo) values
('Giovanni', 'Rossi','1964-10-27',2900,'2014-01-30', 2, 13),
('Lucia', 'Bianchi','1990-04-08',990,'2015-12-13', 1, 1),
('Roberto', 'Boi','1977-03-21',1700,'2021-10-08', 5, 12),
('Sara', 'Verdi','1981-10-23',1500,'2011-12-20', 3, null),
('Francesco', 'Esposito', '2001-08-24',1300,'2022-09-18', null, null),
('Piero', 'Totti','1987-07-07',800,'2008-04-20', 4, 11),
('Franck', 'Diakite','1989-09-13',2700,'2020-09-03', 1, 1),
('Federico', 'Santoro', '1995-04-18',2100,'2019-10-02', 1, 2),
('Marco', 'Rossi', '1965-08-15',1800,'2013-11-08', 2, 10),
('Luis', 'Bianchi','1977-02-12',1900,'2001-10-03', 1, 4),
('Marco', 'Bo', '1974-12-12',2600,'2007-04-09', 5, 12),
('Lorenzo', 'Lazzarini', '1977-05-24',1100,'1996-12-13', 2, 10),
('Simona', 'Dore', '1997-09-29',1500,'2018-06-15', 5, 12),
('Federico', 'Falqui', '1977-04-05',1600,'2014-05-28', 4, 13),
('Ismael', 'Fadda', '1983-01-31',900,'2014-04-05', 3, 10),
('Lorenzo', 'Pau', '1990-10-21',2370,'2010-08-19', 1, 5);
