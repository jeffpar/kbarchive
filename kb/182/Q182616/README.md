---
layout: page
title: "Q182616: FP: FrontPage Cannot Open a Macintosh Disk-based Web"
permalink: /kb/182/Q182616/
---

## Q182616: FP: FrontPage Cannot Open a Macintosh Disk-based Web

{% raw %}

	Article: Q182616
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a disk-based Web in FrontPage 97 that has been opened
	by FrontPage for the Power Macintosh, you will receive the following error
	message:
	
	  The server "" timed out. The current request did not complete successfully.
	
	  -or-
	
	When you attempt to open a disk-based Web in FrontPage 97 that was created in
	FrontPage for the Power Macintosh, you will receive this error message:
	
	  An unexpected Web Extender error occurred on the server. Authors - please
	  contact the webmaster for this server's site. Webmasters - please see the
	  server's logs for more details.
	
	NOTE: This symptom does not appear with server-based Webs or with the FrontPage
	98 client.
	
	CAUSE
	=====
	
	These error messages are displayed if you have a cross-platform (PC- compatible
	and Macintosh) network, where a disk-based Web is shared on a Windows NT Server.
	These errors occur because FrontPage for the Power Macintosh writes ASCII text
	files that are not recognized by FrontPage 97. It writes characters to the files
	located in the /_vti_cnf folder.
	
	RESOLUTION
	==========
	
	To resolve this, use one of the following methods.
	
	Method 1: Install a Web Server
	------------------------------
	
	Install a Web server, such as Microsoft Internet Information Server (IIS), on the
	Windows NT Server. For more information about IIS, see the following Microsoft
	Web site:
	
	  http://www.microsoft.com/iis/default.asp
	
	Method 2: Upgrade the PC-compatible Computers to FrontPage 98
	-------------------------------------------------------------
	
	For more information about upgrading to FrontPage 98, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q186831 FP98: How to Install Microsoft FrontPage 98 Upgrade Version
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	
	Additional query words: 97 mac explorer files
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : ALPHA MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
