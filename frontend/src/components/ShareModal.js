import React, { useRef } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";

const ShareModal = ({ open, onClose }) => {
  const inputRef = useRef();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">Share room link</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          label="URL"
          inputRef={inputRef}
          defaultValue={window.location.href}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="Toggle password visibility"
                  onClick={() => {
                    if (inputRef && inputRef.current) {
                      inputRef.current.select();
                      document.execCommand("copy");
                    }
                  }}
                >
                  <FileCopyOutlined />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ShareModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

ShareModal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default ShareModal;
