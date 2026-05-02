class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
    
        for(let i=0; i < arr.lenght; i++)
        {
            let maiorElemento = -1

            let arrayRestante = arr.splice(i,arr.lenght)
           

            for (let j = 0; j < arrayRestante.lenght; j++){
                maiorElemento = Math.max(maiorElemento, arrayRestante[j])
            }
            arr[i] = maiorElemento
        }
        return arr
    }
}
