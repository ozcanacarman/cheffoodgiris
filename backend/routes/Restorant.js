const proxy = require("http-proxy-middleware");

const router = require('express').Router();
let restorant = require('../models/restorant.model');

router.route('/').get((req, res) => {
    restorant.find()
    .then(restorants => res.json(restorants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Restorantekle').post((req, res) => {

   const restorantname = req.body.restorantname; 
  const restorantAciklama = req.body.restorantAciklama;
  const restorantx = req.body.restorantx;
  const restoranty = req.body.restoranty;
  const restoranyildiz = req.body.restoranyildiz;

  const newRestorant = new restorant({
      restorantname,restorantAciklama,restorantx,restoranty,restoranyildiz
    });

  newRestorant.save()
    .then(() => res.json('Restorant Eklendi!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/RestorantAraAll').get((req, res) => {
  restorant.find({  })
  .then(restorants => res.json(restorants))
  .catch(err => res.status(400).json('Error: ' + err));
});

//localhost:5000/Restorantlar/RestorantAraAll 
//browser üstünden


router.route('/RestorantAra/:id').get((req, res) => {
    restorant.findById(req.params.id)
      .then(restorants => res.json(restorants))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/RestorantSil/:id').delete((req, res) => {
    restorant.findByIdAndDelete(req.params.id)
      .then(() => res.json('Restorant Silindi.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/RestorantGuncelle/:id').post((req, res) => {
    restorant.findById(req.params.id)
      .then(restorant => {

        restorant.restorantname = req.body.restorantname; 
        restorantAciklama.restorantname = req.body.restorantAciklama;
        restorantx.restorantname = req.body.restorantx;
        restoranty.restorantname = req.body.restoranty;
        restoranyildiz.restorantname = req.body.restoranyildiz;
       // restorantresim.restorantname = req.body.restorantresim;



  
        exercise.save()
          .then(() => res.json('Restorant Guncellendi!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;