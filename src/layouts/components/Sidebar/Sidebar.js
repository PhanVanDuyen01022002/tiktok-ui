import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from "~/components/Icon";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Bạn bè"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts label="Gợi ý tài khoản" />
      <SuggestedAccounts label="Các tài khoản đang follow" />
    </aside>
  );
}

export default Sidebar;
