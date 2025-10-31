import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employee = [
    { id: 1, name: 'Poliana Pablete', email: 'Poliana@email.com' },
    { id: 2, name: 'Katia Leite', email: 'Katia@email.com' },
  ];

  findAll() {
    return this.employee;
  }

  findOne(id: number) {
    return this.employee.find((customer) => customer.id === id);
  }

  create(customer: any) {
    const newCustomer = { id: Date.now(), ...customer };
    this.employee.push(newCustomer);
    return newCustomer;
  }

  remove(id: number) {
    this.employee = this.employee.filter((customer) => customer.id !== id);
    return { deleted: true };
  }

  update(id: number, employee: any) {
    const index = this.employee.findIndex((emp) => emp.id === id);
    if (index === -1) 
      return null;
    }
}