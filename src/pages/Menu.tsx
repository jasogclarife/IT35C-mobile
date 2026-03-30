import { IonButton, IonContent, IonHeader, IonPage, IonTitle,IonToolbar, useIonRouter } from "@ionic/react";

const menu: React.FC =() =>{
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }

    return(
      <IonPage>
        <IonHeader>
         <IonToolbar>
            <IonTitle> menu</IonTitle>
         </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

            <IonButton expand="full" onClick={()=> doLogin()}>
                Login
            </IonButton>
        </IonContent>
      </IonPage>

    );
};

export default menu;
