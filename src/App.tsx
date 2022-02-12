import './App.css';
import { useState } from 'react';
import Questions from './components/questions';
import Answers from './components/answers';
import dataArray from './data/dataArray';
import { motion } from 'framer-motion';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleStart = () => {
        setIsFinished(false);
        setErrors(0);
        setCurrentStep(1);
    };

    return (
        <div className="App flex justify-center items-center  min-h-screen ">
            <div className="text-center">
                {!isFinished ? (
                    <h1 className="  text-2xl">
                        Current step: {currentStep} of {dataArray.length}{' '}
                    </h1>
                ) : null}
                <motion.h1
                    className=" text-red-500 text-3xl"
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Errors: {errors}
                </motion.h1>

                {!isFinished ? (
                    <>
                        <Questions currentStep={currentStep} />

                        <div className="flex justify-center ">
                            <Answers
                                currentStep={currentStep}
                                setCurrentStep={setCurrentStep}
                                errors={errors}
                                setErrors={setErrors}
                                isFinished={isFinished}
                                setIsFinished={setIsFinished}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <motion.h2 className="text-4xl m-4 font-bold sm:text-4xl  red-400">
                            Finished!
                        </motion.h2>
                        <motion.button
                            onClick={handleStart}
                            className="text-3xl"
                        >
                            Start again
                        </motion.button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
