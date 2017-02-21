function getAnimals(fetch, id) {
    return fetch('http://hipsterjesus.com/api/' + id)
    //flaten promises
        .then(response => response.json())
        .then(response => response.results[0]);
}
mocha.setup('bdd');
//destructur required obj from obj
const {expect, assert}= chai;
describe('getAnimals', () => {
    it('calls fetch with the correct uri', () => {
//           const fakeFetch= url =>{
//            assert(
//              url ===
//              'http://hipsterjesus.com/api/'
//            )
//            return new Promise(function(resolve){
//           })
//           }
        //  getAnimals(fakeFetch,123);
    });
//async call pass done
    it('parses the response of fetch correctly', (done) => {
        const fakeFetch = url => {
            //mochking promise
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {name: 'name1'}
                    ]
                })
            })
        };
//dependency injection
        getAnimals(fakeFetch, 12345)
            .then(result => {
                assert(result.name === 'name1');
                done();
            })
    })
});
mocha.run();

