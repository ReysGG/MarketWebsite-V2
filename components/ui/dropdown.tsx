import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function DropdownFunction() {
  return (
    <Dropdown className="">
      <DropdownTrigger>
        <Button className="border rounded-md border-gray-500">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="bg-white border border-gray-500 rounded-sm"
      >
        <DropdownItem
          key="edit"
          className="text-gray-500 border-b border-gray-500"
        >
          Edit
        </DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-red-500">
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
