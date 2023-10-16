import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    useIonRouter,
    IonButton,
} from '@ionic/react'

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'root', 'replace');

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Cool App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding"><h1> Welcome! Log in to start.</h1></IonContent>
            <IonButton onClick={() => doLogin()} expand="full">
                login</IonButton>
        </IonPage>
    )
}

export default Login