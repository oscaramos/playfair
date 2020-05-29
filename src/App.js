import React, { useState } from 'react';

import generateMatrix from "./components/generate-matrix/generate-matrix";
import cipher from "./components/cipher/cipher";

import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  label: {
    display: 'inline-block',
    opacity: "0.6",
  },
  cripted: {
    display: 'inline-block',
    fontFamily: 'consolas'
  }
}));

function App() {
  const classes = useStyles();

  const [key, setKey] = useState('bachata');
  const [text, setText] = useState('quien te quita lo bailado');

  const matrix = generateMatrix(key);
  const cripted = cipher(text, matrix);

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Paper className={classes.paper}>
        <TextField label="Key"
                   onChange={(e) => setKey(e.target.value)}
                   margin='normal'
                   fullWidth
                   variant='outlined'
                   value={key}
        />
        <TextField label="Text"
                   onChange={(e) => setText(e.target.value)}
                   margin='normal'
                   fullWidth
                   variant='outlined'
                   value={text}
        />
        <TableContainer>
          <Table>
            <TableBody>
              {
                matrix.map(row =>
                  <TableRow key={row}>
                    {row.map(x =>
                      <TableCell key={x}>{x}</TableCell>
                    )}
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className={classes.label}>Cripted Text:</Typography>
        <Typography className={classes.cripted} variant='h6'>{cripted}</Typography>
      </Paper>
    </Container>
  );
}

export default App;
