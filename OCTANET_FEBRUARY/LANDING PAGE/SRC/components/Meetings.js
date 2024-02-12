import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, email, phone, subject, message,date,time,attendby) {
    return {name, email, phone, subject, message,date,time,attendby}; 
  }
  
  const rows = [
      createData('James','James@123.com','6486','Project','hii','21-10-2023','10 am','Dharaneesh'),
      createData(),
      createData(),
      createData(),
      createData(),
    ];

function Meetings()
{
    return(
        <div>
            <Box sx={{ fontFamily: 'Monospace', fontSize: 'h3.fontSize', m: 1 }}>
                Client Meetings
            </Box>
            <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'purple',textDecorationColor:"white"}}>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Message</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Attend By</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.email}</TableCell>
                              <TableCell align="right">{row.phone}</TableCell>
                              <TableCell align="right">{row.subject}</TableCell>
                              <TableCell align="right">{row.message}</TableCell>
                              <TableCell align="right">{row.date}</TableCell>
                              <TableCell align="right">{row.time}</TableCell>
                              <TableCell align="right">{row.attendby}</TableCell>
                              <TableCell align="right"><Button variant="outlined">Action</Button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
        </div>
    )
}
export default Meetings;