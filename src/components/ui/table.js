import React from "react";

export const Table = ({ className = "", children, ...props }) => (
  <div className={`w-full overflow-auto ${className}`} {...props}>
    <table className="w-full caption-bottom text-sm border-collapse">{children}</table>
  </div>
);

export const TableHeader = ({ className = "", children, ...props }) => (
  <thead className={`${className}`} {...props}>
    {children}
  </thead>
);

export const TableBody = ({ className = "", children, ...props }) => (
  <tbody className={`${className}`} {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ className = "", children, ...props }) => (
  <tr className={`${className}`} {...props}>
    {children}
  </tr>
);

export const TableHead = ({ className = "", children, ...props }) => (
  <th
    className={`border border-border bg-muted px-4 py-2 text-left font-semibold text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </th>
);

export const TableCell = ({ className = "", children, ...props }) => (
  <td className={`border border-border px-4 py-2 align-middle ${className}`} {...props}>
    {children}
  </td>
);
