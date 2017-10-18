---
layout: page
title: "Q164278: FP: Error Installing FP Server Extensions if Directory Mapped"
permalink: kb/164/Q164278/
---

## Q164278: FP: Error Installing FP Server Extensions if Directory Mapped

	Article: Q164278
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194254.
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you install FrontPage Server Extensions to a Web server or publish a Web to
	another server you receive the following error message:
	
	  '<directory name>' does not refer to a page in this Web.
	
	CAUSE
	=====
	
	You may receive this error message because FrontPage cannot manage content that
	is not stored within the Web content directory on the server. If you install the
	FrontPage Server Extensions to a Web server that is mapped to a directory that
	has the same name as the directory you defined for the FrontPage Web, the server
	redirects the FrontPage Web directory to a location outside of the FrontPage
	Web. For example, when you install Microsoft Personal Web Server, it creates a
	directory mapping for a folder called "Docs." If you attempt to create a
	FrontPage Web named Docs on the Microsoft Personal Web Server, you will receive
	the error message described in the "Symptoms" section.
	
	This problem occurs on any server configured to map a string to a directory. For
	example, some servers redirect the /Cgi-bin folder to an area outside of the Web
	by default. If you publish a FrontPage Web that contains a /Cgi-bin folder to
	one of these servers, you will receive the error message described in the
	"Symptoms" section.
	
	FrontPage attempts to create a /Cgi-bin folder on any root Web. The /Cgi-bin
	folder contains the Htimage.exe and Imagemap.exe programs used for image map
	creation in NCSA, Apache, Netscape, or CERN image map formats.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Modify the Configuration Files
	----------------------------------------
	
	Modify the configuration files or use the configuration utility for the Web
	server to remove the server-wide mapping for the directory, and then allow the
	FrontPage Server Extensions to create the mappings on a per-Web basis.
	
	Method 2: Rename the Cgi-bin folder before Publishing the Web
	-------------------------------------------------------------
	
	Rename the /Cgi-bin (or other) folder on the source server before you publish
	your Web. Contact your server administrator to enable the folder for executable
	programs.
	
	
	Additional query words: 1.00a 97
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
