---
layout: page
title: "Q148750: CGI Scripts Compiled w/16-bit C Compilers Fail to Run on IIS"
permalink: /kb/148/Q148750/
---

## Q148750: CGI Scripts Compiled w/16-bit C Compilers Fail to Run on IIS

{% raw %}

	Article: Q148750
	Product(s): Internet Information Server
	Version(s): 1.0 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you try to run a CGI script on (Internet Information Server) IIS from a Web
	Browser using http://<ServerName>/Directory
	path>/<FileName.exe>?,, you may get the following error:
	
	  HTTP/1.0 500 Server Error (The handle is invalid.)
	
	CAUSE
	=====
	
	CGI scripts compiled with 16-bit C compilers may fail to execute on IIS.
	
	For example, if you compile and build an executable file out of the following C
	language source code using a 16-bit C compiler, and run the .exe file from a
	MS-DOS window of a Microsoft Windows NT Workstation version 3.51, the correct
	HTML output will send to the standard out. However if you place the same
	executable file in the Script directory of the IIS server and try to execute the
	same executable file from a web browser using
	http://<ServerName>/Directory path>/<FileName.exe>?, it will fail
	to generate to web page.
	
	  #include <stdio.h>
	
	  void main()
	  {
	     printf( "Content-type: text/html\n\n" );
	     printf( "<BODY BGCOLOR=\"#FFFFF0\" TEXT=\"#0000FF\">" );
	     printf( "<TITLE>This is a Test page</TITLE>" );
	     printf( "<h2>Hello World.</h2><br>" );
	     printf( "<h1><center>End of the test page.</center></h1>" );
	     printf( "</BODY>\n" );
	  }
	
	RESOLUTION
	==========
	
	To correct this problem compile and build the C Language Source code using a
	32-bit C compiler, such as Microsoft C++ 4.0 or C++ 2.0.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0 3.51
	
	=============================================================================
	

{% endraw %}
