import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function createData(name, type) {
    return { name, type };
}

const rows = [
    createData('Login', 'Test Suite'),
    createData('Fill in Login Form', 'Test Case'),
    createData('Click login - Postive', 'Test Case'),
    createData('Click login - Negative', 'Test Case'),
    createData('Sign Up', 'Test Suite'),
];

function ManageTests() {
    const classes = useStyles();

    return (
        <>
            <Paper style={{marginBottom: 10}} className={classes.root}>
                <Button variant="contained" className={classes.button}>Create Test Suite</Button>
                <Button variant="contained" className={classes.button}>Create Test Case</Button>
            </Paper>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}

export default ManageTests;
