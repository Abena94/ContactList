
import Contact from '../models/contact.js';

export const getContacts = async (req, res)=>{
   try {
       const contact=await Contact.find();
       res.status(200).json(contact);
   } catch (error) {
       res.status(404).json({message:error.message});
   }
  
} 
export const createContact = async (req, res) => {
   const contact =req.body;
   const newContact = new Contact(contact);
   try {
       await newContact.save();
       res.status(201).json(newContact);
   } catch (error) {
       res.status(409).json({message:error.message});
   }
     
    }

 /*
export const getContact = async (req, res) => {

}

 
export const deleteContact = async (req, res) => {
   
  }
  
  
 export const editContact = async (req, res) => {
  
  }*/
