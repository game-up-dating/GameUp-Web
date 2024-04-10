import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordianComponent() {
  return (
    <div className="flex justify-center items-center">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is GameUp</AccordionTrigger>
          <AccordionContent>
            Gameup is an Ai-assisted chatting app designed to enhance user’s
            “dating skills. It uses Ai-Generated suggestions based on user
            upload conversations screenshots and prefered “Flirtiness Level”
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is GameUp</AccordionTrigger>
          <AccordionContent>
            Gameup is an Ai-assisted chatting app designed to enhance user’s
            “dating skills. It uses Ai-Generated suggestions based on user
            upload conversations screenshots and prefered “Flirtiness Level”
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What is GameUp</AccordionTrigger>
          <AccordionContent>
            Gameup is an Ai-assisted chatting app designed to enhance user’s
            “dating skills. It uses Ai-Generated suggestions based on user
            upload conversations screenshots and prefered “Flirtiness Level”
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What is GameUp</AccordionTrigger>
          <AccordionContent>
            Gameup is an Ai-assisted chatting app designed to enhance user’s
            “dating skills. It uses Ai-Generated suggestions based on user
            upload conversations screenshots and prefered “Flirtiness Level”
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
