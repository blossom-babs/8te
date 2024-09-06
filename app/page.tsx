
import FinanceForm from "./components/FinanceForm";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <div className="responsive-layout">
      <div className="grid mt-16 ">
        <TimeLine/>
    
      <FinanceForm/>
      </div>
    </div>
  )
}