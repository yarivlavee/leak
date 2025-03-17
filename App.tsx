import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/hasus79@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitSuccess(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>איתור נזילות מקצועי ואיטום בשיטת אל-הרס</h1>
          <h2>חיסכון של עשרות אלפי שקלים בתיקון</h2>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-text">איתורים מוצלחים</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-text">שביעות רצון</span>
            </div>
          </div>
          <button className="cta-button" onClick={() => document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
            צור קשר עכשיו
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Services Grid */}
        <div className="grid-section">
          <div className="grid-item">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>איתור נזילות</h3>
            <p>איתור מקצועי של נזילות בצנרת מים וביוב</p>
          </div>
          <div className="grid-item">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>איטום מקצועי</h3>
            <p>פתרונות איטום מתקדמים למניעת נזקי רטיבות</p>
          </div>
          <div className="grid-item">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>תיקון בשיטת אל-הרס</h3>
            <p>תיקונים מתקדמים ללא צורך בהריסת קירות</p>
          </div>
          <div className="grid-item">
            <div className="service-icon">
              <i className="fas fa-camera"></i>
            </div>
            <h3>ציוד מתקדם</h3>
            <p>מצלמה תרמית, מצלמת ביוב ומכשור מקצועי</p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="service-areas">
          <h2>אזורי שירות</h2>
          <div className="areas-container">
            <div className="area-item">
              <div className="area-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>תל אביב והמרכז</h3>
              <p>תל אביב, רמת גן, גבעתיים, חולון, בת ים, ראשון לציון, פתח תקווה</p>
            </div>
            <div className="area-item">
              <div className="area-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>השרון</h3>
              <p>הרצליה, רעננה, כפר סבא, הוד השרון, רמת השרון, נתניה</p>
            </div>
            <div className="area-item">
              <div className="area-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>חיפה והקריות</h3>
              <p>חיפה, קריית ביאליק, קריית מוצקין, קריית ים, קריית אתא</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-section">
          <h2>צור קשר</h2>
          <div className="contact-buttons">
            <a 
              href="https://wa.me/972547723164" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <i className="fab fa-whatsapp whatsapp-icon"></i>
              צור קשר בוואטסאפ
            </a>
          </div>
          <div className="or-divider">- או -</div>
          <form 
            className="contact-form" 
            onSubmit={handleSubmit} 
            action="https://formsubmit.co/hasus79@gmail.com" 
            method="POST"
          >
            {/* Hidden FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="לקוח חדש מדף נחיתה" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            
            <div className="form-row">
              <input type="text" name="name" placeholder="שם מלא" required />
              <input type="tel" name="phone" placeholder="טלפון" required />
            </div>
            <input type="text" name="address" placeholder="כתובת" required />
            <textarea name="message" placeholder="תיאור הבעיה" required rows={3}></textarea>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'שולח...' : 'שלח'}
            </button>
            {submitSuccess && (
              <div className="success-message">
                ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.
              </div>
            )}
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="app-promo">
          <h3>בקרוב - אפליקציית ייעוץ איטום מקצועית</h3>
          <p>קבלו ייעוץ מקצועי, הערכת עלויות ופתרונות מותאמים אישית</p>
          <button className="app-button coming-soon">
            <i className="fas fa-mobile-alt"></i>
            להורדת האפליקציה - בקרוב!
          </button>
        </div>
        <div className="footer-copyright">
          <p>© 2024 כל הזכויות שמורות לשירותי איתור נזילות ואיטום</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
