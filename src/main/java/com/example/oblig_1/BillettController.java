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

    @GetMapping("/hentEnBillett")
    public Billett hentEnBillett(int id){
        return rep.hentEnBillett(id);
    }

    @PostMapping("/endreEnBillett")
    public void endreEnBillett(Billett billett){
        rep.endreEnBillett(billett);
    }

    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        rep.slettEnBillett(id);
    }
    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        rep.slettAlleBilletter();
    }


}
