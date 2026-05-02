class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
    
        for(let i=0; i < arr.lenght; i++)
        {
            let maiorElemento = -1

            let arrayRestante = arr.splice(i - 1,arr.lenght)
           

            for (let j = i + 1; j < arrayRestante.lenght; j++){
                maiorElemento = Math.max(maiorElemento, arrayRestante[j])
            }
            arr[i] = maiorElemento
        }
        return arr
    }
}
