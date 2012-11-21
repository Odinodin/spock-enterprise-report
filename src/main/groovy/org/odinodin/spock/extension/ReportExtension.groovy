package org.odinodin.spock.extension

import org.spockframework.runtime.AbstractRunListener
import org.spockframework.runtime.extension.IGlobalExtension
import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo

class ReportExtension implements IGlobalExtension {



    void visitSpec(SpecInfo spec) {
        println "visit spec " + spec

        spec.addListener(new AbstractRunListener() {

            @Override
            void afterSpec(SpecInfo specInfo) {
                println "AFTER Ze SPEC"


                ReportWriter.write(specInfo)
                println "SPEC SPEC: " + specInfo.name


            }

            @Override
            void error(ErrorInfo error) {
                ReportWriter.write(error)
                println "ERROR ERROR: " + error
            }

        })
    }

}

