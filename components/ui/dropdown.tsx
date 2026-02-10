import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { AlertDialogDestructive } from "../alert/alert";
import { useState } from "react";

export default function DropdownFunction({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dropdown
        className="w-full h-full z-50"
        placement="bottom-end"
        shouldBlockScroll={false}
      >
        <DropdownTrigger>
          <Button className="border rounded-md border-gray-500">
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className="bg-white border border-gray-500 rounded-sm"
        >
          <DropdownItem
            key="edit"
            className="text-gray-500 border-b border-gray-500"
            onPress={() => {}}
          >
            Edit
          </DropdownItem>
          <DropdownItem
            key="delete"
            color="danger"
            className="text-red-500"
            onPress={() => setIsOpen(true)}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <AlertDialogDestructive id={id} open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
