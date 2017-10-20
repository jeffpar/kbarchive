---
layout: page
title: "Q318176: SSI Output Disappears After You Apply Security Patches"
permalink: /kb/318/Q318176/
---

## Q318176: SSI Output Disappears After You Apply Security Patches

{% raw %}

	Article: Q318176
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a server-side include (SSI) program by using the <!--#exec
	cgi--> command on a server that is running either Microsoft Windows NT 4.0
	with Service Pack 4 (SP4) or later applied or Microsoft Windows 2000 with
	Service Pack 2 (SP2) or later applied, the output of the program does not appear
	on the page. If you run the same program on an unpatched server, the output
	appears as expected.
	
	CAUSE
	=====
	
	After you apply these specified service packs, Internet Information Services
	(IIS) expects any SSI program that is executed by using the <!--#exec
	cgi--> command to follow the Common Gateway Interface (CGI) specification.
	This specification requires CGI programs to print a Content-Type HTTP header
	before any other output. IIS silently ignores this header and removes it from
	the final program output that it displays on the page. If the SSI program does
	not include this header, IIS executes the program but does not display any of
	its output. This is a change from the behavior of previous versions of Windows,
	which do not require these headers and which display any included HTTP headers
	on the page before the rest of the output from the SSI program.
	
	RESOLUTION
	==========
	
	You can make the output appear in one of two ways:
	
	1. Execute the program by using the <!--#exec cmd--> command instead of
	  the <!--#exec cgi--> command.
	
	-or-
	
	2. Rewrite the program to print the following line, followed by two new lines,
	  before any other output:
	
	  Content-type: text/html
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To enable SSIs, follow these steps:
	
	1. Start the Internet Service Manager (ISM), which loads the IIS snap-in for the
	  Microsoft Management Console (MMC).
	
	2. In the MMC, double-click your computer name in the left pane.
	
	3. Double-click the Web site for which you want to enable SSI.
	
	4. Right-click the virtual directory that will contain your SSI-enabled files.
	  To enable SSI for the home directory of a Web site, right-click the Web site.
	
	5. Click Properties, and then click the Home Directory tab.
	
	6. Under Execute permissions, click to select Scripts and Executables.
	
	7. Click OK. Make sure to select any directories that contain SSI-enabled files
	  in the Inheritance Overrides screen.
	
	For additional information about how to enable the command, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q233969 SSIEnableCmdDirective Is Set to FALSE by Default
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Enable server-side includes for the home directory of your default Web site.
	
	2. Compile the following C program on an unpatched Windows NT 4.0 or Windows
	  2000 server:
	
	  #include <stdio.h>
	  int main(int argc, char **argv) {
	    printf("Hello World\n");
	  }
	
	3. Name the executable file Helloworld.exe, and then put the file in the root
	  directory of your Web server. By default, this directory is
	  C:\Inetpub\Wwwroot.
	
	4. Create the following SSI-enabled HTML page, and then save the page as
	  Ssitest.shtm in the root directory of your Web server:
	
	  <HTML><BODY>
	  Exec cmd: <!--#exec cmd="c:\inetpub\wwwroot\HelloWorld.exe"--><BR>
	  Exec cgi: <!--#exec cgi="/HelloWorld.exe"-->
	  </BODY></HTML>
	
	5. Browse to http://localhost/ssitest.shtm on a computer that is running Windows
	  NT 4.0 Service Pack 3 (SP3) or earlier or Windows 2000 Service Pack 1 (SP1)
	  or earlier. You see the following:
	
	  Exec cmd: Hello World
	  Exec cgi: Hello World
	
	6. Apply Windows NT 4.0 SP4 or later or Windows 2000 SP2 or later to the
	  computer.
	
	7. Browse to http://localhost/ssitest.shtm again. You now see the following:
	
	  Exec cmd: Hello World
	  Exec cgi:
	
	8. Modify the code for Helloworld.exe to print a Content-Type header first, and
	  then recompile the file:
	
	  #include <stdio.h>
	  int main(int argc, char **argv) {
	    printf("Content-type: text/html\n");
	    printf("Hello World\n");
	  }
	
	9. Reload http://localhost/ssitest.shtm on a computer that is running Windows NT
	  4.0 SP4 or later or Windows 2000 SP2 or later. You now see the following:
	
	  Exec cmd: Content-type: text/html
	   Hello World
	  Exec cgi: Hello World
	
	Note that unlike the <!--#exec cgi--> command, the <!--#exec cmd-->
	command does not remove any CGI headers from the output.
	
	REFERENCES
	==========
	
	For more information about SSIs, see the "Server-Side Includes" topic in the IIS
	online documentation. To view this topic, locate Administration, locate Web Site
	Management, and then locate Server-Side Includes. The IIS online documentation
	is accessible through the following URL from any computer with the IIS
	documentation installed:
	
	  http://localhost/iishelp
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
