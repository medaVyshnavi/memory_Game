const shuffleArray = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      const index = Math.floor(Math.random() * arr.length);
      temp = arr[arr.length - 1];
      arr[arr.length - 1] = arr[index];
      arr[index] = temp;
    }
    return arr;
  };

  export default shuffleArray