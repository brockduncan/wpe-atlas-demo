import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const headerTopMenuItems = props.data.headerTopMenuItems.nodes;
  const footerMenuItems = props.data.footerMenuItems.nodes;

  return (
    <div className="flex flex-col h-screen bg-page-bg-mobile bg-no-repeat bg-top bg-[length:100%_700px] lg:bg-home-bg">
      <Head>
        <title>{siteTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
        headerTopMenuItems={headerTopMenuItems}
      />

      <main className="container mx-auto flex-1">
        <section className="text-white text-center lg:text-left px-8 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Build with Proven Coatings
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:w-2/3 xl:w-1/2 lg:pr-8">
              <p className="mb-6">
                At No-Burn, we know that our intumescent and fire retardant
                coatings save more than structures — they save lives. As a
                trusted leader in passive fire protective coatings, we’re proud
                to push the industry forward and deliver high-performing,
                code-compliant fire protection.
              </p>
              <a href="#" className="button">
                Get Started
              </a>
            </div>
            <div className="lg:w-1/3 xl:w-1/2">
              <img src="/img/home-main.webp" alt="" />
            </div>
          </div>
        </section>
      </main>

      <Footer footerMenuItems={footerMenuItems} />
    </div>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  ${Footer.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
    ...FooterFragment
  }
`;
