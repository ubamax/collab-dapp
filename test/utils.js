async function contractShouldThrow(args) {
  try {
    await args;
    assert(true);
  } catch (err) {
    return;
  }
  assert(false, 'No error thrown fro the contract');
}

async function expectEvent(promise, event) {
  try {
    let result = await promise;
    for (var i = 0; i < result.logs.length; i++) {
      var log = result.logs[i];
      if (log.event === event) {
        return; // End the function body if it found the event
      }
    }
  } catch (err) {
    assert(false, 'Exception thrown when not expected');
  }
  assert(false, 'Expected ' + event + ' event not fired');
}

module.exports = {
  contractShouldThrow,
  expectEvent
};
