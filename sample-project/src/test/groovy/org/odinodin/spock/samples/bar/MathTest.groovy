package org.odinodin.spock.samples.bar

import spock.lang.Specification


class MathTest extends Specification {


    def "maximum of two numbers"() {
        expect: "math to actually work"
        Math.max(1, 3) == 3
        Math.max(7, 4) == 7
        Math.max(0, 0) == 0
    }


    def "improved maximum of two numbers "() {

        expect: "math still works"
        Math.max(a, b) == c

        where:
        a << [1, 7, 0]
        b << [3, 4, 0]
        c << [3, 7, 0]
    }


    def "with table maximum of two numbers" () {

        expect:
        Math.max(a, b) == c

        where:
        a | b | c
        1 | 3 | 3
        7 | 4 | 7
        0 | 0 | 0
    }


    def "failing test"() {
        expect: "i fail"
        Math.max(0, 2) == 0
    }
}