### Developer: Jo Rocca

Full code can also be viewed on github profile (jrocca82) with permission from the developer (currently a private repo).

### Overview

This application consists of a Next.js client and a ASP.NET server. Please see the README in each folder for more information.

### Purpose

## Number to Words Web Page

Please develop a web page featuring a web server routine that converts numerical input into words and passes these words as a string output parameter.

IO example:
Input: “123.45”
Output: “ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS”

Please include:

1. An HTML web user interface to allow the routine to be tested interactively.
   - Note that this is located at http://localhost:5000/swagger/index.html upon running the app
2. A document outlining the reasons why you selected your approach and why you decided against other possible solutions (submitted as a PDF, or .MD file)
   - Note that is contained in this file, under "APPROACH"
3. A test plan
   - Due to time constraints, unit testing was forgone in favor of local testing, both via the swagger link above and in the Next front end built in the "client" folder. It should be noted that the developer is unfamiliar with common frameworks for this in C#, which is why it became out of scope.
4. Supporting files for testing, such as a working executable (if applicable), source files, test harnesses with configuration and data, and solution or project files.
   - Not applicable. Testing can be done through running the localhost
5. It can be implemented in one of the following server-side languages/environments: C#
   (preferable), or Java. - C# was chosen, as the developer has some limited familiarity with this language through coding Unity projects.
6. Readme.md document containing instructions on how to build, host and interact your solution
   - These are contained in the server and client READMEs with specifics for how to run and test each.

Submission requirements:

1. Produce the quality of work and user interface that you’d consider acceptable for a customer
   - Although the Swagger document would be unlikely to be "user facing", a Next app was created to remedy this and demonstrate knowledge of UX/UI
2. Don’t use the internet to find part of, or the whole, solution. We’re familiar with solutions from the internet and we’re keen to assess your unique analysis, design and coding skills.
   - This again limited the developer's ability to create and implement a testing suite specifically. The developer also believes static and styled HTML pages can be served from the server-side C# app, but they are not entirely familiar with this process. Additionally, since the developer does not have Windows systems, they were unable to use Visual Studio to create MVC pages without having more knowledge of the frameworks for C#.
3. Please complete and return the attached exercise by the specified date.
4. Upload your submission to Google Drive, Dropbox, or similar as a .zip folder, and provide us a link to download this submission. Include in the top level directory of your zip:

• Any documents (as PDF or MD files)
• Top level folder called 'code' with all of your code (feel free to use subfolders if you wish)
• Any additional supporting resources

### Approach

The developer used C#, as per the requirements above, to create a server. ASP.NET was used as a framework for this server in order to automatically generate the static HTML user interface required. Although Swagger pages fulfill this requirement the developer also felt that it did not showcase their front end ability, so a separate Next app was created that connects to the server. Both the server and app can be run simultaneously to demonstrate the full stack app (details for running each contained in the respective README files).

The developer was unable to integrate a test suite in the afternoon they took to build this application, as they are unfamiliar with the frameworks of doing so. Additionally, the developer was unable to use the MVC static page rendering on the server side that would have been preferable due to 1. the Linux and MAC systems the developer had access to not allowing automatic creation of these pages through Visual Studio's GUI and 2. A lack of knowledge of how to do this manually, due to lack of previous experience in C# frameworks.

Additionally, the developer had questions about the problem statement. The problem statement says that the user would input a float number and the server would convert this to a string of words. However, in the example given, the output was given as dollars and cents. It was unclear to the developer if this was the intended output or if the output should just spit out the string as "forty four point three six". The developer opted to keep the dollars and cents implementation as 1. This allowed the developer to showcase more code by implementing rounding and concatenating strings and 2. Outputting dollar and cents seemed to have more of a use case from a business perspective, as this would likely be the most common usage. However, the developer does acknowledge that depending on the context this server is used in, it might also have been more beneficial to keep the string output as a decimal on the server side and format it into dollars and cents on the front end to allow for more usability if the endpoint would be used beyond the case of converting to dollars and cents or even required conversion to currencies that are formatted/named differently. Without more context about the potential use for this server, this was a difficult decision for the developer.
