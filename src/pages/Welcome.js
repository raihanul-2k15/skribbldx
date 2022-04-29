import Button from 'components/elements/Button';
import Input from 'components/elements/Input';
import Select from 'components/elements/Select';
import LeftLabeledElement from 'components/LeftLabeledElement';
import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useDebounce } from 'react-use';

const generateAvatarUrl = (style, seed, bgColor) => {
    return `https://avatars.dicebear.com/api/${style}/${seed}.svg?background=${encodeURIComponent(bgColor)}`;
};

const avatarStyles = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'human', text: 'Human' },
    { value: 'identicon', text: 'Identicon' },
    { value: 'initials', text: 'Initials' },
    { value: 'bottts', text: 'Bottts' },
    { value: 'avataaars', text: 'Avataaars' },
    { value: 'jdenticon', text: 'Jdenticon' },
    { value: 'gridy', text: 'Gridy' },
    { value: 'micah', text: 'Micah' },
];

const avatarBgColors = [
    { value: '#000000', text: 'Dark' },
    { value: '#ff0000', text: 'Red' },
    { value: '#00ff00', text: 'Green' },
    { value: '#0000ff', text: 'Blue' },
    { value: '#ffffff', text: 'Light' },
];

function Welcome() {
    const name = useInput('');
    const avatarStyle = useInput(avatarStyles[0].value);
    const avatarBgColor = useInput(avatarBgColors[0].value);

    const [avatarUrl, setAvatarUrl] = useState('');

    useDebounce(
        () => {
            setAvatarUrl(
                generateAvatarUrl(avatarStyle.value, name.hasValue ? name.value : 'random', avatarBgColor.value)
            );
            console.log(Math.random());
        },
        500,
        [name.value, avatarStyle.value, avatarBgColor.value]
    );

    return (
        <div className="container">
            <div className="w-1/2 mx-auto p-4 shadow shadow-gray-500">
                <Input value={name.value} onChange={name.onChange} placeholder="Name" />
                <div className="flex mt-4">
                    <div className="w-1/2 p-4">
                        <img className="w-full object-contain" src={avatarUrl} alt="Avatar" />
                    </div>
                    <div className="w-1/2">
                        <LeftLabeledElement className="mt-4" label="Style">
                            <Select value={avatarStyle.value} onChange={avatarStyle.onChange} options={avatarStyles} />
                        </LeftLabeledElement>
                        <LeftLabeledElement className="mt-4" label="BG Color">
                            <Select
                                value={avatarBgColor.value}
                                onChange={avatarBgColor.onChange}
                                options={avatarBgColors}
                            />
                        </LeftLabeledElement>
                    </div>
                </div>
                <Button className="mt-4 w-full">Create Private Room</Button>
            </div>
        </div>
    );
}

export default Welcome;
