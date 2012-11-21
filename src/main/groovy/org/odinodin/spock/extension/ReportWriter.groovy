package org.odinodin.spock.extension

import org.spockframework.runtime.model.ErrorInfo
import org.spockframework.runtime.model.SpecInfo

/**
 * Created with IntelliJ IDEA.
 * User: odinholestandal
 * Date: 10/25/12
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
class ReportWriter {

    static List<ErrorInfo> errors = []

    static void write(SpecInfo specInfo) {

        def buffer = new StringBuffer()
        buffer << SpecReport.createReport(specInfo, errors)

        def file = new File("specinfo.txt")
        if (file.exists()) {
            processFileInplace(file) { text ->

                def both = text + buffer.toString()

                both.replaceAll(/\n];\[/, ",")

            }
        } else file << buffer.toString()
    }

    static void write(ErrorInfo errorInfo) {
        errors.add(errorInfo)
    }

    static def processFileInplace(file, Closure processText) {
        def text = file.text
        file.write(processText(text))
    }


}
