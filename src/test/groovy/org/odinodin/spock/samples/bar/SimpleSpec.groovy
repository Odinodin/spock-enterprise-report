package org.odinodin.spock.samples.bar

import spock.lang.Specification


class SimpleSpec extends Specification {


    def "some simple feature"() {
        given: "some given"

        def a = 2

        and: "more given"
        def b = 3

        when: "some when"
        a = 4

        and: "more when"
        a = 5

        then: "the then"
        true

        and: "more then"
        true

        and: "even more then"
        true
    }



    def "failing feature"() {
        expect: false
    }

    def "whatever feature"() {
        expect: false
    }




}