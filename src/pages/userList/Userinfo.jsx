import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows } from "../../dummy/dummyData";
import AutoFixHighSharpIcon from "@mui/icons-material/AutoFixHighSharp";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">
              <AutoFixHighSharpIcon />
            </button>
          </Link>
          <DeleteOutlineOutlinedIcon />
          {/* <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          /> */}
        </>
      );
    },
  },
];

export default function Userinfo() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="mui_table">
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </Box>
    </div>
  );
}

{
  /*
 
import { userRows } from "../../dummyData"; 

export default function UserList() {
  const [data, setData] = useState(userRows);

 
   

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
*/
}
