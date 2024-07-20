import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~c5_300x300.webp?lk3s=a5d48078&nonce=13395&refresh_token=ab818c26795f8522704d97e1be9b7f26&x-expires=1721383200&x-signature=JVUDN8e7xx1tmsuu8XLLPc1h0bw%3D&shp=a5d48078&shcp=c1333099"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Phan Văn Duyên</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>

        <span className={cx("username")}>MeoConQT0</span>
      </div>
    </div>
  );
}

export default AccountItem;
