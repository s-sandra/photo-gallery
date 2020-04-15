import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useFirebase } from "../hooks/useFirebase";

const Tab1: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { userLogin } = useFirebase();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Log In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput 
          value={email} 
          placeholder="email" 
          type="email"
          onIonChange={emailInput => setEmail(emailInput.detail.value!)}
        >
        </IonInput>
        <IonInput 
          value={password} 
          placeholder="password" 
          type="password"
          onIonChange={pswdInput => setPassword(pswdInput.detail.value!)}
        >
        </IonInput>
        <IonButton onClick={() => userLogin(email, password)}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
