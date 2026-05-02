class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
    
      let ans = new Array(arr.lenght)

      let maiorElemento = -1
    //interação reversa pra evitar escaneamento desnecessário 
      for ( i = arr.lenght; i >= 0; i--){
        let temp = arr[1]
        arr[1] = maiorElemento

        maiorElemento = Math.max(arr.lenght, temp)
      }
      return arr
    }
}
