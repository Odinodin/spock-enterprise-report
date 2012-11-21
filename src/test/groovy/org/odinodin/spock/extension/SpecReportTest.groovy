package org.odinodin.spock.extension

import org.spockframework.runtime.model.FeatureInfo
import org.spockframework.runtime.model.SpecInfo
import spock.lang.Specification
import org.spockframework.runtime.model.BlockInfo
import org.spockframework.runtime.model.BlockKind
import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.MethodInfo

class SpecReportTest extends Specification {

    def featureWithGivenWhenThen = featureWithGivenWhenThenBlocks()

    def "can create SpecReports from SpecInfo"() {
        given: "A SpecInfo"
        def featureWithNameOnly = new FeatureInfo(name: "feature 2")
        def specInfo = new SpecInfo (
                name: "Name of the spec",
                filename: "some/file.groovy",
                features: [featureWithGivenWhenThen, featureWithNameOnly])

        when: "a report is created"
        def report = SpecReport.createReport(specInfo, [])

        then: "it is jsonified"
        def expectedReport = """[
    {
        "name": "$specInfo.name",
        "fileName": "$specInfo.filename",
        "numberOfErrors": 0,
        "features": [
            {
                "name": "$featureWithGivenWhenThen.name",
                "error": null,
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[0].texts.first()}"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[1].texts.first()}"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[2].texts.first()}"
                        ]
                    }
                ]
            },
            {
                "name": "$featureWithNameOnly.name",
                "error": null,
                "blocks": null
            }
        ]
    }
]"""
        report == expectedReport
    }



    def "can jsonify specs that has errors"() {
        given: "a spec with an error"
        def feature = featureWithGivenWhenThenBlocks()
        def specWithError = new SpecInfo(
                name: "Name of the spec",
                filename: "some/file.groovy",
                features: [feature])
        def error = new ErrorInfo(new MethodInfo(feature: feature), null)
        def errors = [error]

        when: "jsonifying it"
        def report = SpecReport.createReport(specWithError, errors)

        then: "it is jsonified"
        def expectedReport = """[
    {
        "name": "$specWithError.name",
        "fileName": "$specWithError.filename",
        "numberOfErrors": 1,
        "features": [
            {
                "name": "$featureWithGivenWhenThen.name",
                "error": null,
                "blocks": [
                    {
                        "kind": "SETUP",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[0].texts.first()}"
                        ]
                    },
                    {
                        "kind": "WHEN",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[1].texts.first()}"
                        ]
                    },
                    {
                        "kind": "THEN",
                        "texts": [
                            "${featureWithGivenWhenThen.blocks[2].texts.first()}"
                        ]
                    }
                ]
            }
        ]
    }
]"""
        report == expectedReport
    }


    private FeatureInfo featureWithGivenWhenThenBlocks() {
        def featureInfo1 = new FeatureInfo(name: "feature 1")
        featureInfo1.addBlock(new BlockInfo(
                kind: BlockKind.SETUP,
                texts: ["some precondition"]))
        featureInfo1.addBlock(new BlockInfo(
                kind: BlockKind.WHEN,
                texts: ["something is done"]))
        featureInfo1.addBlock(new BlockInfo(
                kind: BlockKind.THEN,
                texts: ["verify some stuff"]))
        featureInfo1
    }


}
