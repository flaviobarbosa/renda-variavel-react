import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DatePicker } from "@material-ui/pickers";

import AppNumberInput from "../AppNumberInput/AppNumberInput";

import { salvarDividendo } from "../../helpers/dividendoHelper";

const DividendoModal = (props) => {
  const { open, setOpen } = props;

  const [ticker, setTicker] = React.useState("");
  const [valor, setValor] = React.useState("");
  const [data, setData] = React.useState(new Date());

  const handleSave = () => {
    salvarDividendo(ticker, valor, data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo dividendo</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            autoFocus
            margin="dense"
            id="ticker"
            label="Ticker"
            type="input"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              maxLength: 6
            }}
          />
          <TextField
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            margin="dense"
            id="valor"
            label="Valor"
            type="input"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              inputComponent: AppNumberInput
            }}
          />
          <DatePicker
            value={data}
            onChange={(data) => setData(data)}
            variant="inline"
            label="Data"
            format="dd/MM/yyyy"
            autoOk={true}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen.bind(this, false)} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DividendoModal;
