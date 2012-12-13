package org.odinodin.spock.extension

import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo

/**
 * Created by odinholestandal
 */
class SingleSpecReportWriter {

    static final File baseDir = new File("target/spock-enterprise-reports")

    static Map<Integer, List<ErrorInfo>> errorMap = [:]

    static void write(SpecInfo specInfo) {
        println "writing specinfo for " + specInfo.name
        def buffer = new StringBuffer()
        buffer << SpecReport.createReport(specInfo, errorMap.get(specInfo.hashCode()) as List<ErrorInfo>)

        writeBufferToFile(specInfo, buffer)
    }

    private static void writeBufferToFile(SpecInfo specInfo, StringBuffer buffer) {
        def fullyQualifiedClassName = specInfo.description?.testClass?.name
        if (!baseDir.exists()) baseDir.mkdirs()
        def file = new File(baseDir, fullyQualifiedClassName)
        file << buffer.toString()
    }

    static void write(ErrorInfo errorInfo) {

        def specId = errorInfo.method.parent.hashCode()
        def list = errorMap.get(specId)

        if (list != null) {
            list << errorInfo
        } else {
            errorMap.put(specId, [errorInfo])
        }
    }
}
