var original = Promise.any;

test(require('../cjs'));

function test (any) {

  any([
    Promise.resolve(1)
  ]).then(value => {
    console.log(value);
    any([
      Promise.reject(2)
    ]).catch(error => {
      console.error(error);
    });

    if (original) {
      delete require.cache[require.resolve('../cjs')];
      Promise.any = original = void 0;
      test(require('../cjs'));
    }
  });

}
