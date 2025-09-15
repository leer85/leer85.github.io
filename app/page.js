import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1>Lee Richardson</h1>
      </div>
      
      <div className={styles.textGrid}>
        <p>I'm a product designer in Copenhagen, currently studying <span className="bodyLink"><a href="https://en.itu.dk/Programmes/MSc-Programmes/Software-Design">software design</a></span> at ITU. My focus is on the technical side of AI, and efficient data mining and storage.</p>
        <p>In my career I specialize in solving business challenges through innovative design, visual identity development and digital transformation strategies.</p>

        <p>My design approach means that every project begins with exploratory dialogue to identify client needs, followed by research and strategic planning. I am able to handle the entire design process from concept to execution, and use measurable methodologies to deliver appropriate and lasting solutions.</p>

        <p>While at Hero Gaming I was UX specialist, delivering measurable results including <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=96-132&t=a62Y9FN6FSQqTJpU-1">creating a feature</a></span> that increased user engagement by 44%, a <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-403&t=a62Y9FN6FSQqTJpU-1">signup flow optimization</a></span> that boosted conversions by 73%, and a <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=98-96&t=oGMLAQElPD725VVE-1">redesign</a></span> of a landing page that improved NPS scores from 59 to 72.</p>

        <p>For some years I ran a UX consultancy business, mainly focusing on optimizating e-commerce flows. My 2023 <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-263&t=a62Y9FN6FSQqTJpU-1">project</a></span> with Beklaedt achieved a 48% checkout conversion rate, exceeding the 30% target.</p>

        <p>As part of Shopify's internal innovation team, I designed an <span className="bodyLink"><a href="https://www.figma.com/proto/pmOcYC7bkDepWrFEfW9GeE/cv-2025?node-id=70-157&t=a62Y9FN6FSQqTJpU-1">onboarding experience</a></span> that reduced bounce rates in new users by 42%.</p>

        <p>I contributed UX flows and refactored JavaScript for the Toronto Star's digital platforms.</p>

        <p>Before design I worked in journalism, where I held various design and editorial positions. I studied <span className="bodyLink"><a href="https://www.stc.ac.uk/course/btec-art-visual-and-digital-level-3-year-2/">graphic design</a></span> in the UK and <span className="bodyLink"><a href="https://www.torontomu.ca/journalism/#!accordion-1677379613084-what-you-ll-learn">journalism</a></span> in Canada.</p>

       <p>Feel free to get in touch via <span className="bodyLink"><a href="mailto:hej@leerichardson.dk">email.</a></span></p>
      </div>
    </div>
  );
}