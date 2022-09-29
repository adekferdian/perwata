import React from "react";
import { Calendar, Circle, Home, Info, Mail, User, Users } from "react-feather";

export const navigationData = [
  {
    header: 'Menu'
  },
  {
    id: 'beranda',
    title: 'Beranda',
    icon: <Users size={20} />,
    href: "/"
  },
  {
    id: 'anggota',
    title: 'Anggota',
    icon: <Users size={20} />,
    href: "/anggota"
  },
  {
    id: 'tentang',
    title: 'Tentang',
    icon: <Info size={20} />,
    href: '/master_pic_scorecard/list'
  },
];

export async function getServerSideProps(ctx) {
  // const { req, res } = ctx;
  return console.log(ctx);
  // const cookies = new Cookies(req, res);
  // const sessionData = await getSession(ctx);

  // if (sessionData) {
  //   if (!cookies.get("profilePicturePath")) {
  //     cookies.set("profilePicturePath", "/");
  //   }

  //   return {
  //     props: {
  //       sessionData: sessionData,
  //     },
  //     redirect: {
  //       destination: "/home",
  //       permanent: false,
  //     },
  //   };
  // }
  // return { props: {} };
}