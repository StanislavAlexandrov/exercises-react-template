import { memo, FC } from 'react';
import dataArray from '../data/dataArray';
import shuffleArray from '../helpers/shuffleArray';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

type MyCounterProps = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    errors?: number;
    setErrors: React.Dispatch<React.SetStateAction<number>>;
    isFinished?: boolean;
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

const Answers: FC<MyCounterProps> = ({
    currentStep,
    setCurrentStep,
    errors,
    setErrors,
    isFinished,
    setIsFinished,
}) => {
    const shuffledArray = shuffleArray(dataArray[currentStep - 1].allAnswers);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (currentStep < dataArray.length) {
            (e.target as HTMLInputElement).id ===
            dataArray[currentStep - 1].answer
                ? setCurrentStep((x: number) => ++x)
                : setErrors((x: number) => ++x);
        } else {
            if (
                (e.target as HTMLInputElement).id ===
                dataArray[currentStep - 1].answer
            ) {
                setIsFinished(true);
                setCurrentStep(1);
            } else {
                setErrors((x: number) => ++x);
            }
        }
    };

    return (
        <div className=" grid gap-x-8 gap-y-4 m-8 ">
            {shuffledArray.map((answer) => (
                <motion.button
                    key={nanoid()}
                    id={answer}
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-sans sm:text-2xl rounded-lg border-solid border-2 p-2  text-center font-bold shadow-lg hover:shadow-2xl shadow-gray-300 bg-gray-200"
                >
                    {answer}
                </motion.button>
            ))}
        </div>
    );
};

export default memo(Answers);
