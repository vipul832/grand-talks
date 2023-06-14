import { Fragment, useReducer } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Post } from "../../utils/types";
import { useDeleteBlogMutation } from "../../App/api/postApi";
import { toast } from "react-hot-toast";

type deleteProps = {
  blog: Post;
};

export default function DeleteModel({ blog }: deleteProps) {
  const [open, toggler] = useReducer((state) => !state, false);
  const [deleteBlog] = useDeleteBlogMutation();
  const handleConfirmDelete = async () => {
    await deleteBlog(blog);
    toggler();
    toast.success("Post DeleteSuccessful");
  };

  return (
    <Fragment>
      <Button
        onClick={toggler}
        variant="gradient"
        size="sm"
        color="deep-purple"
      >
        Delete
      </Button>
      <Dialog open={open} handler={toggler}>
        <DialogHeader>Are you sure you want to delete?</DialogHeader>
        <DialogBody divider>{blog.title}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => {
              toggler();
              toast.success("Post Delete Canceled");
            }}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="deep-purple"
            onClick={handleConfirmDelete}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
