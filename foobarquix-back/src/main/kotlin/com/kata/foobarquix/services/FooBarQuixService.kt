package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var convertedNumber: String = ""

        if (inputNumber.isDivisibleBy(3)) {
            convertedNumber += "Foo"
        }
        if (inputNumber.isDivisibleBy(5)) {
            convertedNumber += "Bar"
        }

        val tokenList = mutableListOf<Pair<Int, String>>()
        inputNumber.countTokens(3, tokenList)
        inputNumber.countTokens(5, tokenList)
        inputNumber.countTokens(7, tokenList)
        tokenList.sortBy { item -> item.first }

        for (item in tokenList) {
            when (item.second) {
                "3" -> convertedNumber += "Foo"
                "5" -> convertedNumber += "Bar"
                "7" -> convertedNumber += "Quix"
            }
        }

        return if (!"".equals(convertedNumber)) convertedNumber else inputNumber.toString();
    }

    private fun Int.isDivisibleBy(diviseur: Int): Boolean {
        return diviseur != 0 && (this % diviseur == 0);
    }

    private fun Int.contains(token: Int): Boolean {
        return this.toString().contains(token.toString())
    }

    private fun Int.countTokens(pattern: Int, liste: MutableList<Pair<Int, String>>) {
        val iMin = 0
        val iMax = this.toString().length
        val size = pattern.toString().length


        for (i in iMin..iMax) {
            if (i + size <= iMax) {
                val token = this.toString().substring(i, i + size)
                if (pattern.toString().equals(token)) {
                    liste.add(Pair(i, pattern.toString()))
                }
            }
        }
    }


}