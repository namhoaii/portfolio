import { useTranslation } from "react-i18next";

import { Navigation } from "@components/Navigation";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="">
          <img
            src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/492043817_696989492692302_5503770210457629120_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0j14yTIMm0kQ7kNvwFB1TdB&_nc_oc=AdmtMT5kx1mG_lvrjSkZGdJPz48aPrWLw1cqBpes8hKAKVUEApBRsgZvJZVvq00sVxhNvDLuL7pM6j97RXNvy4_3&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=1uOMoh6CDF-l2pZSRzg52Q&oh=00_AfWaldCn_-rMe-cDayAzna5oDWMq8W1v4KMpi3JptVlkCw&oe=68A670FF"
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div>
          <Navigation></Navigation>
        </div>
      </div>
    </div>
  );
};

export default Header;
