import Header from "./components/header";
import Entry from "./components/entry";
import data from "./data";
export default function App() {
  const entryele = data.map((entry) => <Entry key={entry.id} entry={entry} />);
  return (
    <>
      <Header />
      <main className="container">{entryele}</main>
    </>
  );
}
