import React,{useState} from 'react';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import Header from './components/Header';

function App (){
    const [contacts,setContacts] = useState([]);
    const [textInput,setTextInput]=useState({
        name: "",
        email: ""
      });
     /* const [phoneInput,setPhoneInput]=useState({
        phone:""
      });*/
     
    return(
        <div>
            <Header/>
            <AddContact  textInput={textInput} setTextInput={setTextInput}  contacts={contacts} setContacts={setContacts}/>
            <ContactsList contacts={contacts}/>
            
        </div>
        );
}
export default App;