import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonMenuButton,
} from '@ionic/react'

const Page1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home page</IonTitle>
                </IonToolbar>
                <IonButton slot='start'>
                    <IonMenuButton></IonMenuButton>
                </IonButton>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink='/app/page1/details' expand="full">
                    See details
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Page1