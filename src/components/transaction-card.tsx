import { format } from "date-fns";
import { Calendar, CircleDollarSign } from "lucide-react";
import { type transactions } from "~/server/db/schema";

interface Props {
  transaction: typeof transactions.$inferSelect;
}

export default function TransactionCard({ transaction }: Props) {
  return (
    <li
      data-type={transaction.type}
      className="group flex items-center gap-4 py-4"
    >
      <CircleDollarSign
        strokeWidth={1.5}
        className="size-9 group-data-[type=expense]:text-red-600 group-data-[type=income]:text-green-600"
      />
      <div className="flex flex-1 flex-col gap-1">
        <h4 className="text-xl font-medium tracking-tighter">
          {transaction.title}
        </h4>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="hidden size-4 sm:inline-block" />
          <p className="text-sm">{format(transaction.date, "PPP")}</p>
        </div>
      </div>
      <p className="text-xl font-medium group-data-[type=expense]:text-red-600 group-data-[type=income]:text-green-600">
        {transaction.type === "expense" ? "-" : "+"}
        {transaction.amount} {transaction.currency}
      </p>
    </li>
  );
}
