import org.codehaus.groovy.maven.mojo.GroovyMojo

import java.util.zip.ZipInputStream

/**
 * Gathers all spock report files from a test run and gathers them into a single file.
 * Additionally, unwraps the html report.
 *
 * @goal gather-report
 */
public class SpockReportMojo extends GroovyMojo {

    /**
     * Where to unzip the report
     *
     * @parameter default-value="target/spock-enterprise-report"
     */
    private String reportDir

    /**
     * Where to find the reports from each spec that was run
     *
     * @parameter default-value="target/spock-data"
     */
    private String inputDir

    void execute() {
        log.info("Writing Spock Enterprise HTML-report to $reportDir")
        unzipHtml()
        gatherReportData()
    }

    void gatherReportData() {
        def inputSingleReportDir = new File(inputDir)
        if (!inputSingleReportDir.isDirectory()) throw new RuntimeException("Could not find Spock reports in $inputDir. Make sure to run a report first.")

        // Create report-file and copy it to the correct reportDir
        def buffer = new StringBuffer()
        inputSingleReportDir.eachFile { file ->

            def isFirstFile = buffer.length() > 0
            if (isFirstFile) {
                buffer << ","
            }

            file.eachLine { line, idx ->
                if (idx == 1 || isLastLine(line)) {

                } else {
                    buffer << line + "\n"
                }
            }
        }

        writeReportFile(buffer.toString());
    }

    private void writeReportFile(def reportString) {
        def report = new File("$reportDir/html/app/js", "data.js")
        report << "var globalSpecs = [\n$reportString\n];";
    }

    private boolean isLastLine(String line) {
        line == "];"
    }



    private void unzipHtml() {
        InputStream inputStream = getClass().getResourceAsStream("html.zip");

        def result = new ZipInputStream(inputStream)
        def destFile = new File(reportDir)
        if (!destFile.exists()) {
            destFile.mkdir();
        }
        result.withStream {
            def entry
            while (entry = result.nextEntry) {
                if (!entry.isDirectory()) {
                    new File(reportDir + File.separator + entry.name).parentFile?.mkdirs()
                    def output = new FileOutputStream(reportDir + File.separator
                            + entry.name)
                    output.withStream {
                        int len = 0;
                        byte[] buffer = new byte[4096]
                        while ((len = result.read(buffer)) > 0) {
                            output.write(buffer, 0, len);
                        }
                    }
                } else {
                    new File(reportDir + File.separator + entry.name).mkdir()
                }
            }
        }
    }
}