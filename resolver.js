const Customer = require("./models/Customer");
const Default = require("./models/Default");
const Invoice = require("./models/Invoice");
const User = require("./models/User");
const UserRole = require("./models/UserRole");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: async () =>
      await User.find({}).populate("userRoleId").populate("performedById"),
    user: async (parent, args) =>
      await User.findById(args.id)
        .populate("userRoleId")
        .populate("performedById"),
    userRoles: async () => await UserRole.find({}).populate("performedById"),
    userRole: async (parent, args) =>
      await UserRole.findById(args.id).populate("performedById"),
    customers: async () => await Customer.find({}).populate("performedById"),
    customer: async (parent, args) =>
      await Customer.findById(args.id).populate("performedById"),
    invoices: async () => await Invoice.find({}).populate('customerId').sort({metaDate: -1}),
    invoice: async (parent, args) =>
      await Invoice.findById(args.id).populate('customerId'),
    defaults: async () => await Default.find({}),
    default: async (parent, args) =>
      await Default.findById(args.id),
  },
  Mutation: {
    addUser: async (parent, args) => {
      const {
        userName,
        password,
        name,
        mail,
        mobile,
        userRoleId,
        changeLog,
        performedById,
        performedT,
      } = args;
      const newUser = new User({
        userName,
        password,
        name,
        mail,
        mobile,
        userRoleId,
        changeLog,
        performedById,
        performedT,
      });
      await newUser.save();
      return newUser;
    },
    updateUser: async (parent, args) => {
      const { id } = args;
      const updatedUser = await User.findByIdAndUpdate(id, args);
      if (!updatedUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return updatedUser;
    },
    deleteUser: async (parent, args) => {
      const { id } = args;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return deletedUser;
    },
    addUserRole: async (parent, args) => {
      const { name, access, performedById, performedT, changeLog } = args;
      const newUserRole = new UserRole({
        name,
        access,
        performedById,
        performedT,
      });
      await newUserRole.save();
      return newUserRole;
    },
    updateUserRole: async (parent, args) => {
      const { id } = args;
      const updatedUserRole = await UserRole.findByIdAndUpdate(id, args);
      if (!updatedUserRole) {
        throw new Error(`UserRole with ID ${id} not found`);
      }
      return updatedUserRole;
    },
    deleteUserRole: async (parent, args) => {
      const { id } = args;
      const deletedUserRole = await UserRole.findByIdAndDelete(id);
      if (!deletedUserRole) {
        throw new Error(`UserRole with ID ${id} not found`);
      }
      return deletedUserRole;
    },
    addCustomer: async (parent, args) => {
      const {
        name,
        mobile,
        mail,
        address,
        gstno,
        changeLog,
        performedById,
        performedT,
      } = args;
      const newCustomer = new Customer({
        name,
        mobile,
        mail,
        address,
        gstno,
        changeLog,
        performedById,
        performedT,
      });
      await newCustomer.save();
      return newCustomer;
    },
    updateCustomer: async (parent, args) => {
      const { id } = args;
      const updatedCustomer = await Customer.findByIdAndUpdate(id, args);
      if (!updatedCustomer) {
        throw new Error(`Customer with ID ${id} not found`);
      }
      return updatedCustomer;
    },
    deleteCustomer: async (parent, args) => {
      const { id } = args;
      const deletedCustomer = await Customer.findByIdAndDelete(id);
      if (!deletedCustomer) {
        throw new Error(`Customer with ID ${id} not found`);
      }
      return deletedCustomer;
    },
    addInvoice: async (parent, args) => {
      const {
        companyName,
        gstin,
        address1,
        address2,
        address3,
        mail,
        mobile,
        customerId,
        clientName,
        clientAddress,
        clientGstin,
        metaInvoiceNo,
        metaDate,
        items
      } = args;
      const newInvoice = new Invoice({
        companyName,
        gstin,
        address1,
        address2,
        address3,
        mail,
        mobile,
        customerId,
        clientName,
        clientAddress,
        clientGstin,
        metaInvoiceNo,
        metaDate,
        items
      });
      await newInvoice.save();
      return newInvoice;
    },
    updateInvoice: async (parent, args) => {
      const { id } = args;
      const updatedInvoice = await Invoice.findByIdAndUpdate(id, args);
      if (!updatedInvoice) {
        throw new Error(`Invoice with ID ${id} not found`);
      }
      return updatedInvoice;
    },
    deleteInvoice: async (parent, args) => {
      const { id } = args;
      const deletedInvoice = await Invoice.findByIdAndDelete(id);
      if (!deletedInvoice) {
        throw new Error(`Invoice with ID ${id} not found`);
      }
      return deletedInvoice;
    },
    addDefault: async (parent, args) => {
      const {
        companyName,
        gstin,
        address1,
        address2,
        address3,
        mail,
        mobile,
      } = args;
      const newDefault = new Default({
        companyName,
        gstin,
        address1,
        address2,
        address3,
        mail,
        mobile,
      });
      await newDefault.save();
      return newDefault;
    },
    updateDefault: async (parent, args) => {
      const { id } = args;
      const updatedDefault = await Default.findByIdAndUpdate(id, args);
      if (!updatedDefault) {
        throw new Error(`Default with ID ${id} not found`);
      }
      const newData = await Default.findById(id);
      return newData;
    },
    deleteDefault: async (parent, args) => {
      const { id } = args;
      const deletedDefault = await Default.findByIdAndDelete(id);
      if (!deletedDefault) {
        throw new Error(`Default with ID ${id} not found`);
      }
      return deletedDefault;
    },
  },
};

module.exports = { resolvers };
