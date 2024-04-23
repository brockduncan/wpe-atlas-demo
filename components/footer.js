import { gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({
  footerMenuItems
}) {
  return (
    <footer className="flex flex-col lg:flex-row lg:flex-wrap mt-auto bg-[#FCFCFC] border-t-2 border-t-primary">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row">
          {/* logo / contact */}
          <div className="mb-12 lg:mb-0">
            <div className="flex flex-col lg:flex-row lg:items-start">
              <img
                src="/img/no-burn-footer.webp"
                alt="no burn logo"
                className="mx-auto mb-8 lg:mr-8 block"
              />
              <img
                src="/img/made-in-the-usa.png"
                alt="made in the usa"
                className="mx-auto mb-8 block"
              />
            </div>
            <address className="not-italic">
              <p className="text-secondary text-center lg:text-left mb-6">
                1255 High Street, Suite 200
                <br />
                Wadsworth, OH 44281
              </p>
              <p className="text-secondary text-center lg:text-left">
                <a href="tel:800-989-8577">
                  <span className="font-bold">Phone</span> (800) 989-8577
                </a>
                <br />
                <a href="tel:330-336-5800">
                  <span className="font-bold">Fax</span> (330) 336-5800
                </a>
              </p>
            </address>
          </div>
          {/* menus */}
          <div className="flex flex-col lg:flex-row flex-1 lg:ml-16">
            <nav className="text-center lg:text-left text-secondary mb-12 lg:ml-16 lg:flex-1">
              <ul>
              {footerMenuItems.map((menuItem, index) => (
                <li className="mb-4 last:mb-0" key={index}>
                  <a href={menuItem.path}>
                    {menuItem.label}
                  </a>
                </li>
              ))}
              </ul>
            </nav>
            <nav className="text-center lg:text-left text-secondary mb-12 lg:ml-16 lg:flex-1">
              <ul>
                <li className="mb-4 last:mb-0">
                  <a href="#">Intumescent Coatings or Paints</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="#">Intumescent Coatings or Paints</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="#">Intumescent Coatings or Paints</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="#">Intumescent Coatings or Paints</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* social */}
        <div className="flex justify-center my-8">
          <a
            href=""
            className="bg-red-600 rounded-full w-[32px] h-[32px] flex justify-center items-center mx-2 hover:scale-110 duration-100 ease-in-out"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-white" />
          </a>
          <a
            href=""
            className="bg-[#0d66c2] rounded-full w-[32px] h-[32px] flex justify-center items-center mx-2 hover:scale-110 duration-100 ease-in-out"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white" />
          </a>
        </div>
        <p className="text-center text-sm w-full">
          Copyright © 2023 No-Burn, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

Footer.fragments = {
  entry: gql`
    fragment FooterFragment on RootQuery {
      generalSettings {
        title
        description
      }
      footerMenuItems: menuItems(where: { location: FOOTER }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};
