import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1>Product designer in Copenhagen.</h1>
      </div>
      
      <div className={styles.textGrid}>
        <p>I'm a product designer based in Copenhagen, currently studying software design at ITU. I specialize in solving business challenges through innovative design, visual identity development and digital transformation strategies.</p>

        <p>In my design approach, every project begins with exploratory dialogue to identify client needs, followed by research and strategic planning. I am able to handle the entire design process from concept to execution, and use measurable methodologies to deliver appropriate and lasting solutions.</p>

        <p>I manage the entire design process from concept to execution, applying methodologies to deliver appropriate and lasting solutions.</p>

        <p>While at Hero Gaming I was UX specialist, delivering measurable results including <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=96-132&t=a62Y9FN6FSQqTJpU-1">a feature</a></span> that increased user engagement by 44%, a <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-403&t=a62Y9FN6FSQqTJpU-1">signup flow optimization</a></span> that boosted conversions by 73%, and a landing page redesign (http://localhost:3000/)  that improved NPS scores from 59 to 72.</p>

        <p>For some years I ran a UX consultancy business, focusing on e-commerce optimization. My 2023 <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-263&t=a62Y9FN6FSQqTJpU-1">project</a></span> with Beklaedt achieved a 48% checkout conversion rate, exceeding the 30% target.</p>

        <p>As part of Shopify's internal innovation team, I designed an <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-157&t=a62Y9FN6FSQqTJpU-1">onboarding experience</a></span> that reduced new user bounce rates by 42%.</p>

        <p>I contributed UX flows and refactored JavaScript for the Toronto Star's digital platforms.</p>

        <p>Before design I worked in journalism, where I held various design and editorial positions. I studied <span className="bodyLink"><a href="https://www.stc.ac.uk/course/btec-art-visual-and-digital-level-3-year-2/">graphic design</a></span> in the UK and <span className="bodyLink"><a href="https://www.torontomu.ca/journalism/#!accordion-1677379613084-what-you-ll-learn">journalism</a></span> in Canada.</p>

       <p>Feel free to get in touch via <span className="bodyLink"><a href="mailto:leerichardson647@gmail.com">email.</a></span></p>
      </div>
    </div>
  );
}