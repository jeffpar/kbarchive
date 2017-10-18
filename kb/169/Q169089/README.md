---
layout: page
title: "Q169089: FP: New Disk-Based Web Times Out While Trying to Connect"
permalink: kb/169/Q169089/
---

## Q169089: FP: New Disk-Based Web Times Out While Trying to Connect

	Article: Q169089
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194673.
	
	SYMPTOMS
	========
	
	When you attempt to create a new disk-based Web, you receive one of the
	following error messages:
	
	FrontPage 97 for Windows
	------------------------
	
	  Timed out while trying to connect to a server at 'C' on port 80.
	
	FrontPage for Windows 1.1
	-------------------------
	
	  Unable to connect to a server at 'C' on port 0 (socket code 10049).
	
	CAUSE
	=====
	
	This problem occurs if you type a path using the forward slash, such as
	"c:/webs" (without the quotation marks) in the "Choose a title for your
	FrontPage Web" dialog box. When the server attempts to resolve the address, it
	attempts to resolve the folder on the c:\ drive using an IP address.
	
	RESOLUTION
	==========
	
	To resolve this problem, in the "Choose a title for your FrontPage Web" dialog
	box, use a backslash and type the path as follows:
	
	  "c:\webs" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
