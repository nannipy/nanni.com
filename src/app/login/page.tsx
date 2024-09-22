import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4 text-center text-white">Accedi</h1>
        <LoginForm />
      </div>
    </div>
  );
}