const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";
export default function ContactList() { 
 const [contacts,setContacts] =useState(dummyContacts)
 useEffect(() => {
  async function fetchContacts() {
    try {
      const response = await fetch(
        "https://jsonplace-univclone.herokuapp.com/users"
      );
      const result = await response.json();
      setContacts(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchContacts();
}, []);
 console.log("Contacts: ", contacts)
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
              contacts.map((e)=>{
                return <ContactRow contacts={e}/>
              })
             }
          </tbody>
        </table>
    ); 
}