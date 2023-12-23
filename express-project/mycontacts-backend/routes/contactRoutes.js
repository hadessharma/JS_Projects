const express = require("express");
const router  = express.Router();

const {getContacts, getContact, createContact, updateContact, deleteContact} = require("../controllers/contactController")

router.route('/').get(getContacts);          //get all contacts
router.route('/:id').get(getContact);        //get individual contact
router.route('/').post(createContact);       //create a contact
router.route('/:id').put(updateContact);     //updates a contact
router.route('/:id').delete(deleteContact);  //delete a specific contact

module.exports = router