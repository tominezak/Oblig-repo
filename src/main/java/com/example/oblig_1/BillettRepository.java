package com.example.oblig_1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class BillettRepository {
    @Autowired
    private JdbcTemplate db; //aksesserer databasen

    public void lagreBillett(Billett billett) {
        String sql = "INSERT INTO Billett (film, fornavn, etternavn, epost, antall, telefonnr) VALUES(?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getFornavn(), billett.getEtternavn(), billett.getEpost(), billett.getAntall(), billett.getTelefonnr()); //lister opp verdiene som må erstattes i sql spørringen
    }

    public List<Billett> hentBilletter() {
        String sql = " SELECT * FROM Billett"; //bygger opp en sql spørring
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM Billett"; //Sletter alle radene
        db.update(sql);
    }

    public void slettEn(int id){
        String sql = "DELETE FROM Billett WHERE id=?;";
        db.update(sql, id);
    }
}
