package com.example.oblig_1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BillettController {
    private final ArrayList<Billett> Billetter = new ArrayList<>();
    @PostMapping("/lagreBillett")
    public void lagreBillett(Billett billett) {
        Billetter.add(billett);
    }
    @GetMapping("/hentBilletter")
    public ArrayList<Billett> hentBilletter() {
        return Billetter;
    }
    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        Billetter.clear();
    }
}
