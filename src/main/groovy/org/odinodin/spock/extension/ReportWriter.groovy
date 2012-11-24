package org.odinodin.spock.extension

import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo

/**
 * Created by odinholestandal
 */
class ReportWriter {

    static Map<Integer, List<ErrorInfo>> errorMap = [:]

    static void write(SpecInfo specInfo) {

        def buffer = new StringBuffer()
        buffer << SpecReport.createReport(specInfo, errorMap.get(specInfo.hashCode()) as List<ErrorInfo>)

        def file = new File("specinfo.txt")
        if (file.exists()) {
            processFileInplace(file) { text ->

                def both = text + buffer.toString()

                both.replaceAll(/\n];\[/, ",")

            }
        } else file << buffer.toString()
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


    static def processFileInplace(file, Closure processText) {
        def text = file.text
        file.write(processText(text))
    }


}
