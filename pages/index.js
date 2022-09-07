import Head from 'next/head';
import Layout, { siteTitle } from './components/layout'
import utilStyles from '../styles/utils.module.css';
import LinkComponent from './components/linkcomponent';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey my names Connor, I'm currently a Software Engineer at Microsoft. Based out of Austin Tx.</p>
        <p>
          I primarily focus on Full Stack working on a Developer Platform that interacts with a Backend Distributed System
        </p>
      </section>
    <LinkComponent name='Links' refName='/new'></LinkComponent>
    <div></div>
    <LinkComponent name='Porfolio' refName='/portfolio'></LinkComponent>
    </Layout>
  );
}