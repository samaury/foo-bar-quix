package com.kata.foobarquix

import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class FooBarQuixApplicationTests {

    private val fooBarQuixService = FooBarQuixService()

    @Test
    fun contextLoads() {
    }

    @Test
    fun convertNumber_1() {
        Assertions.assertEquals(
            "1",
            fooBarQuixService.convertNumber(1)
        )
    }

    @Test
    fun convertNumber_5() {
        Assertions.assertEquals(
            "BarBar",
            fooBarQuixService.convertNumber(5)
        )
    }

    @Test
    fun convertNumber_3() {
        Assertions.assertEquals(
            "FooFoo",
            fooBarQuixService.convertNumber(3)
        )
    }


    @Test
    fun convertNumber_7() {
        Assertions.assertEquals(
            "Quix",
            fooBarQuixService.convertNumber(7)
        )
    }

    @Test
    fun convertNumber_9() {
        Assertions.assertEquals(
            "Foo",
            fooBarQuixService.convertNumber(9)
        )
    }

    @Test
    fun convertNumber_51() {
        Assertions.assertEquals(
            "FooBar",
            fooBarQuixService.convertNumber(51)
        )
    }

    @Test
    fun convertNumber_53() {
        Assertions.assertEquals(
            "BarFoo",
            fooBarQuixService.convertNumber(53)
        )
    }

    @Test
    fun convertNumber_33() {
        Assertions.assertEquals(
            "FooFooFoo",
            fooBarQuixService.convertNumber(33)
        )
    }

    @Test
    fun convertNumber_27() {
        Assertions.assertEquals(
            "FooQuix",
            fooBarQuixService.convertNumber(27)
        )
    }

    @Test
    fun convertNumber_15() {
        Assertions.assertEquals(
            "FooBarBar",
            fooBarQuixService.convertNumber(15)
        )
    }

}
