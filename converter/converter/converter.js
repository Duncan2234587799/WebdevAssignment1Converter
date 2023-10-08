// Web Development - Group 9
// Assignment 1: Advanced JavaScript and Tailwind CSS
// Date: October/08/2023
// By: Paul Sholter, Andres Chacon, Guntas Singh, and Elvis Chizoba

document.addEventListener("DOMContentLoaded", function () {

    // Conversion function
    const converter = (fromUnit, toUnit) => {
        switch (`${fromUnit}->${toUnit}`) {
            case 'lb->kg':
                return values => Array.isArray(values) ? values.map(value => (value * 0.453592).toFixed(2)) : (values * 0.453592).toFixed(2);
            case 'kg->lb':
                return values => Array.isArray(values) ? values.map(value => (value / 0.453592).toFixed(2)) : (values / 0.453592).toFixed(2);
            case 'miles->km':
                return values => Array.isArray(values) ? values.map(value => (value * 1.60934).toFixed(2)): (values * 1.60934).toFixed(2);
            case 'km->miles':
                return values => Array.isArray(values) ? values.map(value => (value / 1.60934).toFixed(2)) :(values / 1.60934).toFixed(2);
            case 'C->F':
                return values => Array.isArray(values) ? values.map(value => ((value * 9 / 5) + 32).toFixed(2)): ((values * 9 / 5) + 32).toFixed(2);
            case 'F->C':
                return values => Array.isArray(values) ? values.map(value => ((value - 32) * 5 / 9).toFixed(2)): ((values - 32) * 5 / 9).toFixed(2);
            default:
                throw new Error("Invalid conversion units");
        }
    }

    // Event listeners for Tabs
    document.getElementById('weightTab').addEventListener('click', () => {
        showForm('weightForm');
    });
    document.getElementById('distanceTab').addEventListener('click', () => {
        showForm('distanceForm');
    });
    document.getElementById('temperatureTab').addEventListener('click', () => {
        showForm('temperatureForm');
    });

    // Function to show a form and hide others
    function showForm(formId) {
        ['weightForm', 'distanceForm', 'temperatureForm'].forEach(id => {
            document.getElementById(id).style.display = (id === formId) ? 'block' : 'none';
        });
    }

    // Event listener for all convert buttons
    document.querySelectorAll('.convertButton').forEach(button => {
        button.addEventListener('click', function () {
            const parentForm = button.parentElement.parentElement;
            const inputField = parentForm.querySelector('input');
            const selectField = parentForm.querySelector('select');
            const outputField = parentForm.querySelector('span');

            let inputValues = inputField.value.split(',').map(val => parseFloat(val.trim()));

            const conversion = converter(...selectField.value.split('->'));
            const convertedValues = conversion(inputValues);

            outputField.textContent = Array.isArray(convertedValues) ? convertedValues.join(', ') : convertedValues;
        });
    });

});

