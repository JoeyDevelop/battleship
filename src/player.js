function createPlayer(name) {
  return {
    name: name,
    //computer methods
    makeRandomAttack() {
      const m = Math.floor(Math.random() * 10 + 1);
      console.log(m);
      return m;
    },
  };
}

export default createPlayer;
