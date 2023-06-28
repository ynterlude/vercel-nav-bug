import Link from "next/link";
import { Item, items } from "@/global";

interface HomePageProps {
  items: Item[];
}

export const getServerSideProps = () => {
  return {
    props: {
      items: items,
    },
  };
};

export default function Home(props: HomePageProps) {
  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
