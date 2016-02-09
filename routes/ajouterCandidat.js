var models = require('../models');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('ajouterCandidat', { title: 'Inscription' });
});
router.post('/', function(req, res, next) {
    var candidat = models.Candidat.build({
        nom: req.body.nomCandidat,
        prenom: req.body.prenomCandidat,
        dateNaissance: req.body.dateNaissanceCandidat,
        telFixe: req.body.telFixeCandidat,
        telMobile: req.body.telMobileCandidat,
        adresse: req.body.adresseCandidat,
        ville: req.body.villeCandidat,
        cp: req.body.cpCandidat,
        pays: req.body.paysCandidat,
        mobilite: req.body.mobiliteCandidat,
        mail: req.body.mailCandidat,
        mdp: req.body.mdpCandidat
    });

    candidat.save().then(function() {
        res.send('ok added : ' + candidat.nom0);
    })
});
module.exports = router;