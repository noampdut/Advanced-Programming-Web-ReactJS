import ContactInList from "./ContactInList";

function ContactsListResult({ contactsList, changeContact }) {
    const contactList = contactsList.map((data, key) => {
        return <ContactInList {...data} changeContact={changeContact}  />
    });

    return (
        <div>
            {contactList}
        </div>

    );

}

export default ContactsListResult;