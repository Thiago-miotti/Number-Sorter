import { BubbleChatUserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Logo from "../assets/logo.svg";

export default function ExplanationText() {
  return (
    <div className="flex-1">
      <img src={Logo} alt="Logo numbers" />
      <div className="flex flex-col gap-3 mt-22.25">
        <p className="over bg-linear-to-r from-[#C7C9CC] from-0% to-[#3D3D3D] to-100% text-transparent bg-clip-text">
          Online - gratuito
        </p>
        <h1 className="title-lg text-content-primary max-w-130">
          Sorteador de números
        </h1>
      </div>
      <div className="flex flex-col gap-9 mt-9">
        <div className="flex items-start gap-2">
          <HugeiconsIcon
            icon={BubbleChatUserIcon}
            className="text-content-brand"
          />
          <div className="flex flex-col gap-1">
            <p className="paragraph-md text-content-brand">
              Como funciona o sorteador de números?
            </p>
            <p className="paragraph-sm text-content-secondary max-w-89.5">
              O sorteador utiliza um algoritmo de geração aleatória para criar
              números dentro do intervalo especificado pelo usuário.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 mt-9">
        <div className="flex items-start gap-2">
          <HugeiconsIcon
            icon={BubbleChatUserIcon}
            className="text-content-brand"
          />
          <div className="flex flex-col gap-1">
            <p className="paragraph-md text-content-brand">
              Posso escolher o intervalo dos números?
            </p>
            <p className="paragraph-sm text-content-secondary max-w-89.5">
              Sim, você pode definir os valores mínimo e máximo para o intervalo
              dos números sorteados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
