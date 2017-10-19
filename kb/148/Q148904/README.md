---
layout: page
title: "Q148904: NetWare Print Jobs Always Use Form Zero"
permalink: /kb/148/Q148904/
---

## Q148904: NetWare Print Jobs Always Use Form Zero

	Article: Q148904
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks, all print jobs
	revert to form zero, even if a different form number or name is used.
	
	CAUSE
	=====
	
	The option to select a form on the Capture Settings tab in the printer's
	properties is not functioning. Entering a form number or name other than form
	zero has no effect when you are using the Microsoft Client for NetWare Networks.
	
	RESOLUTION
	==========
	
	To work around this problem, use the following steps.
	
	NOTE: This workaround requires using a real-mode Novell NetWare client.
	
	1. Configure your computer to use a real-mode NetWare client (such as NETX or
	  VLM).
	
	2. Place a capture statement specifying the proper form in the login script.
	
	3. Configure the printer driver in Windows 95 to print to LPT1.DOS (or LPT2.DOS,
	  and so on).
	
	4. Restart the computer.
	
	To change the form number being used, issue a new capture command in an MS-DOS
	session.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
