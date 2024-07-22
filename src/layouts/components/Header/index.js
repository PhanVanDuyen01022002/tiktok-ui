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
                src="ttps://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/75bb784c32417b8b8574939ee27edb14.jpeg?lk3s=a5d48078&nonce=94286&refresh_token=ef2755cad7d0f032e8a769526cb12680&x-expires=1721545200&x-signature=9XTwt75p9WbenJ05osQBiDtbfUw%3D&shp=a5d48078&shcp=81f88b70"
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
