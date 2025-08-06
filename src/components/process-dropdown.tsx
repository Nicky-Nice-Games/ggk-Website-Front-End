import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

interface ProcessDropdownProps {
  value: string;
  trigger: ReactElement;
  content: ReactElement;
}

const ProcessDropdown = ({ value, trigger, content }: ProcessDropdownProps) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 768 });

  return (
    <Accordion
      type="single"
      collapsible={isMobileDevice}
      defaultValue={isMobileDevice ? "" : value}
    >
      <AccordionItem value={value}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProcessDropdown;
