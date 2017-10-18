---
layout: page
title: "Q171680: NTLM Enabled on IIS 1.0 Creates Problems with Run-Time Bots"
permalink: kb/171/Q171680/
---

## Q171680: NTLM Enabled on IIS 1.0 Creates Problems with Run-Time Bots

	Article: Q171680
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft FrontPage for Windows version 1.1 on Windows NT Server
	version 3.51 with Internet Information Server 1.0 installed, you will not be
	able to use NTLM Authentication, and you may receive an error message similar to
	the following:
	
	  HTTP/1.0 500 Server Error
	  (The type of the token is inappropriate for its attempted use.)
	
	CAUSE
	=====
	
	Even though NTLM cannot be used to access CGI scripts on Windows NT Server 3.51,
	IIS 1.0 tells the browser that NTLM is okay. The browser, not being able to
	distinguish between a CGI script or an ISAPI script, unsuccessfully tries to use
	NTLM, and the result is the preceding HTTP error message.
	
	
	RESOLUTION
	==========
	
	To avoid the problem, use any of the following workarounds:
	
	  Disable NTLM Authentication for the server.
	
	  -or-
	
	  Turn Allow Anonymous back on.
	
	  -or-
	
	  Upgrade the server to Microsoft Windows NT 4.0 and Internet Information
	  Server 2.0, which is capable of handling NTLM access to CGI scripts.
	
	Additional query words: fpiis
	
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbFrontPageSearch kbiis100 kbFrontPage1xSearch kbFrontPage110
	Version           : 1.0
	Issue type        : kbbug kbhowto
	
	=============================================================================
	
