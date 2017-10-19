---
layout: page
title: "Q142295: Err Msg: The Microsoft Mail Post Office Could Not Be Found..."
permalink: /kb/142/Q142295/
---

## Q142295: Err Msg: The Microsoft Mail Post Office Could Not Be Found...

	Article: Q142295
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange, you may receive the follow error message:
	
	  The Microsoft Mail post office could not be found on the server
	  <servername>. Be sure to enter the correct path to the post office. If
	  you don't know the path contact your administrator.
	
	CAUSE
	=====
	
	This error can occur if you are using the Microsoft Mail service in Microsoft
	Exchange but you are not using a LAN or remote post office.
	
	RESOLUTION
	==========
	
	The Microsoft Mail service is used only for connecting to WGPO post offices
	(including Windows 95, Microsoft Windows NT, and Microsoft Windows for
	Workgroups post offices) or Microsoft Mail 3.x post offices. It is not necessary
	to use the Microsoft Mail service for sending mail on The Microsoft Network.
	
	To remove the Microsoft Mail service, follow these steps:
	
	1. Close Microsoft Exchange.
	
	2. In Control Panel, double-click Mail And Fax.
	
	3. Click the Microsoft Mail service.
	
	4. Click Remove.
	
	Additional query words: postoffice
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
