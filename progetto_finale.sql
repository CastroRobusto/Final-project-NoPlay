create database noplay;
use noplay;

create table aziende(
	id int primary key auto_increment,
    ragionesociale varchar(255), 
    partitaiva varchar(11),
    indirizzo varchar(50),
    email varchar(50),
    ntel int
);

create table personale(
	id int primary key auto_increment,
    nome varchar(50),
    cognome varchar(50),
    ddn date,
    stipendio double,
    dataassunzione date,
    ruolo varchar(50),
    idazienda int,
    idruolo int,
    foreign key (idazienda) references aziende(id) on delete cascade,
    foreign key (idruolo) references ruoli(id)
);

create table ruoli(
	id int primary key auto_increment,
    ruolo varchar(50)
);