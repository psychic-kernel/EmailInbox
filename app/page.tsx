import Image from "next/image";
import Header from "@/app/components/Header";
export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <section className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to NexMail</h1>
        <p className="text-lg">A simple email client built with Next.js</p>
        {/* <Image src="/mail.svg" width={200} height={200} alt="Mailbox" /> */}
      </section>
    </main>
  );
}
