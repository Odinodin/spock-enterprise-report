var globalSpecs = [
    {
        "name": "SpecReportTest",
        "fileName": "org.odinodin.spock.extension.SpecReportTest",
        "numberOfErrors": 2,
        "features": [
            {
                "name": "can create SpecReports from SpecInfo",
                "error": "Condition not satisfied:\n\nreport == expectedReport\n|      |  |\n|      |  [\n|      |      {\n|      |          \"name\": \"Name of the spec\",\n|      |          \"fileName\": \"some/file.groovy\",\n|      |          \"numberOfErrors\": 0,\n|      |          \"features\": [\n|      |              {\n|      |                  \"name\": \"feature 1\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": [\n|      |                      {\n|      |                          \"kind\": \"SETUP\",\n|      |                          \"texts\": [\n|      |                              \"some precondition\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"WHEN\",\n|      |                          \"texts\": [\n|      |                              \"something is done\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"THEN\",\n|      |                          \"texts\": [\n|      |                              \"verify some stuff\"\n|      |                          ]\n|      |                      }\n|      |                  ]\n|      |              },\n|      |              {\n|      |                  \"name\": \"feature 2\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": null\n|      |              }\n|      |          ]\n|      |      }\n|      |  ]\n|      false\n|      18 differences (98% similarity)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": (nul-----)l(---------),\\n        \"numberOfErrors\": 0,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            },\\n            {\\n                \"name\": \"feature 2\",\\n                \"error\": null,\\n                \"blocks\": null\\n            }\\n        ]\\n    }\\n](;)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": (\"some/fi)l(e.groovy\"),\\n        \"numberOfErrors\": 0,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            },\\n            {\\n                \"name\": \"feature 2\",\\n                \"error\": null,\\n                \"blocks\": null\\n            }\\n        ]\\n    }\\n](-)\n[\n    {\n        \"name\": \"Name of the spec\",\n        \"fileName\": null,\n        \"numberOfErrors\": 0,\n        \"features\": [\n            {\n                \"name\": \"feature 1\",\n                \"error\": null,\n                \"blocks\": [\n                    {\n                        \"kind\": \"SETUP\",\n                        \"texts\": [\n                            \"some precondition\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"WHEN\",\n                        \"texts\": [\n                            \"something is done\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"THEN\",\n                        \"texts\": [\n                            \"verify some stuff\"\n                        ]\n                    }\n                ]\n            },\n            {\n                \"name\": \"feature 2\",\n                \"error\": null,\n                \"blocks\": null\n            }\n        ]\n    }\n];\n",
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "A SpecInfo"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "a report is created"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "it is jsonified"
                        ]
                    }
                ]
            },
            {
                "name": "can jsonify specs that has errors",
                "error": "Condition not satisfied:\n\nreport == expectedReport\n|      |  |\n|      |  [\n|      |      {\n|      |          \"name\": \"Name of the spec\",\n|      |          \"fileName\": \"some/file.groovy\",\n|      |          \"numberOfErrors\": 1,\n|      |          \"features\": [\n|      |              {\n|      |                  \"name\": \"feature 1\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": [\n|      |                      {\n|      |                          \"kind\": \"SETUP\",\n|      |                          \"texts\": [\n|      |                              \"some precondition\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"WHEN\",\n|      |                          \"texts\": [\n|      |                              \"something is done\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"THEN\",\n|      |                          \"texts\": [\n|      |                              \"verify some stuff\"\n|      |                          ]\n|      |                      }\n|      |                  ]\n|      |              }\n|      |          ]\n|      |      }\n|      |  ]\n|      false\n|      19 differences (97% similarity)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": (nul-----)l(---------),\\n        \"numberOfErrors\": (0),\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            }\\n        ]\\n    }\\n](;)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": (\"some/fi)l(e.groovy\"),\\n        \"numberOfErrors\": (1),\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            }\\n        ]\\n    }\\n](-)\n[\n    {\n        \"name\": \"Name of the spec\",\n        \"fileName\": null,\n        \"numberOfErrors\": 0,\n        \"features\": [\n            {\n                \"name\": \"feature 1\",\n                \"error\": null,\n                \"blocks\": [\n                    {\n                        \"kind\": \"SETUP\",\n                        \"texts\": [\n                            \"some precondition\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"WHEN\",\n                        \"texts\": [\n                            \"something is done\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"THEN\",\n                        \"texts\": [\n                            \"verify some stuff\"\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n];\n",
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "a spec with an error"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "jsonifying it"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "it is jsonified"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "MathSpec",
        "fileName": "org.odinodin.spock.samples.bar.MathSpec",
        "numberOfErrors": 1,
        "features": [
            {
                "name": "failing test",
                "error": "Condition not satisfied:\n\nMath.max(0, 2) == 0\n     |         |\n     2         false\n",
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [
                            "i fail"
                        ]
                    }
                ]
            },
            {
                "name": "with table maximum of two numbers",
                "error": null,
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [

                        ]
                    },
                    {
                        "kind": "WHERE",
                        "texts": [

                        ]
                    }
                ]
            },
            {
                "name": "improved maximum of two numbers ",
                "error": null,
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [
                            "math still works"
                        ]
                    },
                    {
                        "kind": "WHERE",
                        "texts": [

                        ]
                    }
                ]
            },
            {
                "name": "maximum of two numbers",
                "error": null,
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [
                            "math to actually work"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "SimpleSpec",
        "fileName": "org.odinodin.spock.samples.bar.SimpleSpec",
        "numberOfErrors": 2,
        "features": [
            {
                "name": "whatever feature",
                "error": "Condition not satisfied:\n\nfalse\n",
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [

                        ]
                    }
                ]
            },
            {
                "name": "failing feature",
                "error": "Condition not satisfied:\n\nfalse\n",
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [

                        ]
                    }
                ]
            },
            {
                "name": "some simple feature",
                "error": null,
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "some given",
                            "more given"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "some when",
                            "more when"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "the then",
                            "more then",
                            "even more then"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "MonkeySpec",
        "fileName": "org.odinodin.spock.samples.foo.MonkeySpec",
        "numberOfErrors": 0,
        "features": [
            {
                "name": "there are room for 12 monkeys in a list",
                "error": null,
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "an empty list"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "12 monkeys are put in the list"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "they actually fit in the list"
                        ]
                    }
                ]
            },
            {
                "name": "monkeys love certain fruit",
                "error": null,
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "a monkey"
                        ]
                    },
                    {
                        "kind": "EXPECT",
                        "texts": [
                            "it only likes certain fruit"
                        ]
                    },
                    {
                        "kind": "WHERE",
                        "texts": [

                        ]
                    }
                ]
            }
        ]
    }
];