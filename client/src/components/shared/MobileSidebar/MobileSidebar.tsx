import React, { useEffect, useRef } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";
import { motion } from "framer-motion";
import { hideMobileSidebar } from "../../../store/slices/mobileSidebar/mobileSidebarSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { usePathname } from "next/navigation";

const MobileSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const path = usePathname();
  const links = [
    {
      page: "Dashboard",
      link: "/dashboard",
    },
    {
      page: "Bookmarks",
      link: "/dashboard",
    },
    {
      page: "Read",
      link: "/dashboard",
    },
    {
      page: "Listen",
      link: "/dashboard",
    },
    {
      page: "Settings",
      link: "/settings",
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      dispatch(hideMobileSidebar());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="h-screen w-screen flex fixed top-0 left-0 z-40 bg-black bg-opacity-80"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          x: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className="h-full w-[18rem] px-3 bg-white"
      >
        <div
          className={`h-[5.375rem] border-b border-gray-200 dark:border-border-bg-dark flex items-center pt-6 pl-3`}
        >
          <h3 className="font-oleo font-normal text-3xl md:text-4xl">
            Blogger
          </h3>
        </div>
        <div className="h-[calc(100%-5.375rem)] flex flex-col justify-between py-8">
          <ul className="mb-10">
            {links.map((item, index) => {
              return (
                <SidebarLink key={index} href={item.link} text={item.page} />
              );
            })}
          </ul>
          <ul>
            <SidebarLink href="/help" text="Get Help" />
            <SidebarLink href="/contact" text="Contact Us" />
            <SidebarLink href="/logout" text="Log Out" />
          </ul>
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideMobileSidebar())}
        className="h-full flex-1 "
      ></div>
    </motion.div>
  );
};

export default MobileSidebar;