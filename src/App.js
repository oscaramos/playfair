import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TableContainer, Table, TableBody, TableCell, TableRow } from "@material-ui/core";

import generateMatrix, { preprocessKey } from "./components/generate-matrix/generate-matrix";
import cipher from "./components/cipher/cipher";


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
  },
  selectedCell: {
    backgroundColor: 'hsl(160, 0%, 90%)'
  }
}));

const countFromPreprocessedKey = (preKey) => {
  return preKey.reduce((prev, curr) => prev + curr.length, 0)
}

function App() {
  const classes = useStyles();

  const [key, setKey] = useState('bachata');
  const [text, setText] = useState('quien te quita lo bailado');

  const cnt = countFromPreprocessedKey(preprocessKey(key));

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
                matrix.map((row, i) =>
                  <TableRow key={row}>
                    {row.map((x, j) =>
                      <TableCell key={x} className={(i*5+j) < cnt? classes.selectedCell: null}>{x}</TableCell>
                    )}
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className={classes.label}>Cripted Text: </Typography>
        <Typography className={classes.cripted} variant='h6'>{cripted}</Typography>
      </Paper>
    </Container>
  );
}

export default App;
