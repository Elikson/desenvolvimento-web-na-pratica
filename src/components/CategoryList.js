import React from 'react'
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import axios from 'axios'

function CategoryList(props) {

    const [rows, setRows] = React.useState([])

    React.useEffect(() => {
        axios.get("https://jkcn5znzie.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
            r => {
                setRows(r.data.response)
            }
        )
    }, [])

    return (
        <div>
            <h4>{props.texto}</h4>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CategoryList