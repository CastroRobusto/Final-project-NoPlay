package org.noplay.risorse.dao;

import java.util.List;

import org.noplay.risorse.model.Azienda;

public interface IDaoAzienda {
	
	List<Azienda> aziende();
	
	Azienda azienda(int id);
	
	boolean aggiungi(Azienda azienda);
	
	boolean elimina(int id);
	
	boolean modifica(Azienda azienda);
}
