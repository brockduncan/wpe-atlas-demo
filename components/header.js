import { gql } from "@apollo/client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header({
  siteTitle,
  siteDescription,
  menuItems,
  headerTopMenuItems,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-12 py-6 container mx-auto lg:p-6">
      <div className="flex w-full">
        <h1 className="mb-4 w-full lg:w-auto">
          <a href="/">
            <img
              src="/img/logo.webp"
              alt="No-Burn Logo"
              width="300"
              className="mx-auto"
            />
            <span className="sr-only">No-Burn</span>
          </a>
        </h1>
        {/* util nav */}
        <nav className="hidden lg:block ml-auto">
          <ul className="flex justify-end items-center text-xs gap-8">
            {headerTopMenuItems.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem.path} className="text-white">
                  {menuItem.label}
                </a>
              </li>
            ))}
            <li><a href="/request-a-quote" className="button">Request a Quote</a></li>
            <li>
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative">
        <button
          className="flex items-center text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          <span className="ml-2">Menu</span>
        </button>
        <nav
          className={`bg-white p-2 lg:p-0 rounded-b absolute top-[160%] w-full ${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:bg-transparent lg:static`}
        >
          <ul className="list-style-none lg:flex lg:justify-end">
            {menuItems.map((menuItem, index) => (
              <li
                className="text-secondary my-2 mb-8 last:mb-2 lg:text-white lg:text-sm lg:ml-8"
                key={index}
              >
                <a href={menuItem.path} className="p-2 lg:p-0">
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
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
      headerTopMenuItems: menuItems(where: { location: HEADERTOP }) {
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
