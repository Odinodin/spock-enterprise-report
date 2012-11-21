var globalSpecs = [
    {
        "name": "MathSpec",
        "fileName": "MathSpec.groovy",
        "numberOfErrors": 0,
        "features": [
            {
                "name": "maximum of two numbers",
                "error": null,
                "blocks": [
                    {
                        "kind": "EXPECT",
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
                "name": "failing test",
                "error": null,
                "blocks": [
                    {
                        "kind": "EXPECT",
                        "texts": [

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
            }
        ]
    },
    {
        "name": "SpecReportTest",
        "fileName": "SpecReportTest.groovy",
        "numberOfErrors": 2,
        "features": [
            {
                "name": "can create SpecReports from SpecInfo",
                "error": "Condition not satisfied:\n\nreport == expectedReport\n|      |  |\n|      |  [\n|      |      {\n|      |          \"name\": \"Name of the spec\",\n|      |          \"fileName\": \"some/file.groovy\",\n|      |          \"numberOfErrors\": 0,\n|      |          \"features\": [\n|      |              {\n|      |                  \"name\": \"feature 1\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": [\n|      |                      {\n|      |                          \"kind\": \"SETUP\",\n|      |                          \"texts\": [\n|      |                              \"some precondition\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"WHEN\",\n|      |                          \"texts\": [\n|      |                              \"something is done\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"THEN\",\n|      |                          \"texts\": [\n|      |                              \"verify some stuff\"\n|      |                          ]\n|      |                      }\n|      |                  ]\n|      |              },\n|      |              {\n|      |                  \"name\": \"feature 2\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": null\n|      |              }\n|      |          ]\n|      |      }\n|      |  ]\n|      false\n|      1 difference (99% similarity)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": \"some/file.groovy\",\\n        \"numberOfErrors\": 0,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            },\\n            {\\n                \"name\": \"feature 2\",\\n                \"error\": null,\\n                \"blocks\": null\\n            }\\n        ]\\n    }\\n](;)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": \"some/file.groovy\",\\n        \"numberOfErrors\": 0,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            },\\n            {\\n                \"name\": \"feature 2\",\\n                \"error\": null,\\n                \"blocks\": null\\n            }\\n        ]\\n    }\\n](-)\n[\n    {\n        \"name\": \"Name of the spec\",\n        \"fileName\": \"some/file.groovy\",\n        \"numberOfErrors\": 0,\n        \"features\": [\n            {\n                \"name\": \"feature 1\",\n                \"error\": null,\n                \"blocks\": [\n                    {\n                        \"kind\": \"SETUP\",\n                        \"texts\": [\n                            \"some precondition\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"WHEN\",\n                        \"texts\": [\n                            \"something is done\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"THEN\",\n                        \"texts\": [\n                            \"verify some stuff\"\n                        ]\n                    }\n                ]\n            },\n            {\n                \"name\": \"feature 2\",\n                \"error\": null,\n                \"blocks\": null\n            }\n        ]\n    }\n];\n",
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
                "error": "Condition not satisfied:\n\nreport == expectedReport\n|      |  |\n|      |  [\n|      |      {\n|      |          \"name\": \"Name of the spec\",\n|      |          \"fileName\": \"some/file.groovy\",\n|      |          \"numberOfErrors\": 1,\n|      |          \"features\": [\n|      |              {\n|      |                  \"name\": \"feature 1\",\n|      |                  \"error\": null,\n|      |                  \"blocks\": [\n|      |                      {\n|      |                          \"kind\": \"SETUP\",\n|      |                          \"texts\": [\n|      |                              \"some precondition\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"WHEN\",\n|      |                          \"texts\": [\n|      |                              \"something is done\"\n|      |                          ]\n|      |                      },\n|      |                      {\n|      |                          \"kind\": \"THEN\",\n|      |                          \"texts\": [\n|      |                              \"verify some stuff\"\n|      |                          ]\n|      |                      }\n|      |                  ]\n|      |              }\n|      |          ]\n|      |      }\n|      |  ]\n|      false\n|      1 difference (99% similarity)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": \"some/file.groovy\",\\n        \"numberOfErrors\": 1,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            }\\n        ]\\n    }\\n](;)\n|      [\\n    {\\n        \"name\": \"Name of the spec\",\\n        \"fileName\": \"some/file.groovy\",\\n        \"numberOfErrors\": 1,\\n        \"features\": [\\n            {\\n                \"name\": \"feature 1\",\\n                \"error\": null,\\n                \"blocks\": [\\n                    {\\n                        \"kind\": \"SETUP\",\\n                        \"texts\": [\\n                            \"some precondition\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"WHEN\",\\n                        \"texts\": [\\n                            \"something is done\"\\n                        ]\\n                    },\\n                    {\\n                        \"kind\": \"THEN\",\\n                        \"texts\": [\\n                            \"verify some stuff\"\\n                        ]\\n                    }\\n                ]\\n            }\\n        ]\\n    }\\n](-)\n[\n    {\n        \"name\": \"Name of the spec\",\n        \"fileName\": \"some/file.groovy\",\n        \"numberOfErrors\": 1,\n        \"features\": [\n            {\n                \"name\": \"feature 1\",\n                \"error\": null,\n                \"blocks\": [\n                    {\n                        \"kind\": \"SETUP\",\n                        \"texts\": [\n                            \"some precondition\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"WHEN\",\n                        \"texts\": [\n                            \"something is done\"\n                        ]\n                    },\n                    {\n                        \"kind\": \"THEN\",\n                        \"texts\": [\n                            \"verify some stuff\"\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n];\n",
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
    }
];
