import React, { Component } from "react";


class HousekeeperCreate extends Component {
  createHousekeeper = (event) => {
    event.preventDefault();
    
    const housekeeper = {
      id: 0,     
      housekeeperName: event.target["housekeeperName"].value,   
      housekeeperPhone: event.target["housekeeperPhone"].value,      
      housekeeperAddress: event.target["housekeeperAddress"].value,
      housekeeperBankNumber: event.target["housekeeperBankNumber"].value,
      housekeeperLeave: Number(event.target["housekeeperLeave"].value),
      housekeeperSalary: Number(event.target["housekeeperSalary"].value),
      housekeeperStartDate: event.target["housekeeperStartDate"].value,
      housekeeperEndDate: event.target["housekeeperEndDate"].value,
    };

    this.props.addHousekeeper(housekeeper);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Housekeeper</h3>
        </div>

        <form onSubmit={this.createHousekeeper}>
          
        <div className="row mb-2">
            <label htmlFor="housekeeperName" className="col-2 mt-2">
            Housekeeper Name:
            </label>
            <input
              id="housekeeperName" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Housekeeper Name"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperPhone" className="col-2 mt-2">
            Housekeeper Phone:
            </label>
            <input
              id="housekeeperPhone"
              type="text"
              required              
              className="form-control col-10"
              placeholder="Enter Housekeeper Phone"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperAddress" className="col-2 mt-2">
            Housekeeper Address:
            </label>
            <input
              id="housekeeperAddress" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Housekeeper Address"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperBankNumber" className="col-2 mt-2">
            Housekeeper BankNumber:
            </label>
            <input
              id="housekeeperBankNumber"
              type="text" // type is text, since MVC is string and cant be trated like numbers since will be calculated

              required              
              className="form-control col-10"
              placeholder="Enter Housekeeper BankNumber"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperLeave" className="col-2 mt-2">
            Housekeeper Leave:
            </label>
            <input
              id="housekeeperLeave"
              type="number"
              required              
              className="form-control col-10"
              placeholder="Enter Housekeeper Leave"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperSalary" className="col-2 mt-2">
            Housekeeper Salary:
            </label>
            <input
              id="housekeeperSalary"
              type="number" //type must match in the backend, this one match because int in MVC
              required              
              className="form-control col-10"
              placeholder="Enter Housekeeper Salary"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperStartDate" className="col-2 mt-2">
            Housekeeper StartDate:
            </label>
            <input
              id="housekeeperStartDate"
              type="date"
              required              
              className="form-control col-10"
              placeholder="Enter Housekeeper StartDate"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="housekeeperEndDate" className="col-2 mt-2">
            Housekeeper EndDate:
            </label>
            <input
              id="housekeeperEndDate"
              type="datetime-local"
              //datetime means there will be time asked,better like row 109
                       
              className="form-control col-10"
              placeholder="Enter Housekeeper EndDate"
            />
          </div>
          
          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default HousekeeperCreate;
