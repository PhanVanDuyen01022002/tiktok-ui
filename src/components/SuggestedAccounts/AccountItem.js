import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestedAccounts.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/589e774518f161b9ab337f3d272f72f2.jpeg?lk3s=a5d48078&nonce=48676&refresh_token=912dc0b7c9cc671f2d902e7e6061d2ae&x-expires=1721898000&x-signature=MXXnyqjKasSRX1lS4T0uXlmEFBQ%3D&shp=a5d48078&shcp=81f88b70"
            alt="PhanVanDuyen"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>PhanVanDuyen</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Phan Văn Duyên</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
