import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router';
import "../configureAmplify";

const Hidden = () => {
    const [ user, setUser ] = useState( null );
    const router = useRouter();

    useEffect( () => {
        checkUser();
    }, [] )

    async function checkUser() {
        try {
            const Auser = await Auth.currentAuthenticatedUser();
            Auser && setUser( Auser );
        }
        catch ( err ) {
            console.log(err)
            setUser( null );
            !user && router.push("/profile");
        }
    }
    return (
        <div>
            <p>You discovered something very secret</p>
        </div>
    );
};

export default Hidden;