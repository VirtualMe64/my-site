import Headword from '../ui/Headword.jsx'
import styles from './Experience.module.css'

const a = (text, href) => <a href={href} target="_blank" rel="noreferrer">{text}</a>

const roles = [
    {company: "Stripe", url: "https://stripe.com", title: "Software Engineer", dates: "August 2026 - Present",
      description: <>(will soon be) working on {a('agentic payments', 'https://docs.stripe.com/agentic-commerce')}</>},
    {company: "Georgia Tech", url: "https://www.cc.gatech.edu/", title: "Graduate Teaching Assistant", dates: "August 2025 - May 2026",
      description: <>taught students about {a('graduate-level algorithms', 'https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms')} and {a('introductory robotics', 'https://dellaert.github.io/25F-3630/')}</>},
    {company: "Stripe", url: "https://stripe.com", title: "Software Engineering Intern", dates: "May 2025 - August 2025",
      description: <>improved evidence gathering for {a('smart disputes', 'https://docs.stripe.com/disputes/smart-disputes')}</>},
    {company: "Georgia Tech", url: "https://www.cc.gatech.edu/", title: "Senior Teaching Assistant", dates: "August 2023 - May 2025",
      description: <>helped run georgia tech's {a('intro discrete math course', 'https://faculty.cc.gatech.edu/~ladha/S24/2050/')} for several hundred students per semester.<br />also was the sole ta for {a('intro to ai', 'https://europe.gatech.edu/sites/default/files/2024-01/CS%203600%20Syllabus.pdf')} over the summer</>},
    {company: "iD Tech Camps", url: "https://www.idtech.com/", title: "Lead Instructor", dates: "June 2023 - August 2023",
      description: <>taught campers about {a('python', 'https://www.idtech.com/courses/python-coding-101')} and {a('java', 'https://www.idtech.com/courses/java-coding-build-mods-with-minecraft')} coding</>},
]

export default function Experience() {
  return (
    <section id="experience">
      <div className={styles.experience}>
        <Headword pos="n.">
          ex<span aria-hidden="true">·</span>pe<span aria-hidden="true">·</span>ri<span aria-hidden="true">·</span>ence
        </Headword>

        <p className={styles.gloss}>places i've worked.</p>

        <ol className={styles.roles}>
          {roles.map((role) => (
            <li key={role.company + role.dates} className={styles.role}>
              <p className={styles.company}>
                {role.url ? a(role.company, role.url) : role.company}
              </p>
              <p className={styles.meta}>
                {role.title}<span aria-hidden="true"> · </span>{role.dates}
              </p>
              <p className={styles.roleDesc}>
                {role.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
