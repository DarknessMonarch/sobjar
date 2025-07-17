"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/assets/logo.png";
import NavSportImage from "@/public/assets/navsport.jpg";
import NavEventImage from "@/public/assets/navevent.jpg";
import NavAboutImage from "@/public/assets/navabout.jpg";
import styles from "@/app/styles/navbar.module.css";
import { useDrawerStore } from "@/app/store/Drawer";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import { IoChevronDown as ChevronDown } from "react-icons/io5";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/about/story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Team", href: "/about/team" },
    ],
    title: "About Sobjar Canada",
    description:
      "We are a non-profit community organization supporting Somali Bantu families, youth, and newcomers in Alberta. Through education, advocacy, and community services, we help foster integration, empowerment, and social well-being for all.",
    image: NavAboutImage,
    imageTitle: "Empowering the Future of Somali Youth",
    imageDescription:
      "Discover the transformative journey of Somali youth through our mission to empower them for a brighter tomorrow.",
  },
  { name: "Our Mission", href: "/mission" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Youth Programs", href: "/programs/youth" },
      { name: "Community Outreach", href: "/programs/community" },
      { name: "Educational Initiatives", href: "/programs/education" },
    ],
    title: "Programs",
    description:
      "Discover our diverse range of programs that empower Somali youth, foster community engagement, and contribute to a brighter future for all.",
    image: NavEventImage,
    imageTitle: "Community Engagement and Empowerment",
    imageDescription:
      "We believe in fostering strong community bonds through youth initiatives, outreach programs, and educational support.",
  },
  { name: "Blog", href: "/blog" },
  {
    name: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { name: "Volunteer", href: "/get-involved/volunteer" },
      { name: "Partnerships", href: "/get-involved/partnerships" },
      { name: "Events", href: "/get-involved/events" },
    ],
    title: "Curriculum Activities",
    description:
      "Join our extracurricular activities that help youth build leadership, teamwork, and community engagement skills.",
    image: NavSportImage,
    imageTitle: "Sobjar Sport Team",
    imageDescription:
      "Our sport teams empower youth through healthy competition, teamwork, and community pride.",
  },
  { name: "Contact", href: "/contact" },
];

export default function SobjarNavbar() {
  const { isOpen, toggleOpen, setOpen, setClose } = useDrawerStore();
  const [isMobile, setMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setMobile(mobile);
      if (!mobile) {
        setClose();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setClose]);

  const handleLogoClick = () => router.push("/", { scroll: false });

  const handleNavItemClick = () => {
    if (isMobile) {
      setClose();
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo} onClick={handleLogoClick}>
        <Image
          src={LogoImg}
          alt="Logo"
          width={100}
          priority
          className={styles.navLogoImg}
        />
      </div>

      {!isMobile && (
        <div className={styles.navlinksContainer}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isMobile={isMobile}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              pathname={pathname}
              router={router}
              onNavItemClick={handleNavItemClick}
            />
          ))}
        </div>
      )}

      {isMobile && isOpen && (
        <div className={`${styles.navlinksContainer} ${styles.mobile}`}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isMobile={isMobile}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              pathname={pathname}
              router={router}
              onNavItemClick={handleNavItemClick}
            />
          ))}
        </div>
      )}

      <div className={styles.navRightSection}>
        <Link href="/donate" className={styles.donateButton}>
          Donate
        </Link>
        {isMobile && (
          <div className={styles.navHamburger}>
            {isOpen ? (
              <CloseIcon
                onClick={toggleOpen}
                alt="Close"
                aria-label="Close"
                className={styles.navIcon}
              />
            ) : (
              <MenuIcon
                onClick={toggleOpen}
                alt="Open"
                aria-label="Open"
                className={styles.navIcon}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({
  item,
  index,
  isMobile,
  activeDropdown,
  setActiveDropdown,
  pathname,
  router,
  onNavItemClick,
}) {
  const isActive = activeDropdown === index;
  const isCurrentPage = pathname === item.href;

  const handleInteraction = () => {
    if (item.dropdown) {
      setActiveDropdown(isActive ? null : index);
    } else {
      if (isMobile) {
        onNavItemClick(); 
      }
      router.push(item.href);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile && item.dropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  return (
    <div
      className={styles.navItemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.navItemLinkContainer} onClick={handleInteraction}>
        <Link
          href={item.href}
          className={`${styles.navlinks} ${
            isCurrentPage ? styles.activeNavLinks : ""
          }`}
          onClick={(e) => {
            if (isMobile && item.dropdown) {
              e.preventDefault();
            } else if (!item.dropdown) {
              onNavItemClick();
            }
          }}
        >
          {item.name}
          {item.dropdown && (
            <ChevronDown
              className={`${styles.chevron} ${
                isActive ? styles.chevronOpen : ""
              }`}
            />
          )}
        </Link>
      </div>

      {item.dropdown && isActive && (
        <Dropdown
          item={item}
          setActiveDropdown={setActiveDropdown}
          isMobile={isMobile}
          onNavItemClick={onNavItemClick}
        />
      )}
    </div>
  );
}

function Dropdown({ item, setActiveDropdown, isMobile, onNavItemClick }) {
  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    if (isMobile) {
      onNavItemClick();
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownInfo}>
          {item.title && <h2>{item.title}</h2>}
          {item.description && <p>{item.description}</p>}
          <div className={styles.dropdownLinks}>
            {item.dropdown?.map((dropdownItem, dropIndex) => (
              <Link
                key={dropIndex}
                href={dropdownItem.href}
                className={styles.dropdownItem}
                onClick={handleDropdownItemClick}
              >
                {dropdownItem.name}
              </Link>
            ))}
          </div>
        </div>

        {item.image && !isMobile && (
          <div className={styles.dropdownImageContainer}>
            <Image
              className={styles.dropdownImage}
              src={item.image}
              alt={item.imageTitle || "Dropdown Image"}
              width={250}
              height={250}
            />
            {item.imageTitle && <h3>{item.imageTitle}</h3>}
            {item.imageDescription && <p>{item.imageDescription}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
