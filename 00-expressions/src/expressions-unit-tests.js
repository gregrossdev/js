let should = chai.should();

describe('Expressions', () => {
    describe("sumDouble()", () => {
        it("(1, 2) should equal 3", () => {
            sumDouble(1, 2).should.equal(3);
        });
        it("(3, 2) should equal 5", () => {
            sumDouble(3, 2).should.equal(5);
        });
        it("(2, 2) should equal 8", () => {
            sumDouble(2, 2).should.equal(8);
        });
    });
});