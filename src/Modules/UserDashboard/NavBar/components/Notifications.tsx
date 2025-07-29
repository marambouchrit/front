/*import React from "react";
import { Button, styled, type Theme } from "@mui/material";
import Tooltip, {
  tooltipClasses,
  type TooltipProps,
} from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const Notifications = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  
  return (
    <>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <NotificationPopup
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Add"
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <Button color="inherit" onClick={handleTooltipOpen}>
              Notifications
            </Button>
          </NotificationPopup>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Notifications;
*/