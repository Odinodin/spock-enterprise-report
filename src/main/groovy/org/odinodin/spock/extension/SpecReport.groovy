package org.odinodin.spock.extension

import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo
import groovy.json.JsonBuilder
import org.spockframework.runtime.model.FeatureInfo
import org.spockframework.runtime.model.BlockInfo

class SpecReport {

    static createReport(SpecInfo specInfo, List<ErrorInfo> errors) {

        def data = [[

                        //meta: specInfo.getMetadata(),
                        name: specInfo.getDescription()?.getTestClass()?.name,
                        fileName: specInfo.filename,
                        numberOfErrors: errors.size(),
                        features: jsonifyFeatures(specInfo.features, errors)
                ]]

        def json = new JsonBuilder(data)
        json.toPrettyString() + ";"
    }

    private static def jsonifyFeatures(List<FeatureInfo> features, List<ErrorInfo> errors) {
        features.collect { feature ->
            def possiblyAnError = errors.find {it.method.feature == feature}

            [name: feature.name,
             error: possiblyAnError?.exception?.message,
             blocks: jsonifyBlocks(feature.blocks)
            ]
        }
    }

    private static def jsonifyBlocks(List<BlockInfo> blocks) {
        def result =  blocks.collect {block ->
            [kind: block.kind,
            texts: block.texts]
        }
        return result ?: null
    }
}
