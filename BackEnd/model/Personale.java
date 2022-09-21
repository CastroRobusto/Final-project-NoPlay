package org.noplay.risorse.model;

public class Personale {
	
	private int id;
	private String nome;
	private String cognome;
	private String dataNascita;
	private double stipendio;
	private String dataAssunzione;
	private int id_azienda;
	private int id_ruolo;
	
	public Personale(int id, String nome, String cognome, String dataNascita, double stipendio, String dataAssunzione,
			int id_azienda, int id_ruolo) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.dataNascita = dataNascita;
		this.stipendio = stipendio;
		this.dataAssunzione = dataAssunzione;
		this.id_azienda = id_azienda;
		this.id_ruolo = id_ruolo;
	}

	public Personale() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getDataNascita() {
		return dataNascita;
	}

	public void setDataNascita(String dataNascita) {
		this.dataNascita = dataNascita;
	}

	public double getStipendio() {
		return stipendio;
	}

	public void setStipendio(double stipendio) {
		this.stipendio = stipendio;
	}

	public String getDataAssunzione() {
		return dataAssunzione;
	}

	public void setDataAssunzione(String dataAssunzione) {
		this.dataAssunzione = dataAssunzione;
	}

	public int getId_azienda() {
		return id_azienda;
	}

	public void setId_azienda(int id_azienda) {
		this.id_azienda = id_azienda;
	}

	public int getId_ruolo() {
		return id_ruolo;
	}

	public void setId_ruolo(int id_ruolo) {
		this.id_ruolo = id_ruolo;
	}
	
	
	
	

}
