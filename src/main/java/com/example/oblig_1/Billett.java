package com.example.oblig_1;

public class Billett implements Comparable<Billett> {


    private String film, fornavn, etternavn, epost;
    private int antall, telefonnr;

    public Billett(String film, String fornavn, String etternavn, String epost, int antall, int telefonnr) {
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.antall = antall;
        this.telefonnr = telefonnr;
    }
    public Billett() { }
    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }

    @Override
    public int compareTo(Billett annenBillett) {
        return this.getEtternavn().compareTo(annenBillett.getEtternavn());
    }
}
