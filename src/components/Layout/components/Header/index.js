import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEllipsisVertical,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";
import {
  CoinIcon,
  HelpIcon,
  InboxIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  ShortcutsIcon,
  UploadIcon,
} from "~/components/Icon";
import Image from "~/components/Image";

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
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

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
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

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
                  <div className={cx("inbox-number")}>16</div>
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
