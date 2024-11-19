import { JSONObject } from '@/types/definations';
import { useState, useEffect, useRef } from 'react';

type MultiSelectDropdownProps = {
    options: JSONObject[];
    placeholder?: string;
    onChange?: (selected: JSONObject[]) => void;
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
    options,
    placeholder = 'Select options...',
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<JSONObject[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (option: JSONObject) => {
        const alreadySelected = selectedOptions.find((o) => o._id === option._id);

        if (alreadySelected) {
            const updatedOptions = selectedOptions.filter((o) => o._id !== option._id);
            setSelectedOptions(updatedOptions);
            onChange?.(updatedOptions);
        } else {
            const updatedOptions = [...selectedOptions, option];
            setSelectedOptions(updatedOptions);
            onChange?.(updatedOptions);
        }
    };

    const removeSelectedItem = (option: JSONObject) => {
        const updatedOptions = selectedOptions.filter((o) => o._id !== option._id);
        setSelectedOptions(updatedOptions);
        onChange?.(updatedOptions);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block w-full" ref={dropdownRef}>
            {/* Floating Label */}
            <label
                className={`absolute left-2 px-1 transition-all duration-200 text-gray-500 bg-white rounded-lg ${
                    isOpen || selectedOptions.length > 0
                        ? 'text-sm -top-2'
                        : 'text-base top-2'
                }`}
            >
                {placeholder}
            </label>

            {/* Dropdown Button */}
            <div
                className={`border ${
                    isOpen || selectedOptions.length > 0
                        ? 'border-blue-500'
                        : 'border-gray-300'
                } bg-white rounded-md p-2 cursor-pointer flex justify-between items-center`}
                onClick={toggleDropdown}
            >
                <div className="flex flex-wrap gap-2 pt-2">
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map((option) => (
                            <span
                                key={`selected_${option._id}`}
                                className="bg-gray-600 text-white text-sm px-2 py-1 rounded-md flex items-center gap-2 hover:bg-[#FF5050]"
                            >
                                {option.name}
                                {/* Delete Icon */}
                                <svg
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent dropdown from toggling
                                        removeSelectedItem(option);
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 cursor-pointer text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        ))
                    ) : (
                        <span className="invisible">Placeholder</span> // Invisible text to maintain height
                    )}
                </div>
                {/* Dropdown Icon */}
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
                <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full max-h-64 overflow-y-auto shadow-lg">
                    {options.map((option) => (
                        <li
                            key={`option_${option._id}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOptionClick(option);
                            }}
                            className={`px-4 py-2 cursor-pointer ${
                                selectedOptions.find((o) => o._id === option._id)
                                    ? 'bg-blue-100'
                                    : 'hover:bg-gray-100'
                            }`}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
