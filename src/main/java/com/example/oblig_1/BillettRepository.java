package com.example.oblig_1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db; //aksesserer databasen

    public void lagreBillett(Billett billett) {
        String sql = "INSERT INTO Billett (film, fornavn, etternavn, epost, antall, telefonnr) VALUES(?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getFornavn(), billett.getEtternavn(), billett.getEpost(), billett.getAntall(), billett.getTelefonnr()); //lister opp verdiene som må erstattes i sql spørringen
    }

    public List<Billett> hentBilletter() {
        String sql = " SELECT * FROM Billett"; //bygger opp en sql spørring
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        Collections.sort(alleBilletter);
        return alleBilletter;
    }

    public Billett hentEnBillett(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Billett WHERE id=?";
        Billett enBillett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Billett.class));
        return enBillett;
    }

    public void endreEnBillett(Billett billett){
        String sql = "UPDATE Billett SET film=?,fornavn=?,etternavn=?,epost=?, antall=?,telefonnr=? where id=?";
        db.update(sql,billett.getFilm(),billett.getFornavn(),billett.getEtternavn(),billett.getEpost(),billett.getAntall(),billett.getTelefonnr(),billett.getId());
    }

    public void slettEnBillett(int id) {
        String sql = "DELETE FROM Billett WHERE id=?";
        db.update(sql,id);
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM Billett"; //Sletter alle radene
        db.update(sql);
    }
}
