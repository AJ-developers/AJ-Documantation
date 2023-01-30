import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quality',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>
        Our creations offer you the <strong>best experience</strong> you can find.
        With <strong>maximum compatibility</strong>.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        You can trust all our creation
        is protected for <strong>exploit</strong> and <strong>other bad things</strong>.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/configure.svg').default,
    description: (
      <>
        All the creation made by AJ Developers
        is <strong>plug and play</strong> and <strong>easy to configure</strong>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
