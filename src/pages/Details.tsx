import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonBackButton,
    IonText,
} from '@ionic/react'

const Details: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Details</IonTitle>
                </IonToolbar>
                <IonButton slot='start'>
                    <IonBackButton defaultHref="/app/page1" />
                </IonButton>
            </IonHeader>
            <IonContent className="ion-padding">
                This simple app is for labwork 3 which demonstrates different functionalities such as a welcome login page,
                home page, contact page, and a sidebar menu from where you can navigate to said different pages and log out.
                To access the menu from the contact page you just drag to reveal from the left side of the page.
            </IonContent>
        </IonPage >
    )
}

export default Details