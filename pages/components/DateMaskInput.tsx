import React, { useRef, useEffect } from 'react';
import IMask from 'imask';

interface DateMaskInputProps {
    minDate: Date;
    maxDate: Date;
    onDateChange: (day: string, month: string, year: string) => void;
}

const DateMaskInput: React.FC<DateMaskInputProps> = ({ minDate, maxDate, onDateChange }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            const dateMask = IMask(inputRef.current, {
                mask: Date,
                min: minDate,
                max: maxDate,
                lazy: false,
                autofix: true,
                blocks: {
                    d: {mask: IMask.MaskedRange, placeholderChar: 'д', from: 1, to: 31, maxLength: 2},
                    m: {mask: IMask.MaskedRange, placeholderChar: 'м', from: 1, to: 12, maxLength: 2},
                    Y: {mask: IMask.MaskedRange, placeholderChar: 'р', from: 1900, to: 2100, minLength: 4, maxLength: 4}
                }
            });

            const handleDateChange = () => {
                const value = dateMask.value;
                const parts = value.split('.');
                if (parts.length === 3) {
                    const day = parseInt(parts[0], 10);
                    const month = parseInt(parts[1], 10);
                    const year = parseInt(parts[2], 10);

                    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                        onDateChange(day.toString(), month.toString(), year.toString());
                    }
                }
            };

            dateMask.on('accept', handleDateChange);

            return () => {
                dateMask.destroy();
            };
        }
    }, [minDate, maxDate, onDateChange]);

    return (
        <div>
            <input className=" input input-bordered w-full max-w-xs text-xl user-form mb-3 p-1"  ref={inputRef} type="text"  />
        </div>
    );
};

export default DateMaskInput;
