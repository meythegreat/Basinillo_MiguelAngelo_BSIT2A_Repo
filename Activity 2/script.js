function checkVotingEligibility(age, country) {
    if (country === "USA" && age >= 18) {
        return "Eligible to vote in USA";
    } else if (country === "Canada" &&  age >= 19) {
        return "Eligible to vote in Canada";
    } else {
        return "Not eligible to vote"
    }
}

// Examples:
console.log(checkVotingEligibility (20, "USA"));
console.log(checkVotingEligibility (17, "Canada"));
// console.log(checkVotingEligibility (16, "USA"));
// console.log(checkVotingEligibility (20, "Canada"));

/* Code to Pseudocode
1. Start function
2. Create function named "checkVotingEligibility and add parameters named age and country"
3. If country is equals to USA and the age is greater than or equal to 18:
    3.1.  Return "Eligible to vote in USA"
4. Then country is equals to Canada and the age is greater than or equal to 19: 
    4.1. Return "Eligible to vote in Canada"
5. Else: (If age is greater than or equal to 18 for USA and 19 in Canada)
    5.1.  Return "Not eligible to vote"
6. End function
*/