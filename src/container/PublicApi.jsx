import React, { Component } from 'react';
import { getReposByUserName } from '../logic/api';
import { validateUsername } from '../logic/validators';
import Table from '../components/Table';
import Search from '../components/Search';


class PublicApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      repositories: [],
    };
  }

  showErrorMessage = (errorMsg) => {
    this.setState({
      errorMessage: errorMsg,
      repositories: [],
    })
  }

  onButtonClick = (searchValue) => {
    if(validateUsername(searchValue)){
      getReposByUserName(searchValue)
        .then((response) => {
          if(response.data.length > 0){
            this.setState({
              errorMessage: "",
              repositories: response.data.slice(0, 5),
            })
          }
          else {
            this.showErrorMessage("This user does not have any repository");
          }
        }, this)
        .catch(xhr => {
          let errorMsg = xhr && xhr.response && xhr.response.status === 404 
            ? "The user with this username does not exist." 
            : "Something went wrong. Please try again";
          this.showErrorMessage(errorMsg);
        });
    } else {
      this.showErrorMessage("The username is incorrect.");
    }
  }

  getDataByColumn(columns, d){
    return columns.map(column => {
      if(column.parser && column.parser.type === "date"){
        return new Date(d[column.field]).toLocaleDateString("pl-PL");
      }
      else {
        return d[column.field];
      }
    })
  }

  prepareData(data, columns){
    let rowsData = [];
    for(let d of data){
      rowsData.push(this.getDataByColumn(columns, d))
    }
    return rowsData;
}

  render() {
    const columns = [
      { label: "Language", field: "language"},
      { label: "Name", field: "name"},
      { label: "Description", field: "description"},
      { label: "Created Date", field: "created_at", parser: {type: "date"}},
      { label: "Last Update", field: "updated_at", parser: {type: "date"}},
      { label: "Stars", field: "stargazers_count"}
    ]
    const data = this.prepareData(this.state.repositories, columns);

    return (
      <div>
        <Search 
          label="Show GitHub repository of user:" 
          placeholder="Enter GitHub user..." 
          buttonLabel="Show"
          errorMsg={this.state.errorMessage}
          handleClick={this.onButtonClick}/> 
        <Table 
          headers={columns}
          data={data} 
        ></Table>
      </div>
     )
  }
}

export default PublicApi;
