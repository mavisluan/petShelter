var express = require('express');
const { Pet } = require("../models/pet");
var router = express.Router();

// Create
router.post('/', async (req, res) => {
  console.log('POST');
  const pet = new Pet(req.body);
  console.log(pet);

  try {
    const doc = await pet.save();
    res.send(doc);
  } catch(e) {
    res.status(400).send(e);
  }
})


// READ
// Get All
router.get('/',  async (req, res) => {
  console.log('GET ALL');
  try {
    // sort it by createdAt Desc order
    const pets = await Pet.find({}).sort({type: -1});
    res.send(pets);
  } catch(e) {
    res.status(400).send(e);
  }
});


// GET ONE
router.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  // if (!ObjectID.isValid(id)) {
  //     return res.status(404).send()
  // }

  try {
    const pet = await Pet.findById(id);
    // const pet = await Pet.findOne({ _id: id })
    if(!pet) {
      return res.status(404).send()
    }
    res.send(pet)
  } catch(e) {
    res.status(400).send()
  }
})


// UPDATE
router.patch('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const pet = await Pet.findOneAndUpdate({
      _id: id,
    }, {$set: req.body}, {new: true});

    if(!pet) {
      return res.status(404).send();
    }
    res.send(pet);
  } catch(e) {
    res.status(400).send(e);
  }
})



// DELETE

router.delete(`/:id`, async (req, res) => {
  const id = req.params.id;

  try {
    const pet = await Pet.findOneAndRemove({
      _id: id,
    });
    if (!pet) {
      return res.status(404).send()
    }
    res.status(200).send(pet)
  } catch(e) {
    res.status(400).send()
  }
});

module.exports = router;
