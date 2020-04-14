
function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('ReactExt')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
