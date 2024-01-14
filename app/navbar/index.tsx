'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";

export default function TopNavbar() {

  return (
    <Navbar position="static">
      <NavbarBrand>
        {/* todo 图标 */}
        <p>金铲铲</p>
      </NavbarBrand>

      <NavbarContent className="max-w-20">
        <NavbarItem isActive>
          <Link href="/home" aria-current = "page">首页</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/batchWithdraw">批量提币</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/fundCollection">资金归集</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent data-justify = "end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            CONNECT
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
