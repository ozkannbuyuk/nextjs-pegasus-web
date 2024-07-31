import React from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "../ui/Menu";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const menus = [
    {
      title: "Kurumsal",
      items: [
        { title: "Pegasus Hakkında", href: "/" },
        { title: "Basın Odası", href: "/" },
        { title: "Bilgi Toplumu Hizmetleri / Yatırımcı İlişkileri", href: "/" },
        {
          title: "SGHM Toplumsal Cinsiyet Dengesi Geliştirme Komisyonu",
          href: "/",
        },
        { title: "flypgs.com Magazine", href: "/" },
        { title: "Pegasus Kargo", href: "/" },
        { title: "Zamanında Kalkış Performansı", href: "/" },
      ],
    },
    {
      title: "Yardım",
      items: [
        { title: "Bize Yazın", href: "/" },
        { title: "Sıkça Sorulan Sorular", href: "/" },
        { title: "İletişim", href: "/" },
        { title: "Yardım Gereksinimi Olan Misafirler", href: "/" },
      ],
    },
    {
      title: "Gizlilik & Güvenlik",
      items: [
        { title: "Çerez Tercihleri", href: "/" },
        { title: "Genel Kurallar", href: "/" },
        { title: "Gizlilik", href: "/" },
        { title: "Uyumluluk", href: "/" },
        { title: "Yolcu Hakları", href: "/" },
        { title: "İşlem Rehberi", href: "/" },
        { title: "Site Haritası", href: "/" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <section>
            <h6 className="text-base font-bold text-tertiary mb-4">
              Pegasus'u indir!
            </h6>
            <nav className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1">
              <Link
                href="https://apps.apple.com/app/id723672499"
                target="_blank"
                title="Pegasus - App Store"
              >
                <Image
                  src="/images/app-store.svg"
                  alt="Pegasus - App Store"
                  width={150}
                  height={50}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.pozitron.pegasus"
                target="_blank"
                title="Pegasus - Google Play"
              >
                <Image
                  src="/images/google-play.svg"
                  alt="Pegasus - Google Play"
                  width={150}
                  height={50}
                />
              </Link>
              <Link
                href="https://appgallery.huawei.com/#/app/C101235947"
                target="_blank"
                title="Pegasus - App Galery"
              >
                <Image
                  src="/images/appgallery.svg"
                  alt="Pegasus - App Gallery"
                  width={150}
                  height={50}
                />
              </Link>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2024 Pegasus - Tüm Hakları Saklıdır
          </div>
          <nav className="flex gap-x-3">
            <Link
              href="https://www.facebook.com/PegasusHavayollari"
              target="_blank"
              title="Pegasus - Facebook"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-hover hover:bg-opacity-10 hover:text-primary-hover flex items-center justify-center"
            >
              <FaFacebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/pegasusairlines"
              target="_blank"
              title="Pegasus - Instagram"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-hover hover:bg-opacity-10 hover:text-primary-hover flex items-center justify-center"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/pegasus-airlines"
              target="_blank"
              title="Pegasus - Linkedin"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-hover hover:bg-opacity-10 hover:text-primary-hover flex items-center justify-center"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="https://x.com/ucurbenipegasus"
              target="_blank"
              title="Pegasus - Twitter"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-hover hover:bg-opacity-10 hover:text-primary-hover flex items-center justify-center"
            >
              <FaTwitter size={18} />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
