import Button from 'components/elements/Button';
import Input from 'components/elements/Input';
import Range from 'components/elements/Range';
import Select from 'components/elements/Select';
import TextArea from 'components/elements/TextArea';
import LeftLabeledElement from 'components/LeftLabeledElement';
import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useCopyToClipboard, useDebounce } from 'react-use';
import { numberRange } from 'utils/helpers';

const roundsOptions = numberRange(2, 10, 1).map((n) => ({ value: n, text: n }));
const drawTimeOptions = numberRange(30, 180, 10).map((n) => ({ value: n, text: n }));
const wordLanguageOptions = [
    { value: 'assamese', text: 'Assamese' },
    { value: 'bengali', text: 'Bengali' },
    { value: 'english', text: 'English' },
    { value: 'gujarati', text: 'Gujarati' },
    { value: 'hindi', text: 'Hindi' },
    { value: 'kannada', text: 'Kannada' },
    { value: 'malayalam', text: 'Malayalam' },
    { value: 'nepali', text: 'Nepali' },
    { value: 'oriya', text: 'Oriya' },
    { value: 'punjabi', text: 'Punjabi' },
    { value: 'tamil', text: 'Tamil' },
    { value: 'telugu', text: 'Telugu' },
];

function CreateRoom() {
    const rounds = useInput(roundsOptions[0].value);
    const drawTime = useInput(drawTimeOptions[1].value);
    const wordLanguage = useInput(wordLanguageOptions[2].value);
    const customWords = useInput('');
    const customWordProbability = useInput(50);

    const [link, setLink] = useState('https://localhost:3000/abcdef');
    const [, copyToClipboard] = useCopyToClipboard();

    return (
        <div className="container">
            <div className="flex w-full">
                <div className="w-1/2 px-4">
                    <div className="w-full pb-4 px-4 shadow shadow-gray-500">
                        <h1 className="font-medium text-5xl mb-12 text-center">Settings</h1>
                        <LeftLabeledElement className="mt-4" label="Rounds">
                            <Select value={rounds.value} onChange={rounds.onChange} options={roundsOptions} />
                        </LeftLabeledElement>
                        <LeftLabeledElement className="mt-4" label="Draw Time (s)">
                            <Select value={drawTime.value} onChange={drawTime.onChange} options={drawTimeOptions} />
                        </LeftLabeledElement>
                        <LeftLabeledElement className="mt-4" label="Word Language">
                            <Select
                                value={wordLanguage.value}
                                onChange={wordLanguage.onChange}
                                options={wordLanguageOptions}
                            />
                        </LeftLabeledElement>
                        <LeftLabeledElement className="mt-4" label="Custom Words">
                            <TextArea
                                className="h-48 resize-none"
                                placeholder="word 1&#10;word 2&#10;word 3"
                                value={customWords.value}
                                onChange={customWords.onChange}
                            />
                        </LeftLabeledElement>
                        <LeftLabeledElement className="mt-4" label="Custom Word Probab">
                            <Range
                                min="0"
                                max="100"
                                step="1"
                                value={customWordProbability.value}
                                onChange={customWordProbability.onChange}
                            />
                            <p className="ml-1">{customWordProbability.value.toString().padStart(3, '_')}%</p>
                        </LeftLabeledElement>
                        <Button className="mt-8 w-full">Start Game</Button>
                    </div>
                </div>

                <div className="w-1/2 px-4">
                    <div className="w-full pb-4 px-4 shadow shadow-gray-500">
                        <h1 className="font-medium text-5xl mb-12 text-center">Participants</h1>
                    </div>
                </div>
            </div>

            <div className="w-full m-8">
                <div className="flex items-center">
                    <Input className="text-center" readOnly value={link} />
                    <Button className="flex-none ml-4" onClick={() => copyToClipboard(link)}>
                        Copy To Clipboard
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;
