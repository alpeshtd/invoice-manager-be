const typeDefs = `
  type User {
    id: ID,
    userName: String,
    password: String,
    name: String,
    mail: String,
    mobile: String,
    userRoleId: UserRole,
    changeLog: [String],
    performedById: User,
    performedT: String,
  }

  type Access {
    label: String,
    id: String,
    value: String,
  }

  input AccessInput {
    label: String,
    id: String,
    value: String,
  }

  type UserRole {
    id: ID,
    name: String!,
    access: [Access],
    changeLog: [String],
    performedById: User,
    performedT: String,
  }

  type Customer {
    id: ID,
    name: String!,
    gstno: String,
    mobile: String,
    mail: String,
    address: String,
    changeLog: [String],
    performedById: User,
    performedT: String,
  }

  type Item {
    description: String,
    unit: Access,
    qty: Float,
    rate: Float,
    amount: Float,
  }

  input ItemInput {
    description: String,
    unit: AccessInput,
    qty: Float,
    rate: Float,
    amount: Float,
  }

  type Invoice {
    id: ID,
    companyName: String,
    gstin: String,
    address1: String,
    address2: String,
    address3: String,
    mail: String,
    mobile: String,
    customerId: Customer,
    clientName: String,
    clientAddress: String,
    clientGstin: String,
    metaInvoiceNo: String,
    metaDate: String,
    items: [Item]
  }

  type Default {
    id: ID,
    companyName: String,
    gstin: String,
    address1: String,
    address2: String,
    address3: String,
    mail: String,
    mobile: String,
  }

  type Query {
    users: [User],
    user(id: ID!): User,
    userRoles: [UserRole],
    userRole(id: ID!): UserRole,
    customers: [Customer],
    customer(id: ID!): Customer,
    invoices: [Invoice],
    invoice(id: ID!): Invoice,
    defaults: [Default],
    default(id: ID!): Default
  }

  # Mutation
  type Mutation {
    addInvoice(
      companyName: String,
      gstin: String,
      address1: String,
      address2: String,
      address3: String,
      mail: String,
      mobile: String,
      customerId: String,
      clientName: String,
      clientAddress: String,
      clientGstin: String,
      metaInvoiceNo: String,
      metaDate: String,
      items: [ItemInput]
    ): Invoice
    updateInvoice(
      id: ID!,
      companyName: String,
      gstin: String,
      address1: String,
      address2: String,
      address3: String,
      mail: String,
      mobile: String,
      customerId: String,
      clientName: String,
      clientAddress: String,
      clientGstin: String,
      metaInvoiceNo: String,
      metaDate: String,
      items: [ItemInput]
    ): Invoice
    deleteInvoice(id: ID!): Invoice
    addUser(
      userName: String!,
      password: String!,
      name: String!,
      mail: String,
      mobile: String,
      userRoleId: String!,
      changeLog: [String],
      performedById: String,
      performedT: String,
    ): User
    updateUser(
        id: ID!,
        userName: String,
        password: String,
        name: String,
        mail: String,
        mobile: String,
        userRoleId: String,
        changeLog: [String],
        performedById: String,
        performedT: String,
    ): User
    deleteUser(id: ID!): User
    addUserRole(
        name: String!,
        access: [AccessInput],
        changeLog: [String],
        performedById: String,
        performedT: String,
    ): UserRole
    updateUserRole(
        id: ID!,
        name: String,
        access: [AccessInput],
        changeLog: [String],
        performedById: String,
        performedT: String,
    ): UserRole
    deleteUserRole(id: ID!): UserRole,
    addCustomer(
        name: String!,
        mobile: String,
        mail: String,
        address: String,
        gstno: String,
        changeLog: [String],
        performedById: String,
        performedT: String,
    ): Customer
    updateCustomer(
        id: ID!,
        name: String,
        mobile: String,
        mail: String,
        address: String,
        gstno: String,
        changeLog: [String],
        performedById: String,
        performedT: String,
    ): Customer
    deleteCustomer(id: ID!): Customer
    addDefault(
      companyName: String,
      gstin: String,
      address1: String,
      address2: String,
      address3: String,
      mail: String,
      mobile: String,
    ): Default
    updateDefault(
        id: ID!,
        companyName: String,
        gstin: String,
        address1: String,
        address2: String,
        address3: String,
        mail: String,
        mobile: String,
    ): Default
    deleteDefault(id: ID!): Default
  }
`;

module.exports = { typeDefs };
