import { IonButton, IonContent, IonText } from "@ionic/react"
import { useEffect, useState } from "react"
import "./SpendContainer.css"
import { io } from "socket.io-client"

interface SpendProps {}

const SpendContainer: React.FC<SpendProps> = () => {
  const [total, setTotal] = useState(0)

  const socket = io("https://spending-yp1e.onrender.com")
  // const socket = io("http://localhost:3500")

  const sprayMoney = (currency: number) => {
    socket.emit("spend", currency)
    setTotal(currency)
  }

  const currencies = [100, 200, 500, 1000]
  return (
    <div>
      <div className="buttons">
        {currencies.map((currency: number) => (
          <IonButton color="secondary" fill="outline" onClick={() => sprayMoney(currency)}>
            {currency}
          </IonButton>
        ))}
      </div>

      <IonText>
        <h1>&#8358;{total}</h1>
      </IonText>
    </div>
  )
}

export default SpendContainer
