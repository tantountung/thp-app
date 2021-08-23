import React, { Component } from "react";


class ContractCreate extends Component {
  createContract = (event) => {
    event.preventDefault();

    const contract = {
      // id: 0,           
      RoomPrice: Number(event.target["roomPrice"].value),
      PaymentDate: event.target["paymentDate"].value,
      StartDate: event.target["startDate"].value,
      EndDate: event.target["endDate"].value,
      RoomInQuestionId: Number(event.target["roomInQuestionId"].value),
      TenantInQuestionId: Number(event.target["tenantInQuestionId"].value),      
    };

    this.props.addContract(contract);
  };

  render() {

    const optionRoom = this.props.roomArray.map((room) => {
      return ( 
        <option key={room.roomInQuestionId} value={room.roomInQuestionId}>
          {room.roomNumber}
          </option>     
      );
    });

    const optionTenant = this.props.tenantArray.map((tenant) => {
      return ( 
        <option key={tenant.tenantInQuestionId} value={tenant.tenantInQuestionId}>
          {tenant.tenantName}
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
            <label htmlFor="roomInQuestionId" 
            className="col-2 mt-2">
            Room Number:
            </label>
            <select id="roomInQuestionId"
            required 
            className="form-control col-10">
              {optionRoom}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="tenantInQuestionId" 
            className="col-2 mt-2">
            Tenant Name:
            </label>
            <select id="tenantInQuestionId" 
            required className="form-control col-10">
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
