import MainContainer from "~/components/containers/main-container";
import NewTransactionForm from "~/components/forms/new-transaction-form";

export default async function DashboardPage() {
  return (
    <MainContainer as="main">
      <NewTransactionForm />
    </MainContainer>
  );
}
