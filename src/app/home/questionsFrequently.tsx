import { QUESTIONS1, QUESTIONS2 } from "@/data/questions";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { FaSquareFull } from "react-icons/fa6";

interface QuestionsFrequentlyProps {
  className?: string
}


export const QuestionsFrequently = (props: QuestionsFrequentlyProps) => {
  return (
    <section className=" py-16" {...props}>
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-0">
        <h2 className="px-2 text-center text-base font-semibold ">
          ALGUMA DÚVIDA? VEJA ABAIXO OU NOS MANDE UMA MENSAGEM!
        </h2>
        <h3 className="text-center  text-4xl font-extrabold pb-10">
          Dúvidas Frequentes:
        </h3>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid grid-cols-1 w-full items-start gap-4">
            {QUESTIONS1?.map((question) => (
              <Collapsible key={question.id}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-b-md bg-primary p-6">
                  <h2 className="text-sm font-semibold text-white">
                    {question.question}
                  </h2>
                  <div>
                    <FaSquareFull className="size-4 text-white" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mx-4 space-y-2 has-[data-state=closed]:animate-accordion-up has-[data-state=open]:animate-accordion-down">
                  <div className="rounded-ee-md border bg-white px-4 py-3 font-mono text-sm ">
                    {question.answer}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="grid grid-cols-1 w-full items-start gap-4">
            {QUESTIONS2?.map((question) => (
              <Collapsible key={question.id}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-b-md bg-primary p-6">
                  <h2 className="text-sm font-semibold text-white">
                    {question.question}
                  </h2>
                  <div>
                    <FaSquareFull className="size-4 text-white" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mx-4 space-y-2 has-[data-state=closed]:animate-accordion-up has-[data-state=open]:animate-accordion-down">
                  <div className="rounded-ee-md border bg-white px-4 py-3 font-mono text-sm ">
                    {question.answer}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
