package org.odinodin.spock.samples.foo

import spock.lang.Specification

class MonkeySpec extends Specification {


    def "there are room for 12 monkeys in a list"() {

        given: "an empty list"
        def list = []

        when: "12 monkeys are put in the list"

        12.times {
            list << "monkey"
        }

        then: "they actually fit in the list"
        list.size() == 12
    }


    def "monkeys love certain fruit"() {

        given: "a monkey"
        def monkey = new Monkey()

        expect: "it only likes certain fruit"
        monkey.likes(fruit) == monkeyLikes

        where:
        fruit    | monkeyLikes
        "banana" | true
        "apple"  | false
        "kiwi"   | true
    }
}


class Monkey {

    def likes = ["banana", "kiwi"]

    boolean likes(String fruit) {
        likes.contains(fruit)
    }
}
