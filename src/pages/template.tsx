import { IonButton, IonContent, IonHeader, IonPage, IonTitle,IonToolbar, useIonRouter } from "@ionic/react";

const template: React.FC =() =>{
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }

    return(
      <IonPage>
        <IonHeader>
         <IonToolbar>
            <IonTitle> template</IonTitle>
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

export default template;
