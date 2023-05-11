import "./About.scoped.scss";
import profilePicture from "/Users/student/Actualize/Capstone-Frontend/src/Images/download.png";
export function About() {
  return (
    <div className="about-container">
      <div classname="about-section">
        <h1>The Creator and The Purpose</h1>
        <p>
          Hi, I'm Micheal Fitzgerald, a 33-year-old web developer and automotive detailer with a passion for restoration
          projects. After spending 10 years in the automotive industry, I recently transitioned into web development to
          explore my creativity in a new field.
        </p>
        <p>
          The motivation behind creating this dating compatibility website stems from my personal journey. Three years
          ago, my partner of 10 years unexpectedly left, and I found myself navigating the world of dating once again.
          It was during this time that I realized the shortcomings of traditional dating apps, which often prioritize
          job security and physical attractiveness as the main criteria for potential matches.
        </p>
        <p>
          Driven by the belief that true connection goes beyond superficial traits, I created this dating compatibility
          website with a unique twist – musical compatibility. I firmly believe that the music we listen to shapes our
          identities and reflects our values. If this theory holds true, then people who share a near parallel musical
          taste are likely to share similar ideologies and perspectives on life.
        </p>{" "}
        <p>
          Unlike typical dating apps, which rely on generic matching algorithms, my platform delves deep into users'
          musical preferences. By analyzing and comparing their musical tastes, we can connect individuals who resonate
          with each other on a fundamental level. This approach allows for more meaningful connections and sets the
          stage for shared experiences, conversations, and understanding.
        </p>
        <p>
          While the website is still in development, I envision a future where this app becomes a hub of success stories
          and positive testimonials. By putting the app into production, I hope to gather valuable user feedback and
          insights, enabling me to continuously improve the platform and incorporate user-requested features. It is my
          commitment to create an app that genuinely serves its users and helps them find true compatibility.
        </p>
        <p>
          Ultimately, my vision is to create a global community where connections are formed based on the songs that
          motivate us, make us cry, or make us reminisce. I believe that this unique approach to dating can foster a
          deeper sense of understanding, empathy, and shared values among users. Let's embark on this musical journey
          together and create a world where our love for music brings us closer than ever before.
        </p>
        <p>
          Join me in revolutionizing the way we connect, and let's build a community where the power of music becomes
          the catalyst for meaningful relationships.
        </p>
      </div>
      <div className="profile-section">
        <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
      </div>
    </div>
  );
}
