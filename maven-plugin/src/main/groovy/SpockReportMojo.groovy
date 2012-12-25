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
     * @parameter default-value="target/spock"
     */
    private String destination

    /**
     * Where to find the reports from each spec that was run
     *
     * @parameter default-value="target/spock-data"
     */
    private String singleReportDir

    void execute() {
        log.info("Writing Spock Enterprise HTML-report to $destination")
        unzipHtml()

        gatherReportData()
    }

    void gatherReportData() {
        def reportsDir = new File(singleReportDir)
        if (!reportsDir.isDirectory()) throw new RuntimeException("Could not find Spock reports in $singleReportDir. Make sure to run a report first.")

        // Create report-file and copy it to the correct destination

        def buffer = new StringBuffer()

        reportsDir.eachFile { file ->
            file.eachLine { line ->
                if (isLastLine(line) ){
                    buffer << ","
                } else {
                    buffer << line
                }
            }
        }

        def report = new File(reportsDir, "data.js")
        report << buffer.toString()
    }

    private boolean isLastLine(String line) {
        line == "];"
    }


    private void unzipHtml() {
        InputStream inputStream = getClass().getResourceAsStream("html.zip");

        def result = new ZipInputStream(inputStream)
        def destFile = new File(destination)
        if (!destFile.exists()) {
            destFile.mkdir();
        }
        result.withStream {
            def entry
            while (entry = result.nextEntry) {
                if (!entry.isDirectory()) {
                    new File(destination + File.separator + entry.name).parentFile?.mkdirs()
                    def output = new FileOutputStream(destination + File.separator
                            + entry.name)
                    output.withStream {
                        int len = 0;
                        byte[] buffer = new byte[4096]
                        while ((len = result.read(buffer)) > 0) {
                            output.write(buffer, 0, len);
                        }
                    }
                } else {
                    new File(destination + File.separator + entry.name).mkdir()
                }
            }
        }
    }
}