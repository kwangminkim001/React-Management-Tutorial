import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableRow } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

const styles = theme =>({
  root:{
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX:"auto"
  },
  table:{
    minWidth:'1080px'
  }
})

const customer = [
  {
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '1111111',
    'gender' : '남자',
    'job' : '학생1'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '둘리',
    'birthday' : '2222222',
    'gender' : '남자',
    'job' : '학생2'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '루피',
    'birthday' : '3333333',
    'gender' : '남자',
    'job' : '학생3'
  }
]

class App extends Component{

  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          customer.map(c => {
            return (
              <Customer 
              key={c.id} id={c.id} image={c.image}
              name={c.name} birthday={c.birthday} job={c.job} gender={c.gender}
              />
            );
          })
        }
        </TableBody>
      </Table>
      </Paper>
      
      
    );
  }
}

export default withStyles(styles)(App);
