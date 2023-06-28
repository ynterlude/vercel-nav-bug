import { Item, items } from "@/global";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps = (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const itemId = context.params!.id as string;
  return {
    props: {
      item: items.find((item) => item.id === itemId),
    },
  };
};

export default function ItemPage({ item }: { item: Item }) {
  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <h1>{item.name}</h1>
    </main>
  );
}
