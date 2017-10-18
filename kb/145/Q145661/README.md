---
layout: page
title: "Q145661: PRB: Specified CGI Application Misbehaved"
permalink: kb/145/Q145661/
---

## Q145661: PRB: Specified CGI Application Misbehaved

	Article: Q145661
	Product(s): Internet Information Server
	Version(s): 1.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCGI
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Common Gateway Interface (CGI) application with Microsoft
	Internet Information Server (IIS), the following error message appears:
	
	  CGI Error:
	  The specified CGI application misbehaved by not returning a complete set of
	  HTTP headers. The headers it did return are:
	
	CAUSE
	=====
	
	This error is caused by the return of an incomplete or incorrect set of headers
	by the CGI application. The CGI application may be written incorrectly. As well,
	logic errors, API failures, or anything that causes the CGI application
	malfunction can also cause this error.
	
	RESOLUTION
	==========
	
	Modify the source code for the CGI application header output. The following is
	an example of a correct header:
	
	     print "HTTP/1.0 200 OK\n";
	     print "Content-Type: text/html\n\n\n";
	
	If the CGI is written in C++, it is possible to debug the application and
	ascertain the problem. Instructions can be found in following article:
	
	  Q238788 How to Debug CGI Applications Running Under IIS
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbCGI 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis100
	Version           : :1.0,3.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
