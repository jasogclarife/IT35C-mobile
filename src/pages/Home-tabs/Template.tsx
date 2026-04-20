import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Template: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                        <IonTitle>Template</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonHeader collapse="condense">
                <IonContent className="ion-padding">
                    <h1>Template</h1>
                </IonContent>
            </IonHeader>

        </IonPage>
    );
};

export default Template;