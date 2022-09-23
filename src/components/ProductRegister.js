import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import axios from 'axios'
import React from 'react'

function ProductRegister(props) {

    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [categoriesOptions, setCategoriesOptions] = React.useState([])

    React.useEffect(() => {
        axios.get("https://jkcn5znzie.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
            r => {
                setCategoriesOptions(r.data.response)
            }
        )
    }, [])

    function registerProduct() {
        axios.post("https://jkcn5znzie.execute-api.us-east-1.amazonaws.com/cadastro-produto", {
            "name": name,
            "price": price,
            "category": category
        }).then(r => {
            alert("Produto foi cadastrado!")
        })
    }

    return (
        <Card>
            <CardContent>
                <div style={{ fontSize: '16px' }}>{props.texto}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={name} onChange={(e) => { setName(e.target.value) }} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={price} onChange={(e) => { setPrice(e.target.value) }} fullWidth id="outlined-basic" label="Preço" variant="outlined" />
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Categoria"
                                onChange={(e) => { setCategory(e.target.value) }}
                            >
                                {
                                    categoriesOptions.map(c => (
                                        <MenuItem value={c.id}>{c.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                        <Button variant="contained" onClick={() => { registerProduct() }}>Salvar</Button>
                    </div>

                </div>

            </CardContent>
        </Card>

    )
}

export default ProductRegister