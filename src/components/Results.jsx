import {calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({userInput}) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment =
        resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    console.log(resultsData);
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest</th>
                <th>Total interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            { resultsData.map(yearData => {
                const totalInterest =
                    yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{totalInterest}</td>
                    <td>{totalAmountInvested}</td>
                </tr>
            })}

            </tbody>
        </table>
    )
}
