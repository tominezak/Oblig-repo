package com.example.oblig_1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {
    @Autowired
    BillettRepository rep;
    @PostMapping("/lagreBillett")
    public void lagreBillett(Billett billett) {
        rep.lagreBillett(billett);
    }
    @GetMapping("/hentBilletter")
    public List<Billett> hentBilletter() {
        return rep.hentBilletter();
    }
    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        rep.slettAlleBilletter();
    }
    @GetMapping("/slettEn")
    public void slettEn(int id){
        rep.slettEn(id);
    }
}
