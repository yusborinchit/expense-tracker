import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Tracker | My Dashboard",
};

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Readonly<Props>) {
  return children;
}
