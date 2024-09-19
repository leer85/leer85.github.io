import styles from "./page.module.css";
import Navbar from "./navbar.js";
import "./globals.css"

export default function Home() {
  return (

    <main className={styles.main}>
         <Navbar/>

      <div className={styles.container}>

       
      <div className={styles.grid}>
        
          <h1>
           I'm Lee Richardson.
          </h1>
   

          <h2>
          Product designer in Copenhagen.
          </h2>
  
      </div>
      <div className={styles.grid}>
      
          <p>Currently looking for a new role in product design, UX design or UX writing.</p>

          <p>While at Hero Gaming I was UX specialist on tasks like creating <span className="bodyLink"><a href="/">a feature</a></span> that increased time spent in product by 44%, optimising <span className="bodyLink"><a href="/">a signup flow</a></span> that increased conversions by 73%, introducing <span className="bodyLink"><a href="/">a design system</a></span>, and increasing a <span className="bodyLink"><a href="/">landing page's</a></span>  NPS score from 59/100 to 72/100. I worked there until 2023, when layoffs downsized the company.</p>

          <p>For some years I ran a UX-focused business. Focusing on e-commerce flows, my most recent client was Beklaedt during 2023. The <span className="bodyLink"><a href="/">design</a></span> resulted in 48% of visitors converting at checkout, exceeding the 30% goal.</p>
      
          <p>As part of an internal innovation team, I designed an <span className="bodyLink"><a href="/">onboarding feature</a></span> at Shopify. It reduced bounce rates in new users by 42%</p>

          <p>I worked with JavaScript and UX flows for the Toronto Star’s daily news app, StarTouch.</p>

          <p>Before working in UX I was a journalist, in a variety of editorial and design roles.</p>

          <p>I studied <span className="bodyLink"><a href="https://www.stc.ac.uk/course/btec-art-visual-and-digital-level-3-year-2/">graphic design</a></span> in the UK, <span className="bodyLink"><a href="https://www.torontomu.ca/journalism/#!accordion-1677379613084-what-you-ll-learn">journalism</a></span> in Canada, and am now studying <span className="bodyLink"><a href="https://en.itu.dk/Programmes/MSc-Programmes/Software-Design">software design</a></span> in Copenhagen. Feel free to get in touch at my <span className="bodyLink"><a href="mailto:hej@leerichardson.dk">email address.</a></span></p>

      
      </div>
      </div>
      
    
    </main>
  );
}
