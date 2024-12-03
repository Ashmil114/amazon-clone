import Mobile from "./views/Mobile";
import Web from "./views/Web";

export default function App() {
  return (
    <>
      <div className="md:block hidden">
        <Web />
      </div>
      <div className="md:hidden block">
        <Mobile />
      </div>
    </>
  );
}
