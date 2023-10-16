import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
} from '@ionic/react'

const Page2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Contact</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">*Contact information*</IonContent>
        </IonPage>
    )
}

export default Page2
