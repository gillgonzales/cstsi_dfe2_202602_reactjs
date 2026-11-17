import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="relative z-[1] w-[360px] max-w-[360px] bg-white p-[34px] shadow-[0_0_2px_0_rgba(0,0,0,0.1)]">
        <h1 className="mb-4 text-center text-[28px] text-blue-800"> Página não Encontrada!!</h1>
        <p className="mt-[15px] text-center text-base text-[#d35151]">
          Essa rota não existe ou o parâmetro enviado é inválido
        </p>
        <hr className="my-4 h-px border-0 bg-[#b3b3b3]" />
        <Link className="text-blue-800 no-underline" to="/"> Página Inicial!!!</Link>
      </div>
    </div>
  );
}