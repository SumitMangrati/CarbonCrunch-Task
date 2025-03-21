import React from 'react'
import { useEffect , useState } from 'react'
import db from '../appwrite/database'

function Notes() {
    
    const [notes , setNotes] = useState([]); 

    useEffect(() => {
        init();
    }
    , []);

    
    const init =  async () => {
    // const response = await databases.listDocuments(
    //         "66af940b0004d2597f20",
    //         "66af941b00363c30746b"
    //     );
    //     console.log(response);
        const response = await db.notes.list();
        setNotes(response.documents);
    };

  return (
    <div>
        <div>
            {notes.map((note) =>(
                <div key={note.$id}>
                    <div>{note.body}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Notes