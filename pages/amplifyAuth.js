import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify'
import "../configureAmplify";
import "@aws-amplify/ui-react/styles.css";

function Profile() {
    const [user, setUser] = useState(null);
    
    useEffect( () => {
        checkUser();
    }, [] )

    async function checkUser() {
        try {
            const Auser = await Auth.currentAuthenticatedUser();
            Auser && setUser( Auser );
        }
        catch ( err ) {
            console.log( err )
            setUser( null );
            // !user && router.push( "/profile" );
        }
        if(!user) return null;
    }
    return (
        <div>
            <p>Welcome {user?.attributes.email}</p>
        </div>
    )
}

export default withAuthenticator(Profile);