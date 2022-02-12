import dataArray from '../data/dataArray';
import { FC } from 'react';

interface Props {
    currentStep: number;
}

const Questions: FC<Props> = ({ currentStep }) => {
    return <h2 className="text-4xl ">{dataArray[currentStep - 1].sentence}</h2>;
};

export default Questions;
