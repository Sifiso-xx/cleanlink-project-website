import BroomSweep from "./BroomSweep";
import SprayBottle from "./SprayBottle";
import MopWipe from "./MopWipe";
import SoapBubbles from "./SoapBubbles";
import TwinkleSparkle from "./TwinkleSparkle";

export default function CleaningScene() {
  return (
    <div className="clean-scene">
      <BroomSweep />
      <div className="clean-scene-row">
        <SprayBottle />
        <MopWipe />
      </div>
      <SoapBubbles count={6} />
      <TwinkleSparkle style={{ position: "absolute", top: 14, right: 26 }} />
      <TwinkleSparkle style={{ position: "absolute", bottom: 34, left: 18 }} />
      <span className="tape-note note-a">Seventeen cleaners, one shared platform</span>
      <span className="tape-note note-b">Built around Bethal, Mpumalanga</span>
    </div>
  );
}
