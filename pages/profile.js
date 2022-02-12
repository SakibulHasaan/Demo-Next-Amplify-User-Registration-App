import React, { useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify';
import "../configureAmplify";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import ConfirmForgotPassword from '../components/ConfirmForgotPassword';
import ConfirmSignUp from '../components/ConfirmSignUp';
import Link from 'next/link'                        

const Profile = () => {
    const [ user, setUser ] = useState( null );
    const [info, setInfo] = useState(null);
    const [ formData, updateFormData ] = useState( {} );
    const [ formState, setFormState ] = useState( null );

    useEffect( () => {
        checkUser();
    }, [] )

     async function checkUser() {
        try {
            const Auser = await Auth.currentAuthenticatedUser();
            Auser && setFormState( "signedIn" );
            Auser && setUser( Auser );
        }
        catch ( err ) {
            setFormState( "signIn" );
            setUser( null );
        }
    }

    const handleAuth = async ( data ) => {
    console.log("🚀 ~ file: profile.js ~ line 33 ~ handleAuth ~ data", data);
        if ( data.type === "signIn" ) {
            try {
                await Auth.signIn( {
                    username: data.email, password: data.password
                } )
                checkUser();
                // setFormState("signedIn")
            } catch ( err ) {
                console.log( err )
            }
        }
        else if ( data.type === "signUp" ) {
            try {
                await Auth.signUp( {
                    username: data.email, password: data.password, attributes: {
                        email: data.email
                    }
                } )
                setInfo({
                    email: data.email
                } )

            } catch ( err ) {
                console.log( err )
            }
        }
        else if ( data.type === "confirmSignUp" ) {
            try {
                const email = info.email;
                const code = data.authCode;
                await Auth.confirmSignUp(email, code);
                checkUser();
            } catch ( err ) {
                console.log(err);
            }
        }
        else if ( data.type === "forgotPassword" ) {
                try{
                    console.log("🚀 ~ file: profile.js ~ line 75 ~ handleAuth ~ data.email", data.email);
                    await Auth.forgotPassword(data.email);
                    setInfo({
                        email: data.email
                    });
                    setFormState("confirmForgotPassword");
                }
                catch{
                    console.log(err);
                }
        }
        else if ( data.type === "confirmForgotPassword" ) {
            try{
                console.log(info.email, data.authCode, data.password)
                await Auth.forgotPasswordSubmit(info.email, data.authCode, data.password);
                checkUser();
                
            }catch(err){
                console.log(err);
            }
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen">
            {
                formState === "signedIn" &&
                <div className="bg-gray-100 border border-pink-600 p-4 m-10">
                    <h1 className="text-lg font-semibold mb-3"> Hello '{user?.attributes.email}'</h1>
                    <button onClick={() => {
                        Auth.signOut();
                        setFormState( "signIn" );
                        setUser( null );
                    }
                    } className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        Sign out 
                    </button>

                    <Link href="/">
                        <a className="ml-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" >Home</a>
                    </Link>
                       
                </div>
            }

            {
                formState === "signIn" && <SignIn handleAuth={handleAuth} setFormState={setFormState} />
            }
            {
                formState === "signUp" && <SignUp handleAuth={handleAuth} setFormState={setFormState} />
            }
            {
                formState === "confirmSignUp" && <ConfirmSignUp handleAuth={handleAuth} setFormState={setFormState} />
            }
            {
                formState === "forgotPassword" && <ForgotPassword handleAuth={handleAuth} setFormState={setFormState} />
            }
            {
                formState === "confirmForgotPassword" && <ConfirmForgotPassword handleAuth={handleAuth} setFormState={setFormState} />
            }



        </div>
    );
};

export default Profile;