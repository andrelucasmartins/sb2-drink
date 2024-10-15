"use client";

interface FooterProps {
  title?: string;
}

import Image from 'next/image';
import Link from "next/link";
import { FaExpeditedssl, FaShieldHalved, FaWhatsapp } from "react-icons/fa6";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-primary py-10 w-full" {...props}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="xs:grid-cols-1 grid gap-8 md:gap-2 px-4 md:px-0 py-6 md:grid-cols-4 lg:grid-cols-4 lg:py-8 items-center justify-center sm:justify-between sm:items-start">
          <div className="min-w-full flex flex-col justify-center items-center">
            <Image
              src="/logo-branca-SB2-Drink.png"
              width={300}
              height={190}
              alt="Logo SB2 Drink"
              className="object-contain w-1/2 sm:w-1/4 md:w-1/3 mx-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:justify-start md:items-start md:gap-4">
            <h2 className="mb-6 text-xl md:text-sm font-semibold uppercase text-white dark:text-white">
              Contato
            </h2>
            <ul className="text-md text-white break-all">
              <li className="mb-4">
                <p className="flex flex-col justify-start items-center sm:justify-normal sm:items-baseline gap-2 ">
                  <b>Fale conosco pelo e-mail:</b>
                  sac@qgpowersuplementos.com.br <br />
                  <span className="flex flex-row gap-2">
                    <b>ou telefone:</b> (19) 99302-8888
                  </span>
                </p>
                <p className="flex flex-col justify-start items-start gap-2">
                  <b>Horário de atendimento:</b>
                  Segunda à Sexta-feira das 8h às 18hrs
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-baseline">
            <h2 className="mb-6 text-xl md:text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Precisa de ajuda?
            </h2>
            <ul className="font-medium text-gray-100">
              <li className="mb-4">
                <Link
                  type="button"
                  className="mb-2 flex w-fit flex-row items-center justify-center gap-2 rounded bg-gradient-to-r from-green-400 via-green-700 to-green-500  px-4 py-2 text-center  text-lg font-medium uppercase text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou você, gostaria de saber mais sobre o SB2 Turbo?"
                    )
                  }
                  scroll={false}
                  href="/#whatsapp"
                >
                  Whatsapp
                </Link>
              </li>

              <li className="sr-only mb-4">
                <a
                  href="#"
                  className="rounded-sm bg-gray-300 px-6 py-2 text-sm uppercase text-gray-100 ring-1 ring-gray-500 hover:cursor-default hover:underline"
                >
                  entre em contato
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Links Úteis
            </h2>
            <ul className="font-medium text-gray-100">
              <li>
                <Modal.UseTerms
                  list={ASSURANCE}
                  title="Garantia"
                  id="assurance"
                />
              </li>
              <li>
                <Modal.UseTerms
                  list={PRIVACY_POLICY}
                  title="Política de Privacidade"
                  id="privacy_politic"
                />
              </li>
              <li>
                <Modal.UseTerms list={TERMS} title="Termos de Uso" id="terms" />
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Site Seguro
            </h2>
            <ul className="text-sm font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <ul>
                  <li className="mb-2">
                    <button
                      type="button"
                      className="flex w-[260px] justify-center items-center gap-2 bg-white/30 px-8 py-1 text-base uppercase text-gray-50"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> Ambiente Seguro</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex w-[260px] justify-center items-center gap-2 bg-white/30 px-8 py-1 text-base uppercase text-gray-50"
                    >
                      <FaShieldHalved size={20} />
                      <span className="text-xs"> certificado ssl</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl flex-col gap-4  px-4 py-6 text-gray-50 md:flex items-center justify-center space-y-4 sm:space-y-0 md:items-baseline md:justify-normal">
          <p className=" text-xs">
            Copyright{" "}
            <a href="https://aedigi.com.br">&copy;AE Digi Solutions</a>. Todos
            os direitos reservados.
          </p>
          <p className="text-xs/8 text-gray-300">
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
            layout, aqui veículados são de propriedade exclusiva. É vedada
            qualquer reprodução, total ou parcial, de qualquer elemento de
            identidade, sem expressa autorização. A violação de qualquer direito
            mencionado implicará na responsabilização cível e criminal nos
            termos da Lei. Todas as imagens do site são meramente ilustrativas.
          </p>
          <p className="text-xs/8 text-gray-300">
            Atenção: SB2 não é medicamento e não contém o fármaco sibutramina e
            nenhum outro fármaco em sua composição. SB2 é um suplemento 100%
            natural. Os preços dos produtos estão sujeitos a alteração sem aviso
            prévio.
          </p>
        </div>
      </div>
      <Link
        type="button"
        className="fixed bottom-8 right-8 mb-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-300 p-4 text-center text-sm font-medium text-white hover:bg-gradient-to-br  focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
        onClick={() =>
          window.open(
            "https://wa.me/5519993028888?text=Ol%C3%A1!%20Vim%20do%20site%20do%20produto%20SB2%20TURBO%20e%20preciso%20de%20ajuda.%20"
          )
        }
        scroll={false}
        href="/#whatsapp"
      >
        <span className="sr-only">Whatsapp</span>
        <FaWhatsapp size={30} />
      </Link>
    </footer>
  );
}
