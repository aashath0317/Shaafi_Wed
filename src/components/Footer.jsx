import './Footer.css';

export default function Footer() {
  return (
    <footer className="wedding-footer text-center">
      <div className="container">

        <p className="footer-arabic">
          بارَكَ اللهُ لَكُما وَبارَكَ عَلَيْكُما وَجَمَعَ بَيْنَكُما فِي خَيْرٍ
        </p>
        <p className="footer-dua-en">
          "May Allah bless you, and shower His blessings upon you,
          and join you together in goodness."
        </p>

        <div className="divider"><span className="divider-icon">✦</span></div>

        <p className="footer-names">
          With love & respect — <strong>Sithik Fathima & Munafar Mohamed Shaafi</strong>
        </p>
        <p className="footer-copy">&copy; 2026 Wedding Invitation</p>

      </div>
    </footer>
  );
}
