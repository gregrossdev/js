let should = chai.should();

describe('Expressions', () => {
    describe('Numbers', () => {
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

        describe("diff21()", () => {
            it("(19) should equal 2", () => {
                diff21(19).should.equal(2);
            });
            it("(10) should equal 11", () => {
                diff21(10).should.equal(11);
            });
            it("(21) should equal 0", () => {
                diff21(21).should.equal(0);
            });
            it("(22) should equal 2", () => {
                diff21(22).should.equal(2);
            });
            it("(-10) should equal 31", () => {
                diff21(-10).should.equal(31);
            });
        });
    });

});