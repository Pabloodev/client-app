import LoginForm from "./ui/components/loginForm";

export default function Page() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-black-800">
      <div className="flex flex-col items-center">
        <img src="/logo.ico" alt="Athon Logo" className="w-30" />

        <h1 className="text-white mb-8 text-lg font-semibold">
          Bem vindo a Athon Networks
        </h1>

        <LoginForm />
      </div>
    </main>
  );
}
