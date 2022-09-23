package org.noplay.risorse.dao;

import java.util.List;

import org.noplay.risorse.model.Personale;
import org.noplay.risorse.util.BasicDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

@Repository
public class DaoPersonale extends BasicDao implements IDaoPersonale{
	
	public DaoPersonale(@Value("${db.address}") String dbAddress, 
			@Value("${db.user}") String user, 
			@Value("${db.psw}") String password) {
		super(dbAddress, user, password);
	}

	@Override
	public List<Personale> listaPersonale() {
		return listFromQuery("SELECT * FROM personale", Personale.class);
	}

	@Override
	public Personale persona(int id) {
		return objectFromQuery("SELECT * FROM personale WHERE id = ?", Personale.class, id);
	}

	@Override
	public boolean aggiungi(Personale persona) {
		return isExecute("INSERT INTO personale (nome, cognome, ddn, stipendio, dataassunzione, "
				+ "idazienda, idruolo) VALUES (?, ?, ?, ?, ?, ?, ?)", persona.getNome(), persona.getCognome(), persona.getDdn(),
				persona.getStipendio(), persona.getDataAssunzione(), persona.getIdAzienda(), persona.getIdRuolo());
	}

	@Override
	public boolean elimina(int id) {
		return isExecute("DELETE FROM personale WHERE id = ?", id);
	}

	@Override
	public boolean modifica(Personale persona) {
		return isExecute("UPDATE personale SET nome = ?, cognome = ?, ddn = ?,"
				+ "stipendio = ?, dataassunzione = ?, idazienda = ?, idruolo = ? WHERE id = ?" ,persona.getNome(), persona.getCognome(), persona.getDdn(),
				persona.getStipendio(), persona.getDataAssunzione(), persona.getIdAzienda(), persona.getIdRuolo(), persona.getId());
	}
	
	

}
