import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FileUser } from "lucide-react";
import { redirect } from "next/navigation";

export default function ModalFunction({
  isOpen,
  onClose,
  url,
}: {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}) {
  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-black/50 backdrop-opacity-40",
          base: "border-border bg-background dark:bg-background text-foreground",
          header: "border-b-[1px] border-border",
          footer: "border-t-[1px] border-border",
          closeButton: "hover:bg-accent active:bg-accent/50",
        }}
        isOpen={isOpen}
        radius="lg"
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Success Upload Banner
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                  <FileUser className="w-12 h-12 text-white" />
                </div>
                <p className="text-green-500 text-center mt-4 font-bold">
                  Success Upload Banner
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  onPress={() => redirect(url)}
                >
                  Back To Banner Page?
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
