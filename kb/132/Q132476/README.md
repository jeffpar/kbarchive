---
layout: page
title: "Q132476: Visual Basic Applications Cannot Print When Run from Scheduler"
permalink: /kb/132/Q132476/
---

## Q132476: Visual Basic Applications Cannot Print When Run from Scheduler

	Article: Q132476
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you schedule a Visual Basic application that uses the printer object, it
	fails to print and/or one of the following errors appear:
	
	  Printer Error
	
	  -or-
	
	  Unexpected error; quitting.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	- Use the Administrator account to start Schedule service,
	
	  AND
	
	- Do not use the /Interactive switch on the AT command and/or do not select
	  "Allow Service to Interact with Desktop" for the Startup of the Schedule
	  service.
	
	Additional query words: prodnt schedule VB Print
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
