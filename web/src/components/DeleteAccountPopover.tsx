import {
  useDisclosure,
  Button,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  useToast,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store";
import { useDeleteAccountMutation } from "../store/api";
import { logout } from "../store/auth.slice";

export function DeleteAccountPopover() {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [deleteAccout, { isLoading: isDeleting }] = useDeleteAccountMutation();
  const handleDeleteAccount = () => {
    deleteAccout(token)
      .unwrap()
      .then(() => {
        toast({
          title: "Account deleted.",
          status: "success",
        });
        dispatch(logout());
      });
  };

  return (
    <>
      <Popover isOpen={isOpen} onClose={onClose} closeOnBlur={false}>
        <PopoverTrigger>
          <Button
            size="sm"
            colorScheme="red"
            onClick={onToggle}
            isLoading={isDeleting}
          >
            Delete Account
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to delete you account??
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleDeleteAccount} colorScheme="red">
                Apply
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
