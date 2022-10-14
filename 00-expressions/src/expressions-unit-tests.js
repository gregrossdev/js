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

        describe("intMax()", () => {
            it("(1, 2, 3) should equal 3", () => {
                intMax(1, 2, 3).should.equal(3);
            });
            it("(1, 3, 2) should equal 3", () => {
                intMax(1, 3, 2).should.equal(3);
            });
            it("(3, 2, 1) should equal 3", () => {
                intMax(3, 2, 1).should.equal(3);
            });
        });

        describe("max1020()", () => {
            it("(11, 19) should equal 19", () => {
                max1020(11, 19).should.equal(19);
            });
            it("(19, 11) should equal 19", () => {
                max1020(19, 11).should.equal(19);
            });
            it("(11, 9) should equal 11", () => {
                max1020(11, 9).should.equal(11);
            });
        });

        describe("dateFashion()", () => {
            it("(5, 10) should equal 2", () => {
                dateFashion(5, 10).should.equal(2);
            });
            it("(5, 2) should equal 0", () => {
                dateFashion(5, 2).should.equal(0);
            });
            it("(5, 5) should equal 1", () => {
                dateFashion(5, 5).should.equal(1);
            });
        });

        describe("sortaSum()", () => {
            it("(3, 4) should equal 7", () => {
                sortaSum(3, 4).should.equal(7);
            });
            it("(9, 4) should equal 20", () => {
                sortaSum(9, 4).should.equal(20);
            });
            it("(10, 11) should equal 21", () => {
                sortaSum(10, 11).should.equal(21);
            });
        });

        describe("teenSum()", () => {
            it("(3, 4) should equal 7", () => {
                teenSum(3, 4).should.equal(7);
            });
            it("(10, 13) should equal 19", () => {
                teenSum(10, 13).should.equal(19);
            });
            it("(13, 2) should equal 19", () => {
                teenSum(13, 2).should.equal(19);
            });
        });
    });

});