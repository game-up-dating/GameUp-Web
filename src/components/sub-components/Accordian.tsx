import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionComponent() {
  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="accordion-trigger">
              What is GameUp?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <p>
                Gameup is an AI-assisted chatting app designed to enhance user's
                "dating skills". It uses AI-generated suggestions based on
                user-uploaded conversations screenshots and preferred
                "Flirtiness Level".
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="accordion-trigger">
              How does GameUp work?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <p>
                GameUp uses a combination of machine learning and generative AI
                to analyze your responses and generate suggestions. You simply
                upload a screenshot of your conversation, and the virtual dating
                assistant will evaluate your responses for ‘game’ or
                ‘flirtiness.’ The flirtiness level is given as a percentage –
                aim for a score of 80% or higher.
              </p>
              <p>
                You will also receive several recommendations for what to say
                next that match the same tone and speaking style as the rest of
                the conversation. You select the response that feels most
                natural. Then, copy, paste, and wait for a response.
              </p>
              <p>
                Because GameUp mirrors your previous messages, responses never
                feel canned or generic. It’s authentically you. That means the
                suggestions are suitable for any individual, whether you’re
                speaking to a bookworm or party animal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="accordion-trigger">
              Can GameUp help me if I’m new to online dating?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <p>
                Absolutely! GameUp works for everyone – whether you’re a dating
                novice or a rizz master, you’ll learn new responses, leveling up
                your flirtiness with AI-powered chat coaching.
              </p>
              <p>
                Even dating pros need a little help once in a while. Maybe
                you’ve moved to a new area and are struggling to connect with
                the local culture. Maybe you like the look of someone, but you
                find it difficult to match their energy. Or maybe you just want
                to test it out and get some helpful tips to take your game to
                the next level.
              </p>
              <p>
                Whether you’re looking to spark interest, inject life into a
                stale conversation, or deepen existing bonds, GameUp is the
                obvious solution. Personalized AI dating coaching on demand.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="accordion-trigger">
              What dating apps is GameUp compatible with?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <p>
                GameUp doesn’t work directly with a dating app. Instead, you
                take a quick screenshot of the conversation and upload it to
                GameUp. That means GameUp is compatible with all dating apps.
                Whether you’re after a Bumble or Tinder assistant, GameUp’s got
                your back.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="accordion-trigger">
              What kind of feedback will I receive from GameUp?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <p>GameUp provides two kinds of feedback:</p>
              <ol>
                <li>
                  Game or Flirtiness Score. Expressed as a percentage, it
                  provides an assessment of your level of game. Think of it as a
                  rizz rater – analyzing your previous responses to see how
                  engaging, fun, and date-worthy they are.
                </li>
                <li>
                  Suggested Responses. Following on from the previous responses,
                  the AI generates three potential messages you could send next.
                  You can then copy and paste the response you like best and
                  post it in the chat.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
