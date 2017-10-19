---
layout: page
title: "Q155210: FP: Error 5 Copying Web with Author Account on IIS"
permalink: /kb/155/Q155210/
---

## Q155210: FP: Error 5 Copying Web with Author Account on IIS

	Article: Q155210
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194257.
	
	SYMPTOMS
	========
	
	When you attempt to copy a Web to a Microsoft Internet Information Server (IIS),
	you receive the following error message:
	
	  Server Error: Unable to read configuration information for Microsoft Internet
	  Information Server. Error Code 5.
	
	CAUSE
	=====
	
	This error message appears if you are using version 1.1.2.6 (vt11msft.dll v.
	1.1.2.0721) of the FrontPage Server Extension.
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can copy the Web using any of the following
	methods.
	
	Method 1
	--------
	
	Author directly to the server rather than using the Copy Web command.
	
	Method 2
	--------
	
	Use FrontPage Explorer to open the root Web on the destination server and import
	files from the author's Web.
	
	Method 3
	--------
	
	Grant Windows NT Administrator privileges to your FrontPage authors.
	Administrators can successfully copy Webs to an Internet Information Server.
	
	Method 4
	--------
	
	If the Internet Information Server is running FTP services, configure the FTP
	server to map to the author's root Web. Then, you can use the FrontPage
	Publishing Wizard to transfer Web content to the Internet Information Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage110
	Version           : WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
