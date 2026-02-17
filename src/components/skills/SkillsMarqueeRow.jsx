import styles from "./SkillsMarqueeRow.module.css";

export default function SkillsMarqueeRow({ title, skills }) {
  const loopItems = [...skills, ...skills];
  const duration = Math.max(14, skills.length * 2.8);

  return (
    <section className={styles.row} aria-label={title}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.marquee}>
        <div className={styles.track} role="list" style={{ "--duration": `${duration}s` }}>
          {loopItems.map((skill, index) => {
            const name = typeof skill === "string" ? skill : skill.name;
            const icon = typeof skill === "string" ? null : skill.icon;

            return (
              <article key={`${name}-${index}`} className={styles.card} role="listitem">
                <span className={styles.icon} aria-hidden="true">
                  {icon ? (
                    <img src={icon} alt="" />
                  ) : (
                    name
                      .split(/\s+/)
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                  )}
                </span>
                <span className={styles.name}>{name}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
