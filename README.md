# UK Income Tax Calculator

This is a simple income tax calculator for UK residents. It calculates the income tax and national insurance contributions based on the income entered by the user. 

## Assumptions

For the purposes of this task, we have simplified the HMRC rules and allowances. As such, the following applies:

- Employees pay no tax or NI on the first £15,000 earned
- Employees pay 20% tax and 12% NI on earnings between £15,000 and £50,000
- Employees pay 40% tax and 2% NI on all earnings above £50,000

## How to run the application

The calculator can be accessed at [https://meek-pixie-c3ffee.netlify.app}. To use this calculator, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory in your terminal
3. Run `npm install` to install the necessary dependencies
4. Run `npm start` to start the development server
5. Open your web browser and navigate to `http://localhost:3000`

## How to use the application

1. Enter the income amount in the input field.
2. Click the "Calculate" button.
3. The application will display the calculated net pay, tax due, and national insurance due in the result area.

## How the application works

The application uses the `useState()` and `useRef()` hooks to manage state and get input from the user, respectively. The `lowerThresholdTaxNi()` function calculates the tax and national insurance due for incomes between £15,000 and £50,000. The `calculateIncome()` function calls this function and calculates the tax and national insurance due for incomes above £50,000. The application then displays the calculated results. If the user enters an invalid input or an income less than or equal to £15,000, the application will display an error message.





