export const mockRolesTable = [
  {
    entity: "Users",
    key: "user_permissions",
    read: true,
    write: false,
    update: true,
    deleteKey: false,
  },
  {
    entity: "Products",
    key: "product_permissions",
    read: false,
    write: true,
    update: false,
    deleteKey: true,
  },
  {
    entity: "Orders",
    key: "order_permissions",
    read: true,
    write: true,
    update: true,
    deleteKey: false,
  },
  {
    entity: "Invoices",
    key: "invoice_permissions",
    read: true,
    write: false,
    update: false,
    deleteKey: false,
  },
];
