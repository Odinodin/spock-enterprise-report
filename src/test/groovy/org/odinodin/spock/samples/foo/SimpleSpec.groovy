package org.odinodin.spock.samples.foo

import spock.lang.Specification


class SimpleSpec extends Specification {


    def "some simple feature"() {
        given: "some given"

        def a = 2
        when: "some when"
        a = 4


        then: "the then"
        true
    }



    def "failing feature"() {
        expect: false
    }

    def "whatever feature"() {
        expect: false
    }




}