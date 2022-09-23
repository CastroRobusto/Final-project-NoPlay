package org.noplay.risorse.dao;

import java.util.List;

import org.noplay.risorse.model.Azienda;
import org.noplay.risorse.util.BasicDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

@Repository
public class DaoAzienda extends BasicDao implements IDaoAzienda{
	
	public DaoAzienda(@Value("${db.address}") String dbAddress, 
			   @Value("${db.user}") String user, 
			   @Value("${db.psw}") String password) {
		super(dbAddress, user, password);
	}
	
	@Override
	public List<Azienda> aziende() {
		return listFromQuery("SELECT * FROM aziende", Azienda.class);
	}

	@Override
	public Azienda azienda(int id) {
		return objectFromQuery("SELECT * FROM aziende WHERE id = ?", Azienda.class, id);
	}

	@Override
	public boolean aggiungi(Azienda azienda) {
		return isExecute("INSERT INTO aziende (ragionesociale,"
				+ "partitaiva, indirizzo, email, ntel)"
				+ " VALUES "
				+ "(?, ?, ?, ?, ?)" , azienda.getRagioneSociale(), azienda.getPartitaIva(),
				azienda.getIndirizzo(), azienda.getEmail(), azienda.getnTel());
	}

	@Override
	public boolean elimina(int id) {
		return isExecute("DELETE FROM aziende WHERE id = ?", id);
	}

	@Override
	public boolean modifica(Azienda azienda) {
		return isExecute("UPDATE aziende SET ragionesociale= ?,"
				+ "partitaiva = ?, indirizzo = ?, email = ?,"
				+ "ntel = ? WHERE id = ?",  azienda.getRagioneSociale(), azienda.getPartitaIva(),
				azienda.getIndirizzo(), azienda.getEmail(), azienda.getnTel(), azienda.getId());
	}
	

}
