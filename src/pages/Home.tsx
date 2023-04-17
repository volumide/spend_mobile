import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Home.css"
import SpendContainer from "../components/SpendContainer"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Party</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Party </IonTitle>
          </IonToolbar>
        </IonHeader>
        <SpendContainer />
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  )
}

export default Home
