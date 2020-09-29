import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import DividendoModal from "../DividendoModal/DividendoModal";

const useStyles = makeStyles((theme) => ({
  exampleWrapper: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    position: "absolut",
    marginTop: theme.spacing(3),
    height: "90vh"
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  }
}));

const AppFab = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openModalNovaOperacao, setOpenModalNovaOperacao] = useState(false);
  const [openModalDividendo, setOpenModalDividendo] = useState(false);

  const handleCloseSpeedDial = () => {
    setOpen(false);
  };

  const handleOpenSpeedDial = () => {
    setOpen(true);
  };

  const handleNovaOperacao = () => {
    setOpenModalNovaOperacao(true);
    handleCloseSpeedDial();
  };

  const handleNovoDividendo = () => {
    setOpenModalDividendo(true);
    handleCloseSpeedDial();
  };

  return (
    <div className={classes.exampleWrapper}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleCloseSpeedDial}
        onOpen={handleOpenSpeedDial}
        open={open}
      >
        <SpeedDialAction
          key={"Nova operação"}
          icon={<NoteAddIcon />}
          tooltipTitle={"Nova operação"}
          onClick={() => handleNovaOperacao()}
        />
        <SpeedDialAction
          key={"Novo dividendo"}
          icon={<AttachMoneyIcon />}
          tooltipTitle={"Novo dividendo"}
          onClick={() => handleNovoDividendo()}
        />
      </SpeedDial>

      <DividendoModal
        open={openModalDividendo}
        setOpen={setOpenModalDividendo}
      />
    </div>
  );
};

export default AppFab;
