---
layout: page
title: "Q203064: IIS: Notes on Server-Side Includes (SSI) Syntax"
permalink: /kb/203/Q203064/
---

## Q203064: IIS: Notes on Server-Side Includes (SSI) Syntax

{% raw %}

	Article: Q203064
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details some features that are available in the Microsoft
	implementation of Server-Side Include (SSI) files for Internet Information
	Server (IIS) and provides general syntax and examples for SSI directives.
	
	MORE INFORMATION
	================
	
	SSI files are most commonly used with IIS to allow content authors to include
	the contents of one file inside another file, allowing the easy creation of
	script libraries or page headers and footers.
	
	SSI files, like Active Server Pages (ASP) and Internet Data Connector (IDC)
	files, are script-mapped by file extension to a preprocessor dynamic-link
	library (DLL). In the case of SSI, the handler is Ssiinc.dll. SSI files are
	usually named with .stm file extensions, although extensions of .shtm and .shtml
	are also supported.
	
	SSI is employed by the use of special preprocessing directives in SSI documents.
	These directives are parsed by the SSI DLL and processed. All directives are
	contained in HTML comment tokens and take the following general form:
	
	  <!--#<DIRECTIVE> [<ADDITIONAL DATA>]-->
	
	Supported Directives:
	
	The following directives are supported in the IIS implementation of SSI:
	
	- #config - Configures how variables and commands are displayed.
	
	   - The general syntax for the #config directive is as follows:
	
	  <!-- #CONFIG <ERRMSG/TIMEFMT/SIZEFMT>="<format>" -->
	
	   - The following is an example of a simple page that uses the #config
	     directive:
	
	  <html>
	  <body>
	  <!-- #CONFIG TIMEFMT="%m/%d/%y" -->
	  <p>Today's Date = <!--#ECHO VAR = "DATE_LOCAL" --></p>
	  <!-- #CONFIG TIMEFMT="%A, %B %d, %Y" -->
	  <p>Today's Date = <!--#ECHO VAR = "DATE_LOCAL" --></p>
	  </body>
	  </html>
	
	- #echo - Inserts the value of various Common Gateway Interface (CGI) system
	  environment variables.
	
	   - The general syntax for the #echo directive is as follows:
	
	  <!--#INCLUDE VAR = "<CGI_VARIABLE_NAME>"-->
	
	   - The following is an example of a simple page that uses the #echo
	     directive:
	
	  <html>
	  <body>
	  <p>Server Name = <!--#ECHO VAR = "SERVER_NAME"--></p>
	  <p>Date = <!--#ECHO VAR = "DATE_LOCAL" --></p>
	  <p>Page URL = <!--#ECHO VAR = "URL" --></p>
	  </body>
	  </html>
	
	- #exec - Executes CGI or Internet Server API (ISAPI) command scripts and
	  inserts output into an HTML document.
	
	   - The general syntax for the #exec directive is as follows:
	
	  <!-- #EXEC <CGI/CMD>="<command>" -->
	
	   - The CMD command for the #exec directive is disabled by default on IIS 5.0.
	     For more information, see the following MIcrosoft Knowledge Base article:
	
	  Q233969 SSIEnableCmdDirective Is Set to FALSE by Default
	
	   - The following is an example of a simple page that uses the #exec
	     directive:
	
	  <html>
	  <body>
	  <p>Root Directory of C:</p>
	  <pre><!--#EXEC CMD="cmd /c dir c:\ /b"--></pre>
	  </body>
	  </html>
	
	- #flastmod - Retrieves the last modification time of a specified file.
	
	   - The general syntax for the #flastmod directive is as follows:
	
	  <!--#FLASTMOD <FILE/VIRTUAL> = "filename.ext"-->
	
	   - The following is an example of a simple page that uses the #flastmod and
	     #config directives:
	
	  <html>
	  <body>
	  <!-- #CONFIG TIMEFMT="%m/%d/%y" -->
	  <p>Modified Date = <!--#FLASTMOD FILE="filename.ext"--></p>
	  <!-- #CONFIG TIMEFMT="%B %d, %Y" -->
	  <p>Modified Date = <!--#FLASTMOD FILE="filename.ext"--></p>
	  </body>
	  </html>
	
	- #fsize - Retrieves the size of a specified file.
	
	   - The general syntax for the #fsize directive is as follows:
	
	  <!--#FSIZE <FILE/VIRTUAL> = "filename.ext"-->
	
	   - The following is an example of a simple page that uses the #fsize and
	     #config directives:
	
	  <html>
	  <body>
	  <!-- #CONFIG SIZEFMT="BYTES" -->
	  <p>File Size = <!--#FSIZE FILE="filename.ext"--> bytes</p>
	  <!-- #CONFIG SIZEFMT="ABBREV" -->
	  <p>File Size = <!--#FSIZE FILE="filename.ext"--> KB</p>
	  </body>
	  </html>
	
	- #include - Includes the contents of one specified file inside another.
	
	   - The general syntax for the #include directive is as follows:
	
	  <!--#INCLUDE <FILE/VIRTUAL> = "filename.ext"-->
	
	   - The following is an example of a simple page that uses the #include
	     directive:
	
	  <html>
	  <body>
	  <!--#INCLUDE FILE = "header.inc"-->
	  <p>Hello World!</p>
	  <!--#INCLUDE VIRTUAL = "/includes/footer.inc"-->
	  </body>
	  </html>
	
	More Information on File and Virtual Syntax:
	
	SSI directives that use file paths can reference files by using a file or virtual
	path.
	
	- The file element is used with files that are relative to the folder of the
	  current document. The following example includes a file in the current
	  folder:
	
	  <!--#include file="myfile.txt"-->
	
	- The virtual element represents paths that are relative to the base folder of
	  the Web server. The following example includes a file in the /scripts virtual
	  folder:
	
	  <!--#include virtual="/scripts/myfile.txt"-->
	
	REFERENCES
	==========
	
	For additional information on using SSI with IIS, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q169996 To Run an ISAPI DLL with #exec, Use the CGI Statement
	
	  Q166491 Secure Batch Files Return Access Denied Error Message
	
	  Q195291 How to Disable #exec in Server-Side Include files
	
	Additional query words: iis ssi
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
