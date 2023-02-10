import "./header.css";
import videoBg from '../assets/video.mp4'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Kacper Najder</span>
        <span className="headerTitleSm">Blog about something...</span>
      </div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}