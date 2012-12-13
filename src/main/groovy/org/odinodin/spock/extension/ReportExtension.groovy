package org.odinodin.spock.extension

import org.spockframework.runtime.AbstractRunListener
import org.spockframework.runtime.extension.IGlobalExtension
import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo

/**
 * Created by odinholestandal
 */
class ReportExtension implements IGlobalExtension {


    void visitSpec(SpecInfo spec) {

        spec.addListener(new AbstractRunListener() {

            @Override
            void afterSpec(SpecInfo specInfo) {
                SingleSpecReportWriter.write(specInfo)
            }

            @Override
            void error(ErrorInfo error) {
                SingleSpecReportWriter.write(error)
            }
        })
    }
}

