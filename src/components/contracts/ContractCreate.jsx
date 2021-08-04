import React, { Component } from "react";


class ContractCreate extends Component {
  createContract = (event) => {
    event.preventDefault();

    const contract = {
      id: 0,           
      roomPrice: Number(event.target["roomPrice"].value),
      paymentDate: Number(event.target["paymentDate"].value),
      startDate: Date(event.target["startDate"].value),
      endDate: Date(event.target["endDate"].value),
      roomInQuestion: Number(event.target["roomInQuestion"].value),
      tenantInQuestion: event.target["tenantInQuestion"].value,      
    };

    this.props.addContract(contract);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Contract</h3>
        </div>

        <form onSubmit={this.createContract}>
          
           <div className="row mb-2">
            <label htmlFor="roomPrice" className="col-2 mt-2">
            Room Price:
            </label>
            <input
              id="roomPrice"
              type="number"
              required              
              className="form-control col-10"
              placeholder="Enter Room Price"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="paymentDate" className="col-2 mt-2">
            Payment Date:
            </label>
            <input
              id="paymentDate"
              type="date"
              required              
              className="form-control col-10"
              placeholder="Enter Payment Date"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="startDate" className="col-2 mt-2">
            Contract Start Date:
            </label>
            <input
              id="startDate"
              type="date"
              required              
              className="form-control col-10"
              placeholder="Enter Contract Start Date"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="endDate" className="col-2 mt-2">
            Contract End Date:
            </label>
            <input
              id="endDate"
              type="date"
              required              
              className="form-control col-10"
              placeholder="Enter Contract End Date"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="roomInQuestion" className="col-2 mt-2">
            Room Number:
            </label>
            <input
              id="roomInQuestion"
              type="number"
              required              
              className="form-control col-10"
              placeholder="Enter Room Number"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="tenantInQuestion" className="col-2 mt-2">
            Tenant Name:
            </label>
            <input
              id="tenantInQuestion" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Tenant Name"
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

export default ContractCreate;
