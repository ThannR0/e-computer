"use client";

import { Dropdown } from "flowbite-react";
import {Link} from "react-router-dom"
export function UserDropdown({ logoutHandler }) {
  return (
    <Dropdown label="User" dismissOnClick={false}>
      <Link to="/order-history">
        <Dropdown.Item>Lịch sử giao dịch</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={logoutHandler}>Đăng xuất</Dropdown.Item>
    </Dropdown>
  );
}
