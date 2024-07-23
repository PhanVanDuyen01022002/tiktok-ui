import classNames from "classnames/bind";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import config from "~/config";
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import {
  CoinIcon,
  HelpIcon,
  InboxIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  ProfileIcon,
  SettingsIcon,
  ShortcutsIcon,
  UploadIcon,
} from "~/components/Icon";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <LanguageIcon />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <ShortcutsIcon />,
    title: "Phím tắt",
  },
];

function Header() {
  const currentUser = true;
  const currentInbox = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "Language":
        //handle change language
        break;

      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: "Xem hồ sơ",
      to: "/@MeoConQT0",
    },
    {
      icon: <CoinIcon />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <SettingsIcon />,
      title: "Cài đặt",
      to: "/settings",
    },
    ...MENU_ITEM,
    {
      icon: <LogoutIcon />,
      title: "Đăng xuất",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy
                delay={[0, 200]}
                content="Tải video lên"
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  {currentInbox && <div className={cx("inbox-number")}>16</div>}
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Tải lên</Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/452191707_1168189331076958_7986720209837051578_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Xz45W5eqJU0Q7kNvgHpTdv-&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBMQdGaAypzcUwH70gi_94Ms4Gnkeyd_uJA2dd13z7C3g&oe=66A58501"
                className={cx("user-avatar")}
                alt="Phan Van Duyen"
                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
