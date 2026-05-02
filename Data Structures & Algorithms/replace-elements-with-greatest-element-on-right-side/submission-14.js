class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
    
      let ans = new Array(arr.length)

      let maiorElemento = -1
    //interação reversa pra evitar escaneamento desnecessário 
      for (let i = arr.length-1; i >= 0; i--){
        let temp = arr[i]
        arr[i] = maiorElemento

        maiorElemento = Math.max(maiorElemento, temp)
      }
      return arr
    }
}
