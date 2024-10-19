import {estoniaCodeGenerator, latviaCodeGenerator, lithuaniaCodeGenerator} from "../src/idGenerator";

describe('tests to verify unique Estonian code', () => {

    test('Verify that generated unique Estonian code starts with prefix EST-', () => {
        const generatedCode = estoniaCodeGenerator();
        expect(generatedCode.startsWith('EST-')).toBe(true);
    });
    test('Verify that generated unique Estonian code has 8 symbols', () => {
        const generatedCode = estoniaCodeGenerator();
        expect(generatedCode.length).toBe(8);
    });
    test('Verify that generated unique Estonian code has format EST-0000', () => {
        const generatedCode = estoniaCodeGenerator();
        expect(/EST-\d{4}/.test(generatedCode)).toBe(true)
    });

})

describe('tests to verify unique Latvian code', () => {

    test('Verify that generated unique Latvian code starts with prefix LVA-', () => {
        const generatedCode = latviaCodeGenerator();
        expect(generatedCode.startsWith('LVA-')).toBe(true);
    });
    test('Verify that generated unique Latvian code has 8 symbols', () => {
        const generatedCode = latviaCodeGenerator();
        expect(generatedCode.length).toBe(8);
    });
    test('Verify that generated unique Latvian code has format LVA-0000', () => {
        const generatedCode = latviaCodeGenerator();
        expect(/LVA-\d{4}/.test(generatedCode)).toBe(true)
    });

})

describe('tests to verify unique Lithuanian code', () => {

    test('Verify that generated unique Lithuanian code starts with prefix LTU-', () => {
        const generatedCode = lithuaniaCodeGenerator();
        expect(generatedCode.startsWith('LTU-')).toBe(true);
    });
    test('Verify that generated unique Lithuanian code has 8 symbols', () => {
        const generatedCode = lithuaniaCodeGenerator();
        expect(generatedCode.length).toBe(8);
    });
    test('Verify that generated unique Lithuanian code has format LTU-0000', () => {
        const generatedCode = lithuaniaCodeGenerator();
        expect(/LTU-\d{4}/.test(generatedCode)).toBe(true)
    });

})