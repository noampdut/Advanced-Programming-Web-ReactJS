import ContactInList from "./ContactInList";

function ContactsListResult({ contactsList, changeContact }) {
    if (contactsList == null) {
        return (
            <div>
                null list
            </div>
        );
    } else {

        const contactList = contactsList.map((data, key) => {
            return <ContactInList {...data} changeContact={changeContact} />
        });

        return (
            <div>
                {contactList}
            </div>

        );

    }
    

}

export default ContactsListResult;