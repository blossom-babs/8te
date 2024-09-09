
import FinanceForm from "./components/FinanceForm";
import Records from "./components/Records";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <div className="responsive-layout">
      <div className="grid mt-8">
        <TimeLine/>
        <Records/>
      </div>
    </div>
  )
}