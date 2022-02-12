import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify'
import "../configureAmplify";
import "@aws-amplify/ui-react/styles.css";

function Profile() {
    useEffect( () => {
        checkUser();
    }, [] )

    async function checkUser() {
        const [user, setUser] = useState(null);
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