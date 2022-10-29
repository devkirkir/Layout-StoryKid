const phoneValid = (inputSelector) => {
    const input = document.querySelector(inputSelector);

    function getValue(input) {
        return input.value.replace(/\D/g, "");
    }

    function onPhoneChange(e) {
        let inputValue = getValue(input),
            formattedValue = "";

        if (!inputValue) {
            return (input.value = "");
        }

        if (input.value.length != input.selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
            formattedValue += "+7";

            if (inputValue.length > 1) {
                formattedValue += ` (${inputValue.substring(1, 4)}`;
            }
            if (inputValue.length >= 5) {
                formattedValue += `) ${inputValue.substring(4, 7)}`;
            }
            if (inputValue.length >= 8) {
                formattedValue += `-${inputValue.substring(7, 9)}`;
            }
            if (inputValue.length >= 10) {
                formattedValue += `-${inputValue.substring(9, 11)}`;
            }
        } else {
            formattedValue = `+${inputValue}`;
        }

        input.value = formattedValue;
    }

    input.addEventListener("input", onPhoneChange);
};

export default phoneValid;
