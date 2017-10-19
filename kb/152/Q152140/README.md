---
layout: page
title: "Q152140: Fatal Exception When Logging on to NetWare from Windows95 Client"
permalink: /kb/152/Q152140/
---

## Q152140: Fatal Exception When Logging on to NetWare from Windows95 Client

	Article: Q152140
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.0,1.1,1.2,2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a NetWare 3.x server from a Windows 95 client, and the
	NetWare login script has been configured to run Smsls.scr, a fatal exception
	error occurs during the "Installing Systems Management Server on this client . .
	" phase.
	
	CAUSE
	=====
	
	McAfee's VirusScan for Windows 95 is installed and VShield is configured to load
	at startup. Vshield causes the fatal exception error on Windows 95.
	
	RESOLUTION
	==========
	
	From the McAfee VirusScan95 group, run the VShield Configuration Manager. In the
	General section of the Detection tab, disable the "Load VShield at startup"
	option. You can create a shortcut to Vshwin32.exe and place it in StartUp, so
	that VShield continues to load automatically.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mcafee vshield sms virus prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbWin95search kbContentX kbWin95 kbPocketIE110 kbSMS200SP1 kbFunImagination200 kbMPTMathopolis
	Version           : WINDOWS:95; winnt:1.0,1.1,1.2,2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
