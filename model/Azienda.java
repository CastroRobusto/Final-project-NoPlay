package org.noplay.risorse.model;

public class Azienda {
	
	private int id;
	private String ragioneSociale;
	private String partitaIva;
	private String indirizzo;
	private String email;
	private String nTelefono;
	
	public Azienda(int id, String ragioneSociale, String partitaIva, String indirizzo, String email, String nTelefono) {
		super();
		this.id = id;
		this.ragioneSociale = ragioneSociale;
		this.partitaIva = partitaIva;
		this.indirizzo = indirizzo;
		this.email = email;
		this.nTelefono = nTelefono;
	}

	public Azienda() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRagioneSociale() {
		return ragioneSociale;
	}

	public void setRagioneSociale(String ragioneSociale) {
		this.ragioneSociale = ragioneSociale;
	}

	public String getPartitaIva() {
		return partitaIva;
	}

	public void setPartitaIva(String partitaIva) {
		this.partitaIva = partitaIva;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getnTelefono() {
		return nTelefono;
	}

	public void setnTelefono(String nTelefono) {
		this.nTelefono = nTelefono;
	}
	
	
	
}
