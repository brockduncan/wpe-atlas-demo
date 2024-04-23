import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const headerTopMenuItems = props.data.headerTopMenuItems.nodes;
  const footerMenuItems = props.data.footerMenuItems.nodes;
  const { title, content } = props.data.page;

  return (
    <div className="flex flex-col h-screen bg-page-bg-mobile bg-no-repeat bg-top bg-[length:100%_700px] lg:bg-page-bg-inside">
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

      <main className="container flex-1">
        <section className="text-white text-center px-8 mb-[200px]">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam hic quasi officia minus porro voluptas, commodi veritatis sunt earum totam excepturi inventore atque, doloribus obcaecati velit praesentium ipsa impedit unde.
        </section>
        <section className="px-8">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>

      <Footer footerMenuItems={footerMenuItems} />
    </div>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${Header.fragments.entry}
  ${Footer.fragments.entry}
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
    ...HeaderFragment
    ...FooterFragment
  }
`;
