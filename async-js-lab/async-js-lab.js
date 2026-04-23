const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const runLab = async () => {
  console.log('\n=== Step 1: Sync ===');
  console.log('A');
  console.log('B');
  console.log('C');

  await delay(50);

  console.log('\n=== Step 2: setTimeout (Macrotask) ===');
  console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  console.log('End');

  await delay(50);

  console.log('\n=== Step 3: Promise (Microtask) ===');
  console.log('Start');
  Promise.resolve().then(() => {
    console.log('Promise');
  });
  console.log('End');

  await delay(50);

  console.log('\n=== Step 4: Microtask vs Macrotask ===');
  console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  Promise.resolve().then(() => {
    console.log('Promise');
  });
  console.log('End');

  await delay(50);

  console.log('\n=== Step 5: Async/Await ===');
  async function test() {
    console.log('1');
    await Promise.resolve();
    console.log('2');
  }
  console.log('3');
  test();
  console.log('4');

  await delay(50);

  console.log('\n=== Step 6: Predict the Output ===');
  console.log('A');
  setTimeout(() => {
    console.log('B');
  }, 0);
  Promise.resolve().then(() => {
    console.log('C');
  });
  console.log('D');

  await delay(50);

  console.log('\n=== End of Lab ===');
};

runLab();
