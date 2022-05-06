import { CloseButton } from "../CloseButton";
import { useState } from "react";


import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStap } from "./Steps/FeedBackSuccessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem balão'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedback, setFeedback] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function hadleRestartFeedback() {
        setFeedbackSent(false)
        setFeedback(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedBackSuccessStap onFeedbackRestartRequested={hadleRestartFeedback} />
            ) : (
                <>
                    {!feedback ? (
                        <FeedBackTypeStep onFeedbackTypeChanged={setFeedback} />
                    ) : (
                        <FeedBackContentStep
                            onFeedbackSent={() => setFeedbackSent(true)}
                            feedbacktype={feedback}
                            onFeedbackRestartRequested={hadleRestartFeedback}
                        ></FeedBackContentStep>
                    )}
                </>
            )}


            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>
            </footer>

        </div >
    )
}