class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let registro = new Array()
        for ( let i = 0; i < operations.length; i++)
        {
            if(operations[i] == "+"){
                registro.push(Number(registro[registro.length - 1]) + registro[registro.length -2]);
                continue;
            }
            if(operations[i] == "C"){
                registro.pop()
                continue;
            }
            if(operations[i] == "D"){
                registro.push(Number(registro[registro.length - 1 ]) * 2);
                continue;
            }
           registro.push(Number(operations[i]));
        }
       
       return registro.reduce((acc,i)=> acc + i, 0);

    }
}   
