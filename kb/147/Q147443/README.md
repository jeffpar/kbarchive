---
layout: page
title: "Q147443: FP: Errors w/ Ismaps, Searches After Moving Content to Server"
permalink: /kb/147/Q147443/
---

## Q147443: FP: Errors w/ Ismaps, Searches After Moving Content to Server

	Article: Q147443
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194248.
	
	SYMPTOMS
	========
	
	If you browse a form, such as the Feedback.htm file by opening the form as a
	local file, and then click the Submit button, you get the following error
	message:
	
	  Could not open file
	  C:\content\<webname>\_vti_bin/shtml.exe/feedback.htm.
	
	CAUSE
	=====
	
	The file is opened as a file; that is, it is not being accessed on the server.
	Since it is not being accessed on the server, the server extensions (shtml.exe)
	are not accessible to the local files and they cannot be processed. The
	background processing will occur only for files located on a Web were the
	Personal Web Server or the FrontPage Server Extensions are installed.
	
	RESOLUTION
	==========
	
	Open the file by specifying the Uniform Resource Locator (URL), like this:
	
	  http://<machinename>/<webname>/feedback.htm
	
	Additional query words: 1.00a front page copy content apache unix apache cern ncsa hp-ux sun solarix irix netscape open market vermeer personal Web server pws
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
