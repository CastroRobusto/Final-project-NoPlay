package org.noplay.risorse.dao;

import java.util.List;

import org.noplay.risorse.model.Ruolo;
import org.noplay.risorse.util.BasicDao;
import org.springframework.beans.factory.annotation.Value;

public class DaoRuolo extends BasicDao implements IDaoRuolo{
	
	public DaoRuolo(@Value("${db.address}") String dbAddress, 
			   @Value("${db.user}") String user, 
			   @Value("${db.psw}") String password) {
		super(dbAddress, user, password);
	}

	@Override
	public List<Ruolo> ruoli() {
		return listFromQuery("SELECT * FROM ruoli", Ruolo.class);
	}

	@Override
	public Ruolo ruolo(int id) {
		return objectFromQuery("SELECT * FROM ruoli WHERE id = ?", Ruolo.class, id);
	}

	@Override
	public boolean aggiungi(Ruolo ruolo) {
		return isExecute("INSERT INTO ruoli (ruolo) VALUES (?)", ruolo.getRuolo());
	}

	@Override
	public boolean elimina(int id) {
		return isExecute("DELETE FROM ruoli WHERE id = ?", id);
	}

	@Override
	public boolean modifica(Ruolo ruolo) {
		return isExecute("UPDATE ruoli SET ruolo = ? WHERE id = ?", ruolo.getRuolo(), ruolo.getId());
	}
	
	
}
