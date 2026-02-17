import { useNavigate } from "react-router-dom";
import CertificationsSection from "../components/certifications/CertificationsSection.jsx";

export default function Certificates() {
  const navigate = useNavigate();

  return (
    <div className="page certificates-page">
      <header className="certificates-header">
        <div className="certificates-logo" onClick={() => navigate("/")}>NR</div>
        <button
          className="certificates-back"
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <a className="certificates-contact" href="mailto:nithikroshan03@gmail.com">
          Say hi..
        </a>
      </header>

      <main className="certificates-content">
        <CertificationsSection />
      </main>
    </div>
  );
}
