import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Container } from 'react-bootstrap';


export const Login = () => {
    const [authError, setAuthError] = useState(null);

    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            window.location.href = "/register";
        } catch (error) {
            console.log(error);
            setAuthError(error.message);
        }
    };

    return (
        <Container style={{marginTop:'50px'}}>
        <p> Login with Google to save, edit your registration and be able to re-register!</p>
        <p> Google 로 로그인 하시면 등록 기록을 저장, 수정하실 수 있습니다. 재신청도 하실수있습니다.</p>
        <Button onClick={handleLogin}>
            Continue with Google
        </Button>
        {authError && <div style={{ color: 'red', fontSize: '14px'}}>{authError}</div>}
        </Container>
    )
}
