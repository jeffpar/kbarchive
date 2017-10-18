---
layout: page
title: "Q153631: FP: &quot;Error Code 1722&quot; When You Install IIS Extensions"
permalink: kb/153/Q153631/
---

## Q153631: FP: &quot;Error Code 1722&quot; When You Install IIS Extensions

	Article: Q153631
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to uninstall FrontPage server extensions for the Microsoft
	Internet Information Server, you may receive the following error message:
	
	  Unable to read version number for Microsoft Internet Information Server:
	  Error code 1722
	
	CAUSE
	=====
	
	The World Wide Web services were not running on the Microsoft Internet
	Information Server when you initiated the uninstall procedure.
	
	RESOLUTION
	==========
	
	Make sure the Microsoft Internet Information Server is running before you
	attempt to uninstall FrontPage server extensions.
	
	To start Microsoft Internet Information Server, use the following steps:
	
	1. Open the Microsoft Internet Server icon group.
	
	2. Double-click Internet Service Manager.
	
	3. Select World Wide Web, and click Start Service on the Properties menu.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
