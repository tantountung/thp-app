import React, { Component } from "react";


class ContractCreate extends Component {
  createContract = (event) => {
    event.preventDefault();

    const contract = {
      id: 0,           
      roomPrice: Number(event.target["roomPrice"].value),
      paymentDate: event.target["paymentDate"].value,
      startDate: event.target["startDate"].value,
      endDate: event.target["endDate"].value,
      roomInQuestionId: event.target["roomInQuestion"].value,
      tenantInQuestionId: event.target["tenantInQuestion"].value,      
    };

    this.props.addContract(contract);
  };

  render() {

    const optionRoom = this.props.roomArray.map((room) => {
      return ( 
        <option key={room.id} value={room.id}>
          {room.roomInQuestionId}
          </option>     
      );
    });

    const optionTenant = this.props.tenantArray.map((tenant) => {
      return ( 
        <option key={tenant.id} value={tenant.id}>
          {tenant.tenantInQuestionId}
          </option>     
      );
    });


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
              // required              
              className="form-control col-10"
              placeholder="Enter Contract End Date"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="roomInQuestion" className="col-2 mt-2">
            Room Number:
            </label>
            <select id="roomInQuestion" required className="form-control col-10">
              {optionRoom}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="tenantInQuestion" className="col-2 mt-2">
            Tenant Name:
            </label>
            <select id="tenantInQuestion" required className="form-control col-10">
              {optionTenant}
            </select>
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
