import MainContainer from "~/components/containers/main-container";
import CreateTransactionForm from "~/components/forms/create-transaction-form";
import TransactionCard from "~/components/transaction-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default async function DashboardPage() {
  return (
    <MainContainer as="main">
      <CreateTransactionForm />
      <section className="mt-12">
        <header className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            All Transactions
          </h2>
          <Select aria-label="Order by">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Order by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="date">By Date</SelectItem>
                <SelectItem value="amount">By Amount</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </header>
        <ul className="mt-4 divide-y">
          <TransactionCard
            transaction={{
              id: "1",
              userId: "1",
              type: "expense",
              title: "Buy groceries",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "2",
              userId: "1",
              type: "income",
              title: "Work payment",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "1",
              userId: "1",
              type: "expense",
              title: "Buy groceries",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "1",
              userId: "1",
              type: "expense",
              title: "Buy groceries",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "2",
              userId: "1",
              type: "income",
              title: "Work payment",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "2",
              userId: "1",
              type: "income",
              title: "Work payment",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
          <TransactionCard
            transaction={{
              id: "3",
              userId: "1",
              type: "expense",
              title: "Buy groceries",
              amount: 100,
              currency: "UYU",
              date: new Date(),
              description: "I go to the store to buy groceries and ...",
            }}
          />
        </ul>
      </section>
      <footer className="mt-12"></footer>
    </MainContainer>
  );
}
